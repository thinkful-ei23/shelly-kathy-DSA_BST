'use strict'

const BinarySearchTree = require('./bst.js');
let bst = new BinarySearchTree;

function main() {
	// create a bst
	bst.insert('3', 'C')
	bst.insert('1', 'A')
	bst.insert('4', 'D')
	bst.insert('6', 'F')
	bst.insert('9', 'I')
	bst.insert('2', 'B')
	bst.insert('5', 'E')
	bst.insert('7', 'G')
	// console.log(bst, 'Grow tree, grow!!');
}
main();
// console.log(bst, 'Grow tree, grow!!2');

// find height ================================
function heightOfBST(node) {
	if (!node) {
		return 0
	} else {
		return 1 + Math.max(heightOfBST(node.left), heightOfBST(node.right));
	}
};
// console.log(heightOfBST(bst));


//is it bst? ===============================
function isBST(node, min, max) {
	if (node === null) {
		return false;
	}
	else if (node.value > max || node.value < min) {
		return false;
	}
	else (isBST(node.left, min, node.value) && isBST(node.right, node.value, max))
	return true;
}
// console.log(bst, 'Above isBST');  //? don't have an edge case to test it
console.log(isBST(bst), 'where are you?');

// balanced bst  ===============================

// find mid (/2)
// find mid.right and mid.left
//etc..

// third largest node  ===============================

//find root, then go right
// find right node with right = null
//go back 2 nodes ?

function thirdLargest(node) {
	let count = 0;
	//array.length -2
	if (!node.right) {
		return null
	}
	node.right = currentNode
	currentNode = node.right
	thirdLargest(currentNode.right < next.right)
	count++;
}
console.log(thirdLargest(bst));


