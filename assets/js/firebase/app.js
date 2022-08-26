  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_gRwqIk9_tObvL0H1F8_hSXIKC78e78M",
    authDomain: "semana-mundo-invertido-6cf2d.firebaseapp.com",
    projectId: "semana-mundo-invertido-6cf2d",
    storageBucket: "semana-mundo-invertido-6cf2d.appspot.com",
    messagingSenderId: "1085561866116",
    appId: "1:1085561866116:web:1583d08aa266436145bfd1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app