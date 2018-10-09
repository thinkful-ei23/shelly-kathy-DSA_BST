'use strict'

const BinarySearchTree = require('./bst.js');
let bst = new BinarySearchTree;

function main() {
	bst.insert('3', 'C')
	bst.insert('1', 'A')
	bst.insert('4', 'D')
	bst.insert('6', 'F')
	bst.insert('9', 'I')
	bst.insert('2', 'B')
	bst.insert('5', 'E')
	bst.insert('7', 'G')
	console.log(bst, 'Grow tree, grow!!');
}
main();

