var process = function(data) {
  var photos = data.data;
  var instagram = $('#insta');
  photos.forEach(function(image) {
    var img = $('<img>');
    var current = image.images.low_resolution;
    img.attr('src', current.url.replace(/^[^:]*:/, ''));
    img.attr('width', current.width);
    img.attr('height', current.height);
    instagram.append(img);

  });
};
