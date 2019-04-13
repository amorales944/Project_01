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

    // loading GIFS onto page owhen website is loaded
 $( document ).ready(function() {
  $("#canvasgifs1").empty();
  
      
  var a = $("<img>");
  
  a.attr("src", "assets/images/Placeholderimage.png");
  a.width(50);
 

  $("#canvasgifs1").append(a);
  console.log(a)



  });



  
