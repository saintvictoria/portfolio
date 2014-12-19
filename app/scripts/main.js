var process = function(data) {
  var photos = data.data;
  var instagram = $('#insta');
  photos.forEach(function(image) {
    var img = $('<img>');
    var current = image.images.low_resolution;
    img.attr('src', current.url);
    img.attr('width', current.width);
    img.attr('height', current.height);
    instagram.append(img);

  });
};


  var myonload = function() {
  var url = "https://api.instagram.com/v1/users/394981/media/recent?count=3&client_id=27494393377447ffa61bb941dda87a1f"

  //$.getJSON(url, );
};

myonload();
//$(document).on('load',myonload);

/*
"images": {
"low_resolution": {
"url": "http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10844283_315738051969858_385669297_a.jpg",
"width": 306,
"height": 306

'scripts/instagram.json'
https://api.instagram.com/v1/users/394981/media/recent?count=3&client_id=27494393377447ffa61bb941dda87a1f"
https://api.instagram.com/v1/users/search?q=saintvictoria&client_id=27494393377447ffa61bb941dda87a1f
"id": "394981"
*/
