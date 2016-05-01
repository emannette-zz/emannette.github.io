(function() {

  var canvas = document.getElementById('roots'),
      ctx    = canvas.getContext('2d'),
      stack  = [],
      w      = window.innerWidth,
      h      = 400;

  canvas.width  = w;
  canvas.height = h;

  var draw = function() {
    ctx.fillStyle = '#786e4a';
    ctx.fillRect(0, 0, w, h);
  };

  var roots = function(startX, startY, rootWidth, level) {

    if (level < 6) {
      var changeX = 100 / (level + 1);
      var changeY = 50 / (level + 1);

      var topRightX = startX + Math.random() * changeX;
      var topRightY = startY - Math.random() * changeY;

      var topLeftX = startX - Math.random() * changeX;
      var topLeftY = startY - Math.random() * changeY;

      ctx.strokeStyle = '#e3d689';

      // draw right branch
      ctx.beginPath();
      ctx.moveTo(startX + rootWidth / 4, startY);
      ctx.quadraticCurveTo(startX + rootWidth / 4, startY - rootWidth, topRightX, topRightY);
      ctx.lineWidth = rootWidth;
      ctx.lineCap = 'round';
      // ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // draw left branch
      ctx.beginPath();
      ctx.moveTo(startX - rootWidth / 4, startY);
      ctx.quadraticCurveTo(startX - rootWidth / 4, startY - rootWidth, topLeftX, topLeftY);
      ctx.lineWidth = rootWidth;
      ctx.lineCap = 'round';
      // ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      roots(topRightX, topRightY, rootWidth * 0.5, level + 1);
      roots(topLeftX, topLeftY, rootWidth * 0.5, level + 1);
    }
    // console.log('drawing roots!');
  };

  var createRoots = function() {
    for (var i = 0; i < 30; i++) {
      var randomRoot = Math.random() * w;
      roots(randomRoot, h + 7, 4, 0);
    }
  };

  var drawRoots = function() {
    draw();
    createRoots();
  };

  drawRoots();

})();
