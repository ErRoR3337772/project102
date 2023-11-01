// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
firebaseConfig = {
    apiKey: "AIzaSyCdjhsvLilIm1LiB2PpbHHHxoap1qiXlB0",
    authDomain: "p-22ff1.firebaseapp.com",
    databaseURL: "https://p-22ff1-default-rtdb.firebaseio.com",
    projectId: "p-22ff1",
    storageBucket: "p-22ff1.appspot.com",
    messagingSenderId: "164941289597",
    appId: "1:164941289597:web:8748fd8f4b8724d67e3914"}


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

function getData(){firebase.database().ref("/").on('value',
function (snapshot) {document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) {childKey = 
childSnapshot.key;
                Room_names = childKey;
                //start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                //end code
             });});}
             getData();





