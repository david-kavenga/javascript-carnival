// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

const cellsArr = []
const cells = document.getElementsByTagName('td')
let hitCount = 0
let highScore = 0
let challenge = 0

// set up Audio
const swipeAudio = new Audio('whack-audio.wav')
swipeAudio.volume = 0.25

// add event listeners an populate cellsArr
for (let td of cells) {
	td.addEventListener('click', whackedMole)
	cellsArr.push({ element: td, isMole: false })
}

document
	.getElementById('startChallenge')
	.addEventListener('click', start)

// Place initial mole
placeMole(0)

function whackedMole(evt) {
	const cell = cellsArr.find(
		(entry) => entry.element == evt.target.closest('td')
	)

	if (cell.isMole == true) {
		swipeAudio.currentTime = 0
		swipeAudio.play()
		placeMole(cell)
	}
}

function placeMole(prev) {
	if (prev != 0) {
		if (challenge) hitCount++
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

	document.getElementById('count').innerText = hitCount
}

function start() {
	challenge = true
	let mode = document.getElementById('gameType')
	mode.innerText = '--Challenge Mode-- 10'

	let timeLeft = 10
	let gameTimer = setInterval(function () {
		if (timeLeft == 0) {
			challenge = false
			clearInterval(gameTimer)
			mode.innerText = '--Practice Mode--'
			updateScores()
		} else {
			timeLeft--
			mode.innerText = '--Challenge Mode-- ' + timeLeft
		}
	}, 1000)
}

function updateScores() {
	if (hitCount > highScore) {
		highScore = hitCount
		alert('Times Up! Score: ' + hitCount)
		document.getElementById('highScore').innerText =
			highScore
	}

	hitCount = 0
	document.getElementById('count').innerText = hitCount
}
