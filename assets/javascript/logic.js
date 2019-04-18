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

 
  console.log("sfsfas");
  $('#slot1').empty('src','');
  $('#slot2').empty('src','');
  $('#slot3').empty('src','');

  for (i=0; i < slotsarray.length; i++) {
    var b = $("<img>")
    console.log(orange)
    b.addClass('carousel-inner')
    b.attr(slotsarray[i])
    $('#slot1').append(orange) }

    // return {
    //   cherry: {
    //     points: Math.floor(Math.random() * 12) + 1,
    //     imageUrl: "assets/images/cherry.png"
    //   },
    //   seven: {
    //     points: Math.floor(Math.random() * 12) + 1,
    //     imageUrl: "assets/images/seven.png"
    //   },
    //   diamond: {
    //     points: Math.floor(Math.random() * 12) + 1,
    //     imageUrl: "assets/images/diamond.png"
    //   },
    //   orange: {
    //     points: Math.floor(Math.random() * 12) + 1,
    //     imageUrl: "assets/images/orange.png"
    //   }
    // };
  




  
};

$("#lever").on("click", function(){
  console.log("clicked");
 //Turns Lever button down
 var leverImg = $("#leverBtn").attr("src", "./assets/images/leverDownImg.png");

 fillslots();
 



});





  


