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


  $(gameContainer).fadeOut(200, function() {

    gameContainer.innerHTML = `<iframe src="${iframeUrl}" frameborder="0"></iframe>`;
    
    $(gameContainer).fadeIn(200);
  });
}