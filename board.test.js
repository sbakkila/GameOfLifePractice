describe('new Board', () => {
  it('creates a 128x128 board by default', () => {
    var board = new Board
    expect(board.width).toEqual(128)
    expect(board.height).toEqual(128)
    expect(board.cells.length).toEqual(128 * 128)
  })

  it('creates a board of a specified size', () => {
    var board = new Board(7, 9)
    expect(board.width).toEqual(7)
    expect(board.height).toEqual(9)
    expect(board.cells.length).toEqual(7 * 9)
  })
})

describe('Board::indexFor(coords: [row, col])', () => {  
  it('returns 0 for (0, 0)', () => {
    expect(new Board().indexFor([0, 0])).toEqual(0)
  })

  describe('uses row major indexing', () => {
    var board = new Board()

    it('so advancing col by 1 increases the index by 1', () => {
      expect(board.indexFor([0, 1])).toEqual(1)
    })

    it('so advancing row by 1 increases the index by board.width', () => {
      expect(board.indexFor([3, 0])).toEqual(3 * board.width)
    })
  })

  it('returns the last index for (rows - 1, cols - 1)', () => {
    expect(new Board(10, 7).indexFor([6, 9])).toEqual(10 * 7 - 1)
  })
})

describe('Board::set(coords, value)', () => {
  var board; beforeEach(() => board = new Board)

  it('sets (0, 0) to true', () => {
    board.set([0, 0], true)
    expect(board.cells[0]).toEqual(1)
  })

  it('sets some arbitrary middle cell to true', () => {
    var coords = [19, 7]
    board.set(coords, true)
    expect(board.get(coords)).toBeTruthy()
  })

  it('unsets cells as well', () => {
    var coords = [board.width - 1, board.height - 1]
    board.set(coords, true)
    expect(board.get(coords)).toBeTruthy()
    board.set(coords, false)
    expect(board.get(coords)).toBeFalsy()
  })
})

describe('Board::toggle(coords, value)', () => {
  var board; beforeEach(() => board = new Board)

  it('switches cells from off to on', () => {
    var coord = [0, 0]
    expect(board.get(coord)).toBeFalsy()
    board.toggle(coord)
    expect(board.get(coord)).toBeTruthy()
  })

  it('switches cells from on to off', () => {
    var coord = [0, 0]
    board.set(coord, true)
    expect(board.get(coord)).toBeTruthy()
    board.toggle(coord)
    expect(board.get(coord)).toBeFalsy()
  })
})

describe('Board::livingNeighbors(coords)', () => {
  var board = new Board(3, 3, [1, 1, 1, 1, 1, 1, 1, 1, 1])  
  it('treats cells off the board as dead', () => {
    expect(board.livingNeighbors([0, 0])).toEqual(3)
  })

  it("doesn't include the cell itself", () => {
    var board = new Board(3, 3, [1, 1, 1, 1, 1, 1, 1, 1, 1])
    expect(board.livingNeighbors([1, 1])).toEqual(8)
  })

  it('counts only living cells', () => {
    var board = new Board(3, 3, [1, 1, 1, 1, 1, 1, 0, 0, 0])
    expect(board.livingNeighbors([1, 1])).toEqual(5)
  })
})

describe('step(present: Board, future: Board!, rules)', () => {
  describe('with rules that turn everything on', () => {
    function everythingLives() { return true }

    it('sets all cells alive in the future', () => {
      var present = new Board, future = new Board
      step(present, future)
      var livingCells = future.cells.reduce((x, y) => x + y)
      expect(livingCells).toEqual(future.width * future.height)
    })
  })

  var glider = new Board(3, 3, [
    0, 1, 0,
    0, 0, 1,
    1, 1, 1,
  ])
  var block = new Board(2, 2, [
    1, 1,
    1, 1,
  ])

  it('does nothing to a block', () => {

  })
})