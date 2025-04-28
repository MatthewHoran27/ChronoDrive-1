/*eslint-env es6*/

$('.ui.embed').embed();


function toggleMenu() {
  $('.ui.sidebar').sidebar('toggle');
}

function loadGame(game) {
  const gameContainer = document.getElementById('game-container');
  
  let iframeUrl = '';

  switch(game) {
    case 'game1':
      iframeUrl = 'https://editor.p5js.org/20093995/full/7nzdvOibh';
      break;
    case 'game2':
      iframeUrl = 'https://editor.p5js.org/20093995/full/9mGtNLzeH';
      break;
    case 'game3':
      iframeUrl = 'https://editor.p5js.org/20093995/full/Um3uH-o0d';
      break;
    default:
      iframeUrl = '';
  }

  // Add fade-out first
  $(gameContainer).fadeOut(200, function() {
    // Once fade-out is complete, replace the iframe
    gameContainer.innerHTML = `<iframe src="${iframeUrl}" frameborder="0"></iframe>`;
    
    // Then fade it back in
    $(gameContainer).fadeIn(200);
  });
}