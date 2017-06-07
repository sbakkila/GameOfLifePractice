var game = new GameOfLife(document.getElementById('main'))

// Connect #play_btn to the play function
document.getElementById('play_btn')
  .addEventListener(game.play)

// TODO: Connect other buttons.

function GameOfLife(container, width=128, height=128) {  
  // Create boards for the present and future.
  // Game boards are somewhat expensive to create, so we're going
  // to be reusing them. After we advance the game one step, `future`
  // will become `present` and vice versa.
  var present = createBoard(width, height); // createBoard is in board.js
  var future = createBoard(width, height);

  var table = createTable();
  table.addEventListener('mousedown', toggleCellFromEvent)

  function createTable() {
    // create <table> element
    var table = document.createElement('table');       // <table>

    for (var r = 0; r < height; r++) {
      var tr = document.createElement('tr');           //   <tr>
      for (var c = 0; c < width; c++) {                //     For instance, at r=2, c=3:
        var td = document.createElement('td');         //     <td
        td.id = `${r}-${c}`                            //       id="2-3">
        // We'll put the coordinate on the cell
        // Element itself.
        td.coord = [r, c];
        tr.appendChild(td);                            //     </td>
      }
      table.appendChild(tr);                           //   </tr>
    }                                                  //  </table>
    return table    
  }
  
  function toggleCellFromEvent(event) {
    // FIXME: This currently always toggles cell (0, 0).
    // How do we get the of the cell that was clicked on?
    // HINT: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    var cell = document.getElementById('0-0'); // ⬅️ Fix me

    toggleCellAt(present, cell.coords);
    paint()
  }

  function paint() {
    
  }

  function step() {
    step(present, future)
    
    // Swap present and future
    [present, future] = [future, present]
  }

  function play() {
    // TODO:
    // Start Auto-Play by running the 'step' function
    // automatically repeatedly every fixed time interval
    
    // HINT:
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval    
  }

  function stop() {
    // TODO: Stop autoplay.

    // HINT:
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
  }

  function togglePlaying() {
    // TODO: If we're playing, stop. Otherwise, start playing.
  }

  function clear() {
    // TODO: Clear the board
  }

  return {play, stop, togglePlaying, clear}
};
