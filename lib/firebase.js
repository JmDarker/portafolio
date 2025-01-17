// lib/firebase.js (recomendado) o firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions"; // Importa getFunctions

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID" // Opcional
};

// Inicializar Firebase (solo una vez)
let firebaseApp;
if (!getApps().length) { // Verifica si ya se inicializó
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApps()[0]; // Si ya existe una app inicializada, la reutiliza
}

// Inicializar otros servicios de Firebase (opcional)
let analytics;
if (typeof window !== 'undefined') { // Solo inicializa analytics en el cliente
    analytics = getAnalytics(firebaseApp);
}

const functions = getFunctions(firebaseApp); // Inicializa Cloud Functions

export { firebaseApp, analytics, functions }; // Exporta firebaseApp, analytics y functions