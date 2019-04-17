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


const slotsarray = ["./assets/images/cherry.png","./assets/images/diamond.png",
"./assets/images/seven.png","./assets/images/orange.png"]

var randomimg = Math.floor(Math.random() * slotsarray.length);


$("#lever").on("click", function(){
   
  //Turns Lever button down
  var leverImg = $("#leverBtn").attr("src", "./assets/images/leverDownImg.png");
   
   
   
  //  Fills up slots
   $("#canvasgifs1").empty();
   
   $("#canvasgifs1").html(randomimg);
   
   console.log(randomimg)
   return false;
 

 });

 


