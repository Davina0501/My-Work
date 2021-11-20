//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDv5r7zsekYbPr2M359M5GQavvuJtV_Cd0",
      authDomain: "c-93-e2253.firebaseapp.com",
      databaseURL: "https://c-93-e2253-default-rtdb.firebaseio.com",
      projectId: "c-93-e2253",
      storageBucket: "c-93-e2253.appspot.com",
      messagingSenderId: "1062029330534",
      appId: "1:1062029330534:web:ddef3249f9f6e19e8f45a7",
  };
  firebase.initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+room_name).on('value', 
  function(snapshot) { document.getElementById("output").innerHTML = "";  
  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
  if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  console.log(firebase_message_id);
  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];
  name_with_tag="<h4>"+ name + "<img class='user_tick' src=',download.jpg'></h4>";
  message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
  like_button="<button class='btn btn-warning' id=" + firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:+";
  row=name_with_tag + message_with_tag + like_button + span_with_tag;
  document.getElementById("output").innerHTML +=row;
} });  }); }
//Start code
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name.push({name:user_name,msg:message,like:0}))
      document.getElementById("msg").value="";
}
//End code

getData();

function updatelike(message_id){
  console.log("Clicked On Like Button-"+ message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}

