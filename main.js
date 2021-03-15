var mouseEvent="empty";

var last_position_of_X,last_position_of_Y;

color="black";
width_of_line=1;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("Last position of X and Y coordinates = ");
        console.log("x= " + last_position_of_X + "y= " + last_position_of_Y);
        ctx.moveTo(last_position_of_X,last_position_of_Y);
        
        console.log("Current position of X and Y coordinates = ");
        console.log("x= " + current_position_of_mouse_x + "y= " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_Y);

        ctx.stroke();
    }

    last_position_of_X=current_position_of_mouse_x;
    last_position_of_Y=current_position_of_mouse_Y;
}





