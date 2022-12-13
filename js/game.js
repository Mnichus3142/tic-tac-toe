const occupied = new Set();
const occupiedX = new Set();
const occupiedO = new Set();

var mark;
var markComputer;

function addElements (mark)
{
	for (i = 1; i <= 9; i++) 
	{
		document.getElementById(i).setAttribute('onclick', 'action(' + i + ', "' + mark + '")');

		document.getElementById(i).style.setProperty('--background-hover', 'var(--main)');
		document.getElementById(i).style.setProperty('--color-hover', 'var(--background)');

		document.getElementById(i).style.cursor = 'pointer';
	}
}

function removeHover (id) 
{
	document.getElementById(id).style.setProperty('--background-hover', 'var(--background)');
	document.getElementById(id).style.setProperty('--color-hover', 'var(--main)');

	document.getElementById(id).style.cursor = 'default';
}

function randomNumber (min, max) 
{ 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

// function result () 
// {
// 	const winningConditions = ['123', '456', '789', '147', '258', '369', '159', '357'];
	
// 	for (i = 0; i < 9; i++)
// 	{
// 		if (check(occupiedX, winningConditions[i]))
// 		{
// 			console.log('aaa');
// 		}

// 		else if (check(occupiedO, winningConditions[i]))
// 		{
// 			console.log('bbb');
// 		}
// 	}
// }

// function check (set, toCheck) 
// {
// 	toCheck = toCheck.split("");

// 	const counter = 0;

// 	for (i = 0; i < toCheck.length; i++)
// 	{
// 		if (set.has(toCheck[i]))
// 		{
// 			counter++;
// 		}
// 	}

// 	if (counter == 3)
// 	{
// 		return true;
// 	}

// 	console.log(set);
// 	console.log(toCheck);
// }

function computer () 
{
	const id = randomNumber(1, 9);

	if (!(occupied.has(id))) 
	{
		area = document.getElementById(id);

		area.innerHTML = markComputer;
		area.value = markComputer;

		occupied.add(id);
		removeHover(id);

		if (mark == 'x') 
		{
			occupiedO.add(id);
		}

		else if (mark == 'o') 
		{
			occupiedX.add(id);
		}

		result();
	}

	else
	{
		computer();
	}
}

function action (id, mark)
{
	area = document.getElementById(id);

	if (!(occupied.has(id)))
	{
		area.innerHTML = mark;
		area.value = mark;

		occupied.add(id);
		removeHover(id);
		computer();

		if (mark == 'x') 
		{
			occupiedX.add(id);
		}

		else if (mark == 'o') 
		{
			occupiedO.add(id);
		}

		result();
	}
}

document.getElementById('start').addEventListener('click', () =>
{
	document.getElementById('start').style.display = 'none';
	document.getElementById('x').style.display = 'block';
	document.getElementById('o').style.display = 'block';
})

document.getElementById('reset').addEventListener('click', () =>
{
	document.getElementById('start').style.display = 'block';
	document.getElementById('x').style.display = 'none';
	document.getElementById('o').style.display = 'none';

	document.getElementById('1').style.borderTopLeftRadius = '30px';
	document.getElementById('3').style.borderTopRightRadius = '30px';
	document.getElementById('7').style.borderBottomLeftRadius = '30px';
	document.getElementById('9').style.borderBottomrightRadius = '30px';

	for (i = 1; i <= 9; i++) {
		document.getElementById(i).setAttribute('onclick', 'nothing()');
		document.getElementById(i).innerHTML = '';
		removeHover(i);
	}

	occupied.clear();
})

document.getElementById('x').addEventListener('click', () => 
{
	mark = 'x';
	markComputer = 'o';

	addElements(mark);

	document.getElementById('x').style.display = 'none';
	document.getElementById('o').style.display = 'none';
})  

document.getElementById('o').addEventListener('click', () => 
{
	mark = 'o';
	markComputer = 'x';

	addElements(mark);

	document.getElementById('x').style.display = 'none';
	document.getElementById('o').style.display = 'none';

	computer();
})  