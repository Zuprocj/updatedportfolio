window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}

var config = {
    apiKey: "AIzaSyCaqgVdaG2HOQB-uQZsuzVyPhRt6NywhMk",
    authDomain: "contact-7bdbb.firebaseapp.com",
    databaseURL: "https://contact-7bdbb.firebaseio.com",
    projectId: "contact-7bdbb",
    storageBucket: "",
  };
  
  firebase.initializeApp(config);
  
  var dataRef = firebase.database();
  
  var name = "";
  var email = "";
  var message = "";
  
  $("#submit").on("click", function(event) {
  
    event.preventDefault();
  
    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();
    message = $("#message-input").val().trim();
  
    dataRef.ref().push({
        name: name,
        email: email,
        messaget: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
 

