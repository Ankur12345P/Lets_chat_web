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
  user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome " + user_name +"!"
  function addRoom()
{

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "chat_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "chat_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("root_name");
      window.location = "index.html";
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
 }


