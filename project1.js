var numberofSquare=6;
var pickedColor;
var colors=[];
var square=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var result=document.getElementById("Result");
var h1background=document.querySelector("h1");
var startbtn=document.getElementById("btn");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var modeButtons=document.querySelectorAll(".mode");
h1background.style.background="steelblue";

init();

function init(){

	setupModeButtons();
	setupSquare();
		reset();
		}

function setupSquare(){
			for (var i=0;i< square.length;i++)
			{
				square[i].style.background= colors[i];
				square[i].addEventListener("click",function(){
				//alert(this.style.background);
				var clickedColor=this.style.background;
				if(clickedColor === pickedColor){
					result.textContent="Correct";
					h1background.style.background=pickedColor;
					changedColors(pickedColor);
					startbtn.textContent="Play Again??";
				}
				else{
					//alert("incorrect");
					result.textContent="Try Again";
					this.style.background = "#232323"
					}
				});
				}
			}

function setupModeButtons(){
				for (var i = 0; i <modeButtons.length; i++) {
					modeButtons[i].addEventListener("click",function(){
					modeButtons[0].classList.remove("selected");
					modeButtons[1].classList.remove("selected");
					this.classList.add("selected");
					if (this.textContent==="Easy") {
					numberofSquare=3;
						}
					else{
					numberofSquare=6;
						}
						reset();

						});
					}
				}

function reset(){
		result.textContent="";
		startbtn.textContent="New Colors";
		colors=generateRandomColors(numberofSquare);
		pickedColor=pickNewColor();
		colorDisplay.textContent=pickedColor;
		for (var i=0;i< square.length;i++)
	{
		if (colors[i]) {
		square[i].style.display="block";
		square[i].style.background= colors[i];
		}
		else{
			square[i].style.display="none";
			}
	}
		h1background.style.background="steelblue";

	}

colorDisplay.textContent=pickedColor;
startbtn.addEventListener("click",function(){
	reset();
});



function changedColors(color0){
	for (var j=0;j< colors.length;j++)
				{
					square[j].style.background= color0;			//color0 is picked color
				}

}

function pickNewColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
		var r=Math.floor(Math.random()*256);  //red
		var g=Math.floor(Math.random()*256);   //green
		var b=Math.floor(Math.random()*256);	//blue
		return "rgb(" + r + ", "+g+ ", " + b + ")";
}