// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

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

console.log(unicorns)

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
			break
		case 1:
			unicorn.element.src = './images/unicorn-2.png'
			unicorn.inflation++
			break
		case 2:
			unicorn.element.src = './images/unicorn-3.png'
			unicorn.inflation++
			break
		case 3:
			alert(
				'Unicorn ' +
					unicorn.number +
					" says: I'm very full, thank you."
			)
			break
	}
}

// Create unicorn object
function setupUnicorn(num, el) {
	return { number: num + 1, inflation: 0, element: el }
}
