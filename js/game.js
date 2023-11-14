const occupied = new Set()
const occupiedX = new Set()
const occupiedO = new Set()

const WC = ['123', '456', '789', '147', '258', '369', '159', '357']

var mark
var markComputer

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

function removeHover (id) 
{
	document.getElementById(id).style.setProperty('--background-hover', 'var(--background)')
	document.getElementById(id).style.setProperty('--color-hover', 'var(--main)')

	document.getElementById(id).style.cursor = 'default'
}

function randomNumber (min, max) 
{ 
	min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
} 

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
}

function winningAlert (mark)
{
	document.querySelector('.gamebox').style.display = 'none'
	
	setTimeout(function ()
	{
		document.querySelector('.gameover').style.display = 'block'
		document.getElementById('winner').innerHTML = mark
	}, 300)
}

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
					winningAlert('Computer')
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
					winningAlert('Computer')
				}, 500)
			}
		}
	}

	else
	{
		computer()
	}
}

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
					winningAlert('You')
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
					winningAlert('You')
				}, 500)
			}
		}

		console.log(result())
	}
}

document.getElementById('start').addEventListener('click', () =>
{
	document.getElementById('start').style.display = 'none'
	document.getElementById('x').style.display = 'block'
	document.getElementById('o').style.display = 'block'
})

document.querySelectorAll('.reset').forEach(function(button) 
{
	button.addEventListener('click', () => {
		document.getElementById('start').style.display = 'block'
		document.getElementById('x').style.display = 'none'
		document.getElementById('o').style.display = 'none'
		document.querySelector('.gamebox').style.display = 'block'
		document.querySelector('.gameover').style.display = 'none'

		document.getElementById('1').style.borderTopLeftRadius = '30px'
		document.getElementById('3').style.borderTopRightRadius = '30px'
		document.getElementById('7').style.borderBottomLeftRadius = '30px'
		document.getElementById('9').style.borderBottomrightRadius = '30px'

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

document.getElementById('x').addEventListener('click', () => 
{
	mark = 'x'
	markComputer = 'o'

	addElements(mark)

	document.getElementById('x').style.display = 'none'
	document.getElementById('o').style.display = 'none'
})  

document.getElementById('o').addEventListener('click', () => 
{
	mark = 'o'
	markComputer = 'x'

	addElements(mark)

	document.getElementById('x').style.display = 'none'
	document.getElementById('o').style.display = 'none'

	computer()
})  