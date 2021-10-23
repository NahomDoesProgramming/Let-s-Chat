username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!"
var firebaseConfig = {
  apiKey: "AIzaSyB1CHJI9HxCzKjuVFcazwlXVvIzWRJtGEU",
  authDomain: "let-s-chat-c8016.firebaseapp.com",
  databaseURL: "https://let-s-chat-c8016-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-c8016",
  storageBucket: "let-s-chat-c8016.appspot.com",
  messagingSenderId: "521876500464",
  appId: "1:521876500464:web:2450217fdbd0dc7605b735",
  measurementId: "G-KSECJ34P4V"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
