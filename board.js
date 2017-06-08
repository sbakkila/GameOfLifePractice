/**
 * Given a width and height, construct a Board.
 * 
 * @param {Int} width 
 * @param {Int} height 
 */
function Board(width=32, height=32, cells) {
  this.width = width
  this.height = height
  // We'll store our cells in a 1D typed array.
  // Typed arrays are a lot like normal arrays, but they're
  // (1) much faster, and (2) can only hold one kind of data type.
  // In this case, we're creating a Uint8 typed array, which means
  // it can only hold unsigned, 8-bit integers (ints from 0 to 255).
  this.cells = cells || new Uint8Array(width * height)
}

Board.prototype.indexFor = function([row, col]) {
  if (row < 0 || row >= this.height || col < 0 || col >= this.width)
    return
  return row * this.width + col
}

Board.prototype.get = function (coords) {
  return this.cells[this.indexFor(coords)] || 0
}

Board.prototype.set = function(coords, value) {
  // TODO
}

Board.prototype.livingNeighbors = function([row, col]) {
  // TODO
}

Board.prototype.toggle = function(coords) {
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
function tick(present, future, rules=conway) {
  // TODO
  return [future, present]
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