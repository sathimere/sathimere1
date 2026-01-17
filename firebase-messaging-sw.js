importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCNujpIBIvJXMk34yQF1VeuTVFi5M7vdc0",
  authDomain: "sathimere-415fa.firebaseapp.com",
  projectId: "sathimere-415fa",
  messagingSenderId: "290492321074",
  appId: "1:290492321074:web:05aa3d9abc2d3ab7635b2b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "icon.png"
  });
});
