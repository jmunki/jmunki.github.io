var config = {
  apiKey: "AIzaSyAPj07uAqzOIW4aSK2u4k__saDuvkHD0FA",
  authDomain: "github-page-cb972.firebaseapp.com",
  databaseURL: "https://github-page-cb972.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

firebase.database().ref().on("value", function(snapshot) {
  var snapshot = JSON.stringify(snapshot.val().isaac);
  console.log(snapshot);
  $.each(snapshot.items, function(i, val) {
    var item = "<div class='row'>"+val+"</div>";
    console.log(item);
    $('#main-container').appendChild(item);
  });
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});