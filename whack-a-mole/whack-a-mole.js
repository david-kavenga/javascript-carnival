// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

const cellsArr = []
const cells = document.getElementsByTagName('td')

// add event listeners an populate cellsArr
for (let td of cells) {
	td.addEventListener('click', whackedMole)
	cellsArr.push({ element: td, isMole: false })
}

// Place initial mole
placeMole(0)

function whackedMole(evt) {
	const cell = cellsArr.find(
		(entry) => entry.element == evt.target.closest('td')
	)

	if (cell.isMole == true) {
		placeMole(cell)
	}
}

function placeMole(prev) {
	if (prev != 0) {
		prev.isMole = false
		let cells = prev.element.children
		prev.element.removeChild(cells[0])
	}

	let pos = Math.floor(Math.random() * cellsArr.length)
	cellsArr[pos].isMole = true
	const img = cellsArr[pos].element.appendChild(
		document.createElement('img')
	)
	img.src = 'mole.PNG'
	img.style.width = '74px'
	img.style.height = '71px'
}
