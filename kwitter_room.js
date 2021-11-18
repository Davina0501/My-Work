var firebaseConfig = {
    apiKey: "AIzaSyBWwmvVKoLrOpH_He_uSldOAnVvBp3BVrw",
    authDomain: "project-94-e2b9d.firebaseapp.com",
    projectId: "project-94-e2b9d",
    storageBucket: "project-94-e2b9d.appspot.com",
    messagingSenderId: "525622481600",
    appId: "1:525622481600:web:a2e7f002699a39857c1325",
  };

  firebase.initializeApp(firebaseConfig);

  function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter.html";
 }

 function getdata(){
  firebase.database().ref("/").on('value',function(snapshot)
  {document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKey=childSnapshot.key;
  room_names=childKey;
  console.log("Room Name-"+room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML+=row;});});}
  getdata();