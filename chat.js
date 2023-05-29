// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyA6uQZmYqUTQmhsNcuyD4jPFCymAI57CcY",
    authDomain: "web-chat-bbf40.firebaseapp.com",
    databaseURL: "https://web-chat-bbf40-default-rtdb.firebaseio.com",
    projectId: "web-chat-bbf40",
    storageBucket: "web-chat-bbf40.appspot.com",
    messagingSenderId: "708878755101",
    appId: "1:708878755101:web:467bac16a16c03cc9cedf4",
    measurementId: "G-M06RHH0BFG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



