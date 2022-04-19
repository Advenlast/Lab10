var topPosition = 200;
var leftPosition = -200;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");
    puppy.style.position = "absolute";
    puppy.style.left = leftPosition + "px";
	puppy.style.top = topPosition + "px";
    puppy.style.visibility = "visible"; 

if(leftPosition<=screen.availWidth-200)
{
    leftPosition += 40;
    topPosition += 10;
}
    

}
