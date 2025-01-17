const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configuración del transportador (usando variables de entorno)
let transporter;

// Determina el transportador según la configuración (para mayor flexibilidad)
if (process.env.EMAIL_SERVICE === "gmail") {
    transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
} else if (process.env.EMAIL_SERVICE === "hotmail") {
    transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });
} else if (process.env.EMAIL_SERVICE === "sendgrid") {
    transporter = nodemailer.createTransport({
        service: "SendGrid",
        auth: {
            user: "apikey",
            pass: process.env.SENDGRID_API_KEY,
        },
    });
}
// Puedes agregar configuraciones para otros proveedores aquí (Mailgun, etc.)
else {
    console.error("No se ha configurado un servicio de correo válido (EMAIL_SERVICE).");
    // Lanza un error para detener el despliegue si no hay configuración
    throw new Error("No se ha configurado un servicio de correo válido (EMAIL_SERVICE).");
}


exports.sendEmail = functions.https.onCall(async (data, context) => {
    try {
        const { name, email, message } = data;

        // Validaciones en el backend (importante por seguridad)
        if (!name || !email || !message) {
            throw new functions.https.HttpsError(
                "invalid-argument",
                "Por favor, completa todos los campos (Nombre, Correo y Mensaje)."
            );
        }

        if (!isValidEmail(email)) {
          throw new functions.https.HttpsError(
            "invalid-argument",
            "Por favor, ingresa un correo electrónico válido."
          );
        }

        const mailOptions = {
            from: process.env.EMAIL_USER, // El correo desde el que se envía
            to: "tu_correo_de_destino@example.com", // Reemplaza con tu correo
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
            html: `<p><b>Nombre:</b> ${name}</p><p><b>Correo:</b> ${email}</p><p><b>Mensaje:</b> ${message}</p>`, // Opcional: formato HTML
        };

        await transporter.sendMail(mailOptions);

        return { message: "Correo electrónico enviado correctamente." };
    } catch (error) {
        console.error("Error al enviar el correo:", error);

        if (error instanceof functions.https.HttpsError) {
          throw error; // Re-lanza el error de HTTPS para que se maneje en el cliente
        } else {
          // Si es un error diferente, lanza un error interno genérico
          throw new functions.https.HttpsError("internal", "Error interno al enviar el correo.");
        }
    }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}