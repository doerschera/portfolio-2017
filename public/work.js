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

})
