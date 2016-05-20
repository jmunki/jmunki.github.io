var config = {
  apiKey: "AIzaSyAPj07uAqzOIW4aSK2u4k__saDuvkHD0FA",
  authDomain: "github-page-cb972.firebaseapp.com",
  databaseURL: "https://github-page-cb972.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

firebase.database().ref().on("value", function(snapshot) {
  var snapshot = snapshot.val().isaac;

  $.each(snapshot.items, function(i, val) {
    renderItem(val);
  });
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function renderItem(item)
{
    
    var itemImage = "<span class='img-thumbnail' style='padding: 100px;'></span>";
    itemImage.backgroundImage = 'url(https://firebasestorage.googleapis.com/v0/b/github-page-cb972.appspot.com/o/rebirth-items.png?alt=media&token=76de1e3a-f302-4dba-89f0-5437d35bc84a)';
    itemImage.backgroundPosition = item.image.x+"px "+item.image.y+"px";
    var itemHeader = "<h4>"+item.name+" - "+item.description+"</h4>";
    var itemBody = "<ul>";
    $.each(item.effects, function(i, val){
      itemBody += "<li>"+val+"</li>";
    });
    itemBody += "</ul>";

    var itemContent = "<div class='col-md-4'>"+itemImage+"</div>"
      +"<div class='col-md-4'>"+itemHeader+"</div>"
      +"<div class='col-md-4'>"+itemBody+"</div>";

    var itemRow = "<div class='row'>"+itemContent+"</div>";
    $('#main-container').append(itemRow);
}