// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

const cellsArr = []
const cells = document.getElementsByTagName('td')
let hitCount = 0
let highScore = 0
let challenge = 0

// Set up Mole
const moleImg = document.createElement('img')
moleImg.src = 'mole.PNG'
moleImg.style.width = '74px'
moleImg.style.height = '71px'
moleImg.style.userSelect = 'none'
moleImg.style.pointerEvents = 'none'
moleImg.ondragstart = () => {
	return false
}

// Set up Audio
const hitAudio = new Audio('whack-audio.wav')
hitAudio.volume = 0.25
const missAudio = new Audio(
	'223489__mrgreaper__bunnynernernanerner.ogg'
)
missAudio.volume = 0.25

// Add event listeners an populate cellsArr
for (let td of cells) {
	td.addEventListener('click', whackedMole)
	cellsArr.push({ element: td, isMole: false })
}
document
	.getElementById('startChallenge')
	.addEventListener('click', startChallenge)

// Set move timer
let moveTimeout = ''

window.document.onload = function (e) {
	console.log('Start')
	moveTimeout = setTimeout(function () {
		previousMole = placeMole(previousMole)
	}, 1000)
}

// Place initial mole
let previousMole = placeMole(0)

function whackedMole(evt) {
	// Get clicked cell
	const cell = cellsArr.find(
		(entry) => entry.element == evt.target.closest('td')
	)

	// Whack and place mole
	if (cell.isMole == true) {
		hitAudio.currentTime = 0
		hitAudio.play()
		if (challenge) hitCount++
		previousMole = placeMole(previousMole)
	}
	// Missed!
	else {
		missAudio.currentTime = 0
		missAudio.play()
	}
}

function placeMole(prev) {
	// Remove old mole
	deMolify(prev)

	// Choose a different cell index
	let pos = chooseCell(
		cellsArr.indexOf(prev),
		cellsArr.length
	)

	// Make the cell a mole
	molify(cellsArr[pos])

	// Update the hit count
	document.getElementById('count').innerText = hitCount

	//reset move timer to random time
	clearTimeout(moveTimeout)
	let randTime = 100 * getRandomInt(5) + 500
	moveTimeout = setTimeout(function () {
		previousMole = placeMole(previousMole)
	}, randTime)

	return cellsArr[pos]
}

function startChallenge() {
	// Switch to challenge mode
	challenge = true
	let mode = document.getElementById('gameType')
	mode.innerText = '--Challenge Mode-- 10'

	// Set game timer
	let timeLeft = 10
	let gameTimer = setInterval(function () {
		if (timeLeft == 0) {
			// Switch to practice mode and update scores
			challenge = false
			clearInterval(gameTimer)
			mode.innerText = '--Practice Mode--'
			updateScores()
		} else {
			// Count down
			timeLeft--
			mode.innerText = '--Challenge Mode-- ' + timeLeft
		}
	}, 1000)
}

function updateScores() {
	let alertMsg = 'Times Up! Score: ' + hitCount

	// New High Score
	if (hitCount > highScore) {
		highScore = hitCount
		document.getElementById('highScore').innerText =
			highScore
		alertMsg += '\nNEW HIGH SCORE!'
	}

	// Game end alert
	alert(alertMsg)

	hitCount = 0
	document.getElementById('count').innerText = hitCount
}

function chooseCell(prevInd, length) {
	if (prevInd == 'undefined') return getRandomInt(length)

	// generate new random index until it isn't the old cell location
	let pos = prevInd
	while (pos == prevInd) {
		pos = getRandomInt(length)
	}

	return pos
}

function molify(cell) {
	// Put mole in a cell
	cell.isMole = true
	cell.element.insertBefore(moleImg, null)
}

function deMolify(cell) {
	// Remove mole from a cell
	cell.isMole = false
}

/* Generates a random whole number */
function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}
