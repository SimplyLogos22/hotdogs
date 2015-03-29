window.VYW = window.VYW || {};
(function(VYW) {

	/**
	 * Creates a new game board instance
	 * @param {number} w - The board width
	 * @param {number} h - The board height
	 * @param {number} boxSize - The box size of each box on the board
	 * @param {string} color - The board color
	 * @param {string} borderColor - The board border color
	 * @constructor
	 */
	function Board(w, h, boxSize, color, borderColor) {
		this.rectangle = new VYW.Rectangle(0, 0, w, h);
		this.boxSize = boxSize;
		this.color = color;
		this.borderColor = borderColor || '#000000';

		// Hold the number of boxes we can have on the board on X/Y axis
		this.horizontalBoxes = Math.floor(this.rectangle.width / this.boxSize);
		this.verticalBoxes = Math.floor(this.rectangle.height / this.boxSize);
	}

	/**
	 * Convert a box index to screen location
	 * @param {number} boxIndex - A box index
	 * @returns {number} The screen location on the box
	 */
	Board.prototype.toScreen = function(boxIndex) {
		// Make sure that boxIndex is integer
		return Math.floor(boxIndex) * this.boxSize;
	};

	/**
	 * Draws the board
	 * @param {Graphics} graphics - The game graphics
	 */
	Board.prototype.draw = function(graphics) {
		graphics.clear();
		graphics.fillRectangle(this.rectangle,  this.color);
		graphics.drawRectangle(this.rectangle, this.borderColor);
	};

	VYW.Board = Board;

}(window.VYW));
