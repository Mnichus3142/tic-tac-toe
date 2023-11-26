// Sets in which numbers of squares are stored
const occupied = new Set()
const occupiedX = new Set()
const occupiedO = new Set()

// Winning conditions
const WC = ['123', '456', '789', '147', '258', '369', '159', '357']


// Which mark who is using
var mark
var markComputer

// Adding elements to board
function addElements (mark)
{
	for (i = 1; i <= 9; i++) 
	{
		document.getElementById(i).setAttribute('onclick', 'action(' + i + ', "' + mark + '")')

		document.getElementById(i).style.setProperty('--background-hover', 'var(--main)')
		document.getElementById(i).style.setProperty('--color-hover', 'var(--background)')

		document.getElementById(i).style.cursor = 'pointer'
	}
}

// Removing hover effects on activated squares
function removeHover (id) 
{
	document.getElementById(id).style.setProperty('--background-hover', 'var(--background)')
	document.getElementById(id).style.setProperty('--color-hover', 'var(--main)')

	document.getElementById(id).style.cursor = 'default'
}

// Creating random numbers
function randomNumber (min, max) 
{ 
	min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
} 

// Result
function result ()
{
	let counterO = 0
	let counterX = 0

	for (i = 0; i < WC.length; i++)
	{
		counterO = 0
		counterX = 0

		for (j = 0; j < 3; j++)
		{
			if (occupiedO.has(parseInt(WC[i][j])))
			{
				counterO++
			}
			else if (occupiedX.has(parseInt(WC[i][j])))
			{
				counterX++
			}
		}

		if (counterO === 3) {
			return 'O'
		}

		else if (counterX === 3)
		{
			return 'X'
		}
	}

	if (occupied.size == 9)
	{
		winningAlert('Draw')
		return 0
	}
}

// Creating alert
function winningAlert (sentence)
{
	document.querySelector('.gamebox').style.display = 'none'
	
	setTimeout(function ()
	{
		document.querySelector('.gameover').style.display = 'block'
		document.getElementById('winner').innerHTML = sentence
	}, 300)
}

// Computer logic
function computer () 
{
	const id = randomNumber(1, 9)

	if (!(occupied.has(id))) 
	{
		area = document.getElementById(id)

		area.innerHTML = markComputer
		area.value = markComputer

		occupied.add(id)
		removeHover(id)

		if (mark == 'x') 
		{
			occupiedO.add(id)

			condition = result()
			if (condition == 'O') {
				setTimeout(function ()
				{
					winningAlert('Computer won the game')
				}, 500)
			}
		}

		else if (mark == 'o') 
		{
			occupiedX.add(id)

			condition = result()
			if (condition == 'X') {
				setTimeout(function ()
				{
					winningAlert('Computer won the game')
				}, 500)
			}
		}
	}

	else
	{
		if (occupied.size != 9)
		{
			computer()
		}

		else 
		{
			return 0
		}
	}
}

// Making actions after click
function action (id, mark)
{
	area = document.getElementById(id)

	if (!(occupied.has(id)))
	{
		area.innerHTML = mark
		area.value = mark

		occupied.add(id)
		removeHover(id)
		computer()

		if (mark == 'x') 
		{
			occupiedX.add(id)

			condition = result()
			if (condition == 'X') {
				setTimeout(function ()
				{
					winningAlert('You won the game')
				}, 500)
			}
		}

		else if (mark == 'o') 
		{
			occupiedO.add(id)

			condition = result()
			if (condition == 'O') {
				setTimeout(function ()
				{
					winningAlert('You won the game')
				}, 500)
			}
		}

		console.log(result())
	}
}

// Start button action
document.getElementById('start').addEventListener('click', () =>
{
	document.getElementById('start').style.display = 'none'
	document.getElementById('x').style.display = 'block'
	document.getElementById('o').style.display = 'block'
})

// Reset button action
document.querySelectorAll('.reset').forEach(function(button) 
{
	button.addEventListener('click', () => {
		document.getElementById('start').style.display = 'block'
		document.getElementById('x').style.display = 'none'
		document.getElementById('o').style.display = 'none'
		document.querySelector('.gamebox').style.display = 'block'
		document.querySelector('.gameover').style.display = 'none'

		for (i = 1; i <= 9; i++) {
			document.getElementById(i).setAttribute('onclick', 'nothing()')
			document.getElementById(i).innerHTML = ''
		removeHover(i)
		}

		occupied.clear()
		occupiedX.clear()
		occupiedO.clear()
		counterO = 0
		counterX = 0
	})
})

// Choosing x for player
document.getElementById('x').addEventListener('click', () => 
{
	mark = 'x'
	markComputer = 'o'

	addElements(mark)

	document.getElementById('x').style.display = 'none'
	document.getElementById('o').style.display = 'none'
})  

// Choosing o for player
document.getElementById('o').addEventListener('click', () => 
{
	mark = 'o'
	markComputer = 'x'

	addElements(mark)

	document.getElementById('x').style.display = 'none'
	document.getElementById('o').style.display = 'none'

	computer()
})  