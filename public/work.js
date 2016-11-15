$(document).ready(function() {

  var counter = 1;
  var projectId = '#'+counter;

  $(projectId).show();

  $('.right-arrow').on('click', function() {
    $(projectId).fadeOut('slow', function() {
      if(counter == 6) {
        counter = 1;
        projectId = '#'+counter;
        $(projectId).fadeIn();
      } else {
        counter++;
        projectId = '#'+counter;
        $(projectId).fadeIn();
      }
    })
  })

  $('.left-arrow').on('click', function() {
    $(projectId).fadeOut('slow', function() {
      if(counter == 1) {
        counter = 6;
        projectId = '#'+counter;
        $(projectId).fadeIn();
      } else {
        counter--;
        projectId = '#'+counter;
        $(projectId).fadeIn();
      }
    })
  })

  $('.x').on('click', function() {
    $('.arrow').hide();
    $('.project-content').hide(700);
    $('.x').hide();
    $('.upArrow').show();
  })

  $('.upArrow').on('click', function() {
    $('.project-content').show(700);
    $('.upArrow').hide();
    $('.arrow').show();
    $('.x').show();
  })

})
