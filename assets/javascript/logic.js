var config = {
    apiKey: "AIzaSyBkgrPX8HY6Fx6sxtylyG76ZZF2MrKsr7I",
    authDomain: "project-01-42b5e.firebaseapp.com",
    databaseURL: "https://project-01-42b5e.firebaseio.com",
    projectId: "project-01-42b5e",
    storageBucket: "project-01-42b5e.appspot.com",
    messagingSenderId: "663399633555"
  };
  firebase.initializeApp(config);
  var database = firebase.database();


// This is the github sign on part
$("#loginBtn").on("click", function(){
  var provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

// Github sign out
$("#logOutBtn").on("click", function(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
});
  

var cherry = "./assets/images/cherry.png";
var diamond = "./assets/images/diamond.png";
var orange = "./assets/images/orange.png";
var seven =  "./assets/images/seven.png";

  const slotsarray = ["cherry","diamond",
"orange","seven"]

var randomimg = Math.floor(Math.random() * slotsarray.length);

const fillslots = function() {
//  for (i=0, i < slotsarray.length; i++)
 
  console.log("sfsfas");
  $('#slot1').attr('src','');
  $('#slot2').attr('src','');
  $('#slot3').attr('src','');
  
  $('#slot1').attr('src', slotsarray[randomimg]);
  $('#slot2').attr('src', slotsarray[randomimg]);
  $('#slot3').attr('src', slotsarray[randomimg]);
  console.log(slotsarray[randomimg])
}

$(document).ready(function(){

 
// putting starter images into slot machine

  $('#slot1').attr('src','assets/images/cherry.png');
  $('#slot2').attr('src','assets/images/diamond.png');
  $('#slot3').attr('src','assets/images/seven.png');
  


  $("#lever").on("click", function(){
     console.log("clicked");
    //Turns Lever button down
    var leverImg = $("#leverBtn").attr("src", "./assets/images/leverDownImg.png");
  
    fillslots();

$("#lever").on("click", function(){
   
  //Turns Lever button down
  var leverImg = $("#leverBtn").attr("src", "./assets/images/leverDownImg.png");
   });
   
   
  //  Fills up slots
   $("#canvasgifs1").empty();

   });
});


$('.carousel').carousel({
  interval: 20
})


  


