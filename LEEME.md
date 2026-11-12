# Français Básico A1

Curso de francés básico A1 (8 lecciones) para instalar en el móvil desde GitHub Pages.

## Archivos que se suben a GitHub
index.html, lessons.js, firebase-config.js, manifest.webmanifest, sw.js, icon.svg, icon-192.png, icon-512.png

## Firebase (proyecto frances-420aa)
1. Authentication > Método de acceso > Correo electrónico/contraseña: activar.
2. Firestore Database > Crear base de datos (modo producción).
3. Firestore Database > Reglas > pegar esto y Publicar:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /usuarios/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}

El progreso se guarda en usuarios/{tu cuenta}/apps/frances-basico-a1.
