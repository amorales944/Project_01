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
  


  // empty

  
  
  
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





  


