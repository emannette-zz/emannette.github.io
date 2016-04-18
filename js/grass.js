(function() {
  
  var canvas = document.getElementById('grass'),
      ctx    = canvas.getContext('2d'),
      stack  = [],
      w      = window.innerWidth,
      h      = window.innerHeight,
      animation;

  var sun         = document.getElementById('sun'),
      moon        = document.getElementById('moon'),
      lightSwitch = document.getElementById('lightSwitchLabel');

  var draw = function() {
    if(document.getElementById('lightSwitch').checked === true) {
      ctx.fillStyle = '#63a4e9';
    } else {
      ctx.fillStyle = '#031528';
    }
    ctx.fillRect(0, 0, w, h);
    stack.forEach(function(el) {
      el();
    })
    animation = window.requestAnimationFrame(draw);
  }
  // var animation = window.requestAnimationFrame(draw);


  var anim = function() {
    var x = 0, y = 0,
        maxTall  = Math.random() * 100 + 200,
        maxSize  = Math.random() * 100 + 50,
        minSize  = Math.random() * 10  + 5,
        position = Math.random() * w   - w/2,
        speed    = Math.random() * 2,
        c        = function(l, u) {
      return Math.round( Math.random() * (u||127) + l||0);
    }
    var color =
    'rgb('+c(60, 10)+','+c(201, 50)+','+c(120, 50)+')';
    return function() {
      var deviation = Math.cos(x/30) * Math.min(x/40, 50),
          tall      = Math.min(x/2, maxTall),
          size      = Math.min(minSize, maxSize);
          x        += speed;
      ctx.save();
      ctx.strokeWidth = 10;
      ctx.translate(w/2 + position, h)
      if(document.getElementById('lightSwitch').checked === true) {
        ctx.fillStyle = color;
      } else {
        ctx.fillStyle = '#010a13';
      }
      ctx.beginPath();
      ctx.lineTo(-size, 0);
      ctx.quadraticCurveTo(-size, -tall/2, deviation, -tall);
      ctx.quadraticCurveTo(size, -tall/2, size, 0);
      ctx.fill();
      ctx.restore();
    }
  };
  for(var x = 0; x < 300; x++) {
    stack.push(anim());
  }
  canvas.width = w;
  canvas.height = h;
  draw();

  var cancelAnimation = function() {
    window.cancelAnimationFrame(animation);
    setTimeout(draw, 550);
  }

  sun.addEventListener('click', function() {
    cancelAnimation();
  });
  moon.addEventListener('click', function() {
    cancelAnimation();
  });
  lightSwitch.addEventListener('click', function() {
    cancelAnimation();
  });

})();
