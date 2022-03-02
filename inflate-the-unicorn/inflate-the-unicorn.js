// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// Setup inflate audio
const inflateAudio = new Audio(
	'./audio/263809__d-n-audio-uk__balloon-inflation.wav'
)

const whinnyAudio = new Audio(
	'./audio/419231__inspectorj__horse-whinny-close-a.wav'
)

const thanksAudio = new Audio(
	'./audio/449166__horathdrak__thank-you.ogg'
)

// Setup speech bubble gif
const speechBubble = createSpeechBubble()

// Setup timeouts
let popupTimeout = 0
let thanksTimeout = 0

// Initialise Unicorns
const unicorns = []

// Get unicorn elements
unicornElements = document.getElementsByClassName(
	'inflate-an-image'
)

// For all unicorn elements
for (let i = 0; i < unicornElements.length; i++) {
	// Add listener
	unicornElements[i].addEventListener(
		'click',
		inflateUnicorn
	)
	// Create an array element in unicorns
	unicorns.push(setupUnicorn(i, unicornElements[i]))
}

document.body.appendChild(speechBubble)

function inflateUnicorn(evt) {
	// Get the corresponding array element
	const unicorn = unicorns.find(
		(unicorn) => unicorn.element == evt.target
	)

	// Check inflation level and inflate
	switch (unicorn.inflation) {
		case 0:
			unicorn.element.src = './images/unicorn-1.png'
			unicorn.inflation++
			playInflate()
			break
		case 1:
			unicorn.element.src = './images/unicorn-2.png'
			unicorn.inflation++
			playInflate()
			break
		case 2:
			unicorn.element.src = './images/unicorn-3.png'
			unicorn.inflation++
			playInflate()
			break
		case 3:
			popupSpeech(unicorn)
			playInflated()
			break
	}
}

// Create unicorn object
function setupUnicorn(num, el) {
	return { number: num, inflation: 0, element: el }
}

function playInflate() {
	inflateAudio.currentTime = 0
	inflateAudio.play()
}

function playInflated() {
	if (thanksTimeout != 0) clearTimeout(thanksTimeout)

	whinnyAudio.currentTime = 0
	whinnyAudio.play()
	thanksTimeout = setTimeout(function () {
		thanksAudio.currentTime = 0
		thanksAudio.play()
	}, 2700)
}

function createSpeechBubble() {
	let bubble = document.createElement('img')
	bubble.src = 'images/speechBubble.gif'
	bubble.style.transform = 'scaleX(-1)'
	bubble.style.width = '200px'
	bubble.style.height = '150px'
	bubble.style.display = 'none'
	bubble.style.position = 'absolute'
	bubble.style.top = 0
	bubble.style.left = 0

	return bubble
}

function popupSpeech(unicorn) {
	if (popupTimeout != 0) clearTimeout(popupTimeout)

	const boundingRect =
		unicorn.element.getBoundingClientRect()

	speechBubble.style.display = 'block'
	speechBubble.style.left = boundingRect.x + -120 + 'px'
	speechBubble.style.top = boundingRect.y + 180 + 'px'

	popupTimeout = setTimeout(function () {
		speechBubble.style.display = 'none'
	}, 4700)
}
