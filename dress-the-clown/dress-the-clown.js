// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

const bodyparts = []
bodyparts.push({
	element: document.getElementsByClassName(
		'dress-an-image head'
	)[0],
	index: 3,
	name: 'head',
})
bodyparts.push({
	element: document.getElementsByClassName(
		'dress-an-image body'
	)[0],
	index: 4,
	name: 'body',
})
bodyparts.push({
	element: document.getElementsByClassName(
		'dress-an-image shoes'
	)[0],
	index: 4,
	name: 'shoes',
})

let clothingIndex = 0
let xOrigin = 0
let yOrigin = 0

// Setup indicator arrow immage
const directionArrow = createArrow()
document.body.appendChild(directionArrow)

// Save feature
document
	.getElementById('saveButton')
	.addEventListener('click', function () {
		// Setup screenshot canvas
		html2canvas(document.querySelector('#capture')).then(
			(canvas) => {
				console.log(canvas)
				document.body.appendChild(canvas)
			}
		)
	})

//detecting arrow key presses
document.addEventListener('keydown', function (e) {
	switch (e.code) {
		case 'ArrowLeft':
			changeClothes(0)
			break
		case 'ArrowUp':
			changeBodyPart(0)
			break
		case 'ArrowRight':
			changeClothes(1)
			break
		case 'ArrowDown':
			changeBodyPart(1)
			break
	}
})

function changeBodyPart(direction) {
	if (direction) {
		if (clothingIndex < 2) clothingIndex++
	} else {
		if (clothingIndex > 0) clothingIndex--
	}

	moveArrow(clothingIndex)
}

function changeClothes(direction) {
	const part = bodyparts[clothingIndex]
	if (direction) {
		part.index++
		if (part.index == 6) part.index = 0
	} else {
		part.index--
		if (part.index == -1) part.index = 5
	}

	part.element.src =
		'./images/' + part.name + part.index + '.png'
}

// Creates a floating image element with an arrow
function createArrow() {
	let arrow = document.createElement('img')
	arrow.src = 'images/red-arrow-gf648d2a24_640.png'
	arrow.style.width = '150px'
	arrow.style.height = '100px'
	arrow.style.transform = 'scaleX(-1)'
	//arrow.style.display = 'none'
	arrow.style.position = 'absolute'
	arrow.style.top = 0
	arrow.style.left = 0

	const boundingRect = document
		.getElementById('capture')
		.getBoundingClientRect()
	xOrigin = boundingRect.x + -80
	arrow.style.left = xOrigin + 'px'
	yOrigin = boundingRect.y + 70
	arrow.style.top = yOrigin + 'px'

	return arrow
}

function moveArrow(index) {
	let y = index * 200

	directionArrow.style.left = xOrigin + 'px'
	directionArrow.style.top = yOrigin + y + 'px'
}

// Window resize event
window.addEventListener('resize', function () {
	const boundingRect = document
		.getElementById('capture')
		.getBoundingClientRect()

	xOrigin = boundingRect.x + -80
	yOrigin = boundingRect.y + 70

	moveArrow(clothingIndex)
})
