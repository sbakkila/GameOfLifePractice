# Game of Life

* [Learning Objectives](#learning-objectives)
* [Overview](#overview)
    - [What is the Game of Life?](#what-is-the-game-of-life)
    - [How to play the game](#how-to-play-the-game)
* [Building the game of life](#building-the-game-of-life)
    - [Game Elements](#game-elements)
      * [A Board](#a-board)
      * [Control Panel](#control-panel)
  
## Learning Objectives
   * Read and write grid data in a 1D array
   * Implement a cell reducer for a cellular atomata
   * Manipulate DOM elements to match the state of a model
   * Use intervals to manage animations
   * Predict how `this` will be bound, particularly in the context of iterators and event listeners
   * [Default arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
   * [Array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Overview
We are going to program a JavaScript version of the Game of Life. Along the way, we'll continue learning and practicing functional programming, DOM manipulation, and more.

### What is the Game of Life?
[Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life) is a set of rules governing the destruction, persistence, or propagation of neighboring cells in a grid — a pseudo-simulation of life. It was created by John Horton Conway in 1970, in an effort to simplify a concept by the mathematician John von Neumann in the 1940s. The intent and power of the game is not in realistically simulating life, but rather in serving as a simple system that produces complex behavior. In fact, the Game of Life is a [universal Turing machine](http://en.wikipedia.org/wiki/Turing_machine), capable of modeling any algorithmic calculation.

Here is an [example video](http://www.youtube.com/watch?v=C2vgICfQawE) showing many of the complex patterns that the Game of Life can produce.

### How to play the game
The game of life is played on a 2D board (easily modeled as an array), where each cell has two possible states: *living* or *dead*. For each iteration of the board state, the destiny of each cell is determined by these four rules:

  1. Any live cell with two or three live neighbors lives on to the next generation.
  2. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
  3. Any live cell with more than three live neighbors dies, as if by overcrowding.
  4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the *seed* of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — in other words, each generation is a pure function of the preceding one. The discrete moment at which all the births and deaths actually occur is often called a *tick*. The rules are applied repeatedly to create further generations (one new generation per tick).

## Building the Game of Life

### Game Elements

#### A Board
You need to design a 2-d board that can be of a variable dimension. You will need to prompt the user for width and height of the board. In HTML the best way to display this board is probably to use the `<table>` tag and background colors for each of the table cells representing either alive or dead. You must create the board in Javascript only.

> Note: A 12x12 board is provided to you in the starting repo. Allowing the user to customize the dimensions should be considered extra credit.

The board will need an initial position before the game starts. You can set this initial position in two ways:

  * Random - You decide a random configuration each time the game page is loaded
  * Let the user decide - This is the preferable way. You'll need to handle `mousedown` events on the
    board and toggle the status of the cell that was touched.
  
#### Control Panel
The starting point provides a control panel with five buttons:

  * Step
  * Play
  * Pause
  * Reset Random
  * Clear

You need to implement all five of these actions for the game.

#### Tip
You will notice the buttons don't do anything when you click them currently. That's because there is no click event attached to them! You'll need to attach click listeners to the control buttons.


### Game Evolution

The game must evolve, visually, step by step. This means you will need a function like `step()` which goes through the entire board and determines and updates the state for each cell (whether it's living or dead) based on the condition of it's neighboring cells.

## Auto-evolution

Once you have a working step function, you should add an auto-play function that runs the step function every 100 milliseconds or so. You can make this time variable if you want to check the evolution of the game.

<guide>
You've read the above.
</guide>
