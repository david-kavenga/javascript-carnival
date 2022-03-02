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
