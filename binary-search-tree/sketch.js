var tree
var radius = 20
var levelGap = 40
var iterations = 0
var maxRange = 100

var numbers = [40,30,20,10,5,15,25,35,45,22,27,37,36,38,33,32,34,46,48,47,49,43,41,42,44]

function setup() {
	createCanvas(windowWidth,600)
	tree = new Tree(radius,numbers[iterations],levelGap)
	frameRate(5)
}

function draw() {
	background('white')
	if (iterations < numbers.length) {
		iterations++
		tree.add(numbers[iterations],levelGap)
	}
	tree.show(tree.root,tree.root)
	console.log('Calling Draw')
}