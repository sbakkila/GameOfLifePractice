/**
 * Given a width and height, return a Board.
 * 
 * @param {Int} width 
 * @param {Int} height 
 */
function createBoard(width=128, height=128) {
  return {width, height, cells: new Uint8Array(width * height)}
}

function indexForCellAt(board, [row, col]) {
  return row * board.width + col
}

function getCellAt(board, coords) {
  return board.cells[indexForCellAt(coords)]
}

function setCellAt(board, coords, value) {
  // TODO
}

function toggleCellAt(board, coords) {
  // TODO
}

/**
 * Given a present board, a future board, and a rule set, apply
 * the rules to the present and modify the future.
 * 
 * @param {Board} present 
 * @param {Board!} future 
 * @param {(Boolean, Int) -> Boolean} rules 
 */
function step(present, future, rules=conway) {
  // TODO
}

/**
 * Give the vitals of a cell (its current state, and how many living neighbors it
 * currently has), return whether it will be alive in the next tick. 
 * 
 * @param {Boolean} isAlive 
 * @param {Number} numLivingNeighbors 
 */
function conway(isAlive, numLivingNeighbors) {
  // TODO
}