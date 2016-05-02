$(document).ready(function(){

  var hideProjects = function() {
    if (!$('#lightSwitch').attr('checked')) {
      $('#projectsTab').prop('checked', false);
    }
  };


  var fadeSun = function() {
    $('#sun').fadeTo(1000, 0);
    $('#sunGlow').fadeTo(1000, 0);
    $(document.body).css('background-color', '#031528');
  };
  var opaqueSun = function() {
    $('#sun').fadeTo(1000, 1);
    $('#sunGlow').fadeTo(1000, 1);
    $(document.body).css('background-color', '#63a4e9');
  };


  var projectVisibilityRight = function(position) {
    switch (position) {
      case 1640:
        $('#endlessRunner')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#marioQuiz')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#scrollLeft')
          .css('opacity', '1');
        break;
      case 3280:
        $('#marioQuiz')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#fibonacci')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
      break;
      case 4920:
        $('#fibonacci')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#fractals')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
      break;
      case 6560:
        $('#fractals')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#gitStats')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
      break;
      case 8200:
        $('#gitStats')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#translator')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#scrollRight')
          .css('opacity', '0');
      break;
      default:
        $('.project-content')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#endlessRunner')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#scrollRight')
          .css('opacity', '1');
        $('#scrollLeft')
          .css('opacity', '0');
      break;
    }
  };

  var projectVisibilityLeft = function(position) {
    console.log(position);
    switch (position) {
      case 0:
        $('#endlessRunner')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#marioQuiz')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#scrollLeft')
          .css('opacity', '0');
        break;
      case 1640:
        $('#marioQuiz')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#fibonacci')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
      break;
      case 3280:
        $('#fibonacci')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#fractals')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
      break;
      case 4920:
        $('#fractals')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#gitStats')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
      break;
      case 6560:
        $('#gitStats')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#translator')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#scrollRight')
          .css('opacity', '1');
      break;
      default:
        $('.project-content')
          .css('opacity', '0')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#translator')
          .css('opacity', '1')
          .css('transition-duration', '2000ms')
          .css('transition-timing-function', 'ease');
        $('#scrollRight')
          .css('opacity', '0');
        $('#scrollLeft')
          .css('opacity', '1');
      break;
    }
  };



  $('#moon')
    .click(function() {
      $('#lightSwitch').trigger('click');
  });
  $('#sun')
    .click(function() {
      $('#lightSwitch').trigger('click');
  });
  $('#petalWrapper')
    .click(function() {
      $('#projectsTab').trigger('click');
  });


  $('#lightSwitch')
    .click(function() {
      hideProjects();
      if ($('#lightSwitch').is(':checked')) {
        opaqueSun();
      } else {
        fadeSun();
      }
  });


  $('.scroll').click(function() {
    projectVisibilityRight($('#projectsContainer').scrollLeft());
  });


  $('.projects-scroll-right')
    .click(function() {
      var pos = $('#projectsContainer').scrollLeft();
      $('#projectsContainer').animate({
        scrollLeft: pos += window.innerWidth + 200
      }, 800);
      projectVisibilityRight(pos);
  });


  $('.projects-scroll-left')
    .click(function() {
      var pos = $('#projectsContainer').scrollLeft();
      $('#projectsContainer').animate({
        scrollLeft: pos -= window.innerWidth + 200
      }, 800);
      projectVisibilityLeft(pos);
  });


  $('#projectsTab')
    .click(function() {
      $('#sun').css('transition-duration', '2s');
      $('#sunGlow').css('transition-duration', '2s');
    if($('#projectsTab').is(':checked')) {
      $('#endlessRunner')
        .css('opacity', '1')
        .css('transition-duration', '1s');
      $('#scrollLeft')
        .css('opacity', '0');
    } else {
      $('#endlessRunner')
        .css('opacity', '0')
        .css('transition-duration', '200ms');
    }
  });


  (function() {
    $('#sun').css('opacity', '0');
    $('#sunGlow').css('opacity', '0');
    $('#projectsContainer')
      .bind('mousewheel', function() {
        return false;
    });
  })();


});
