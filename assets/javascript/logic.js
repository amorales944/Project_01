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
  








var cherry = 4
var diamond = 3
var orange = 2
var seven =  1

const slotsarray = ["cherry","diamond", "orange","seven"]

var randomimg = Math.floor(Math.random() * slotsarray.length);



$(document).ready(function(){



  $("#lever").on("click", function(){
     console.log("clicked");

    //Turns Lever button down
   $("#leverBtn").attr("src", "./assets/images/leverDownImg.png");
  
     fillslots();
   
    // Stops first carousel
     $("#carouselExampleControls1").carousel('pause')
     $("#carouselExampleControls2").carousel('pause')
     $("#carouselExampleControls3").carousel('pause')
    
     

    });


    
     
  var fillslots = function() {
    $('.carousel').carousel({
      interval: 20
      })
      console.log("function clicked")
    $("#carouselcontrol").carousel('pause')
     };

  });

    

   
    $('.carousel').carousel({
      interval: 20
    })
    console.log("function clicked")
   
   
   
   
   
   
   
   
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
  

  // console.log("sfsfas");
  // $('.carousel').carousel({
  //   interval: 20
  // })

  // console.log("sped up")
 

