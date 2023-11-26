// What color pallete is used
let color = 0;

// Changing theme and ico of theme
document.getElementById("ico").addEventListener("click", () => {
	theme = document.getElementById("theme");

	ico = document.getElementById("ico");

	if (color == 1) {
		theme.href = "css/dark.css";
		color = 0;

		ico.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.993,3a9.326,9.326,0,0,0-1.138,4.477,8.8,8.8,0,0,0,8.569,9.015c.2,0,.385-.017.576-.03A8.5,8.5,0,0,1,12.569,21,8.8,8.8,0,0,1,4,11.985,8.83,8.83,0,0,1,11.993,3Z"/></svg>';
	}

	else if (color == 0) {
		theme.href = "css/light.css";
		color = 1;

		ico.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-1 15v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-2 0zm10-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM3 13h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm14.657-5.657a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707zM5.636 16.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm11.314 0a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM5.636 7.05A1 1 0 0 0 7.05 5.636l-.707-.707a1 1 0 0 0-1.414 1.414z"/></svg>';
	}
})

// Changing other buttons after hover on other
function buttonChanging (id)
{
	const actual = id[1]
	
	for (i = 1; i < 5; i++)
	{
		if (i != parseInt(actual))
		{
			const thing = `.b` + `${i}`
			document.querySelector(thing).style.transform = 'scale(70%)'
			document.querySelector(thing).style.filter = 'opacity(70%)'
		}
	}
}

// Changing other buttons after hover on other (reverse)
function buttonDeChanging (id)
{
	const actual = id[1]
	
	for (i = 1; i < 5; i++)
	{
		if (i != parseInt(actual))
		{
			const thing = `.b` + `${i}`
			document.querySelector(thing).style.transform = 'scale(100%)'
			document.querySelector(thing).style.filter = 'opacity(100%)'
		}
	}
}