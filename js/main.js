$(document).ready(function(){

  function hideProjects() {
    if (!$('#lightSwitch').attr('checked')) {
      $('#projectsTab').prop('checked', false);
    }
  }

  function pullCord() {
    $('#lightSwitchLabel').animate({height: '150px'}, 300, 'linear').delay(250).animate({height: '120px'}, 300, 'linear');
  }

  $('#moon').click(function() {
    pullCord();
    $('#lightSwitch').trigger('click');
  });
  $('#sun').click(function() {
    pullCord();
    $('#lightSwitch').trigger('click');
  });
  $('#lightSwitchLabel').click(function() {
    pullCord();
    $('#lightSwitch').trigger('click');
  });


  $('#lightSwitch').click(function() {
    // $('.about').toggle();
    $('#moon').toggle();
    $('#moonGlow').toggle();
    hideProjects();
    if ($('#lightSwitch').is(':checked')) {
      $(document.body).css('background-color', '#63a4e9');
    } else {
      $(document.body).css('background-color', '#031528')
    }
  });

  $('.projects-scroll-right').click(function() {
    var pos = $('#projectsContainer').scrollLeft();
    $('#projectsContainer').animate({
      scrollLeft: pos += 1205
    }, 800);
    console.log(pos);

  });

  $('.projects-scroll-left').click(function() {
    var pos = $('#projectsContainer').scrollLeft();
    $('#projectsContainer').animate({
      scrollLeft: pos -= 1205
    }, 800);
    console.log(pos);

  });

  $('#projectsTab').click(function() {
      $('#sun').css('transition-duration', '2s');
      $('#sunGlow').css('transition-duration', '2s');
      $('#lightSwitchLabel').css('transition-duration', '2s');
  });

});
