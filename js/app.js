/*(function(){
    setInterval(
        function(){
            document.location.reload()
        },
        1000)
})()
*/

window.onload = function() {
  var board = document.querySelector('.board-js');
  console.log(board);

  board.addEventListener('click',addX);
  function addX(event) {
    event.target.textContent = 'x';
    console.log(event.target);
  }

  board.addEventListener('dblclick',addY);
  function addY(event) {
    event.target.textContent = 'o';
    console.log(event.target);
  }
}

function reset() {
    document.location.reload();
}