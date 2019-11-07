$(function(){
	$('#colpkr').colorpicker();
});
//Paint tool buttons selection///////////////////////////////////////////
var paintTool = '';

var pencilButton = document.getElementById('pencilButton');
var brushButton = document.getElementById('brushButton');
var eraserButton = document.getElementById('eraserButton');
var fillButton = document.getElementById('fillButton');
var eyedropperButton = document.getElementById('eyedropperButton');
var dragButton = document.getElementById('dragButton');

var selectedColor = 'dodgerblue';
var unselectedColor = 'black';

pencilButton.addEventListener('click', function(){
	
	paintTool = 'pencil';
	this.style.color = selectedColor;
	brushButton.style.color = unselectedColor;
	eraserButton.style.color = unselectedColor;
	fillButton.style.color = unselectedColor;
	eyedropperButton.style.color = unselectedColor;
	dragButton.style.color = unselectedColor;
	
});

brushButton.addEventListener('click', function(){
	
	paintTool = 'brush';
	pencilButton.style.color = unselectedColor;
	this.style.color = selectedColor;
	eraserButton.style.color = unselectedColor;
	fillButton.style.color = unselectedColor;
	eyedropperButton.style.color = unselectedColor;
	dragButton.style.color = unselectedColor;
	
});

eraserButton.addEventListener('click', function(){
	
	paintTool = 'eraser';
	pencilButton.style.color = unselectedColor;
	brushButton.style.color = unselectedColor;
	this.style.color = selectedColor;
	fillButton.style.color = unselectedColor;
	eyedropperButton.style.color = unselectedColor;
	dragButton.style.color = unselectedColor;
	
});

fillButton.addEventListener('click', function(){
	
	paintTool = 'fill';
	pencilButton.style.color = unselectedColor;
	brushButton.style.color = unselectedColor;
	eraserButton.style.color = unselectedColor;
	this.style.color = selectedColor;
	eyedropperButton.style.color = unselectedColor;
	dragButton.style.color = unselectedColor;
	
});

eyedropperButton.addEventListener('click', function(){
	
	paintTool = 'eyedropper';
	pencilButton.style.color = unselectedColor;
	brushButton.style.color = unselectedColor;
	eraserButton.style.color = unselectedColor;
	fillButton.style.color = unselectedColor;
	this.style.color = selectedColor;
	dragButton.style.color = unselectedColor;
	
});

dragButton.addEventListener('click', function(){
	
	paintTool = 'drag';
	pencilButton.style.color = unselectedColor;
	brushButton.style.color = unselectedColor;
	eraserButton.style.color = unselectedColor;
	fillButton.style.color = unselectedColor;
	eyedropperButton.style.color = unselectedColor;
	this.style.color = selectedColor;
	
});

//Colors palette selection////////////////////////////////////////
var currentColor = 'rgba(0,0,0,255)';
var currentColorString = document.getElementById('current-color-string');
var customColor;
var toolbar = document.getElementById('tool-bar');

function chooseColor(value){
	
	customColor = false;
	currentColor = value;
	currentColorString.value = value
	toolbar.style.borderColor = value;
	
}

document.getElementById('current-color').addEventListener('click', function(){
	customColor = true;
});

setInterval(function(){
	
	if(customColor == true && currentColor !== currentColorString.value){
		currentColor = currentColorString.value;
		toolbar.style.borderColor = currentColorString.value;
	}
	
}, 100);

//Canvas mouse event handlers/////////////////////////////////////
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(255,255,255,255)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

var grid = document.getElementById('grid');
var gridCtx = grid.getContext('2d');
var gridScale = 20;

function pixPosX(e){
	return Math.floor(e.offsetX / gridScale) * gridScale;
}
function pixPosY(e){
	return Math.floor(e.offsetY / gridScale) * gridScale;
}

grid.addEventListener('mousedown', function(e){
	
	if(paintTool == 'pencil'){ //PENCIL TOOL
	
		function pencilDraw(e){
			ctx.fillStyle = currentColor;
			ctx.fillRect(pixPosX(e), pixPosY(e), gridScale, gridScale);
			grid.addEventListener('mousemove', pencilDraw);
		}
		
		pencilDraw(e);
		grid.addEventListener('mouseup', function(){
			grid.removeEventListener('mousemove', pencilDraw);
		});
		
	}else if(paintTool == 'brush'){ //BRUSH TOOL
		
		function brushDraw(e){
			ctx.lineWidth = 5;
			ctx.lineCap = 'round';
			ctx.strokeStyle = currentColor;
		
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
			
			grid.addEventListener('mousemove', brushDraw);
		}
		
		brushDraw(e);
		grid.addEventListener('mouseup', function(){
			ctx.beginPath();
			grid.removeEventListener('mousemove', brushDraw);
		});
		
	}else if(paintTool == 'eraser'){ //ERASER TOOL
	
		function brushDraw(e){
			ctx.lineWidth = 20;
			ctx.lineCap = 'round';
			ctx.strokeStyle = 'rgba(255,255,255,255)';
		
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
			
			grid.addEventListener('mousemove', brushDraw);
		}
		
		brushDraw(e);
		grid.addEventListener('mouseup', function(){
			ctx.beginPath();
			grid.removeEventListener('mousemove', brushDraw);
		});
		
	}else if(paintTool == 'drag'){ //DRAG TOOL
	
		var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
		var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
		
		function mouseMoveHandler(e) {
			canvas.style.top = (e.clientY - offsetY) + 'px';
			canvas.style.left = (e.clientX - offsetX) + 'px';
			grid.style.top = (e.clientY - offsetY) + 'px';
			grid.style.left = (e.clientX - offsetX) + 'px';
		}
		
		function reset() {
			window.removeEventListener('mousemove', mouseMoveHandler);
			window.removeEventListener('mouseup', reset);
		}
		
		window.addEventListener('mousemove', mouseMoveHandler);
		window.addEventListener('mouseup', reset);
		
	}
});

grid.addEventListener('click', function(e){

	var pixelData = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
	
	
	if(paintTool == 'fill'){ //FILL TOOL
		
		if( currentColor == 'rgba(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ',' + pixelData[3] + ')')
		{
			return;
		}
		var currentFillColor = currentColor.slice(5, currentColor.length - 1);
		var fillColorR = currentFillColor.split(',')[0];
		var fillColorG = currentFillColor.split(',')[1];
		var fillColorB = currentFillColor.split(',')[2];
		
		var startR = pixelData[0];
		var startG = pixelData[1];
		var startB = pixelData[2];
		
		var newPos;
		var x;
		var y;
		var pixelPos;
		var colorLayer = ctx.getImageData(0, 0, canvas.width, canvas.height);
		
		var pixelStack = [[e.offsetX, e. offsetY]];
		
		while(pixelStack.length)
		{
			newPos = pixelStack.pop();
			x = newPos[0];
			y = newPos[1];
			
			pixelPos = (y * canvas.width + x) * 4;
			while(y-- >= 0 && matchStartColor(pixelPos))
			{
				pixelPos -= canvas.width * 4;
			}
			pixelPos += canvas.width * 4;
			++y;
			var reachLeft = false;
			var reachRight = false;
			while(y++ < canvas.height - 1 && matchStartColor(pixelPos))
			{
				colorPixel(pixelPos);
				
				if(x > 0)
				{
					if(matchStartColor(pixelPos - 4))
					{
						if(!reachLeft)
						{
							pixelStack.push([x - 1, y]);
							reachLeft = true;
						}
						else if(reachLeft)
						{
							reachLeft = false;
						}
					}
				}
				
				if(x < canvas.width - 1)
				{
					if(matchStartColor(pixelPos + 4))
					{
						if(!reachRight)
						{
							pixelStack.push([x + 1, y]);
							reachRight = true;
						}
					}
					else if(reachRight)
					{
						reachRight = false;
					}
				}
				
				pixelPos += canvas.width * 4;
			}
		}
		
		ctx.putImageData(colorLayer, 0, 0);
		
		function matchStartColor(pixelPos)
		{
			var r = colorLayer.data[pixelPos];
			var g = colorLayer.data[pixelPos + 1];
			var b = colorLayer.data[pixelPos + 2];
			
			return (r == startR && g == startG && b == startB);
		}
		
		function colorPixel(pixelPos)
		{
			colorLayer.data[pixelPos] = fillColorR;
			colorLayer.data[pixelPos + 1] = fillColorG;
			colorLayer.data[pixelPos + 2] = fillColorB;
			colorLayer.data[pixelPos + 3] = 255;
		}

	}else if(paintTool == 'eyedropper'){ //EYEDROPPER TOOL
		
		customColor = false;
		currentColor = 'rgba(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ',' + pixelData[3] + ')'; 
		currentColorString.value = currentColor;
		toolbar.style.borderColor = currentColor;
		
		paintTool = 'pencil';
		pencilButton.style.color = selectedColor;
		brushButton.style.color = unselectedColor;
		eraserButton.style.color = unselectedColor;
		fillButton.style.color = unselectedColor;
		eyedropperButton.style.color = unselectedColor;
		dragButton.style.color = unselectedColor;
		
	}
	
});

//Canvas grid creation////////////////////////////////////////////
function drawGrid(w, h, scale){
	gridCtx.beginPath();
	gridCtx.strokeStyle = 'black';
	gridCtx.lineWidth = 1;
	for(var x = 0; x <= w; x += scale){
		gridCtx.moveTo(x, 0);
		gridCtx.lineTo(x, h);
	}
	gridCtx.stroke();
	
	for (var y = 0; y <= h; y+= scale) {
            gridCtx.moveTo(0, y);
            gridCtx.lineTo(w, y);
    }
	gridCtx.stroke();
	gridCtx.closePath();
}

drawGrid(grid.width, grid.height, gridScale);

//Enable and disable grid///////////////////////////////////
document.getElementById('grid-switch').addEventListener('click', function(){
	if(this.innerHTML == 'On'){
		this.innerHTML = 'Off';
		this.style.color = unselectedColor;
		grid.style.opacity = 0;
	}else if(this.innerHTML == 'Off'){
		this.innerHTML = 'On';
		this.style.color = selectedColor;
		grid.style.opacity = 1;
	}
});

//Add and remove grid rows and columns////////////////////////////
var rowsQuantity = parseInt(document.getElementById('display-row-quantity').innerHTML);
var columnsQuantity = parseInt(document.getElementById('display-column-quantity').innerHTML);
var canvasData;
var canvasImg = new Image();

function drawSavedCanvas(data){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = '#FFFFFF';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	canvasImg.src = data;
	canvasImg.onload = function(){
		ctx.drawImage(canvasImg, 0, 0);
	}
}

function addRow(){
	canvasData = canvas.toDataURL();
	rowsQuantity += 1;
	document.getElementById('display-row-quantity').innerHTML = rowsQuantity;
	canvas.height += gridScale;
	grid.height += gridScale;	
	drawGrid(grid.width, grid.height, gridScale);
	drawSavedCanvas(canvasData);
}

function addColumn(){
	canvasData = canvas.toDataURL();
	columnsQuantity += 1;
	document.getElementById('display-column-quantity').innerHTML = columnsQuantity;
	canvas.width += gridScale;
	grid.width += gridScale;
	drawGrid(grid.width, grid.height, gridScale);
	drawSavedCanvas(canvasData);
}

function removeRow(){
	if(rowsQuantity !== 1){
		canvasData = canvas.toDataURL();
		rowsQuantity -= 1;
		document.getElementById('display-row-quantity').innerHTML = rowsQuantity;
		canvas.height -= gridScale;
		grid.height -= gridScale;
		drawGrid(grid.width, grid.height, gridScale);
		drawSavedCanvas(canvasData);
	}
}

function removeColumn(){
	canvasData = canvas.toDataURL();
	if(columnsQuantity !== 1){
		columnsQuantity -= 1;
		document.getElementById('display-column-quantity').innerHTML = columnsQuantity;
		canvas.width -= gridScale;
		grid.width -= gridScale;
		drawGrid(grid.width, grid.height, gridScale);
		drawSavedCanvas(canvasData);
	}
}

//Menu bar options////////////////////////////////////////////////
document.getElementById('menu-new').addEventListener('click', function(){
	document.getElementById('new-splashScreen').style.visibility = 'visible';
	document.getElementById('open-splashScreen').style.visibility = 'hidden';
});

document.getElementById('new-splashScreen-cancel').addEventListener('click', function(){
	document.getElementById('new-splashScreen').style.visibility = 'hidden';
});

document.getElementById('new-splashScreen-ok').addEventListener('click', function(){
	document.getElementById('new-splashScreen').style.visibility = 'hidden';
	
});

function chooseScale(value){
	var newRowsQuantity = 16;
	var newColumnsQuantity = 16;
	var newGridScale = 20;
	if(value == 20){
		newRowsQuantity = 16;
		newColumnsQuantity = 16;
		newGridScale = 20;
	}else if(value == 10){
		newRowsQuantity = 32;
		newColumnsQuantity = 32;
		newGridScale = 10;
	}else if(value == 5){
		newRowsQuantity = 64;
		newColumnsQuantity = 64;
		newGridScale = 5;
	}

	document.getElementById('new-splashScreen-ok').addEventListener('click', function(){
		rowsQuantity = newRowsQuantity;
		columnsQuantity = newColumnsQuantity;
		gridScale = newGridScale;
		document.getElementById('display-row-quantity').innerHTML = rowsQuantity;
		document.getElementById('display-column-quantity').innerHTML = columnsQuantity;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		canvas.width = 320;
		canvas.height = 320;
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		gridCtx.clearRect(0, 0, grid.width, grid.height);
		grid.width = 320;
		grid.height = 320;
		drawGrid(grid.width, grid.height, gridScale);
	});
}

document.getElementById('menu-open').addEventListener('click', function(){
	document.getElementById('open-splashScreen').style.visibility = 'visible';
	document.getElementById('new-splashScreen').style.visibility = 'hidden';
});

document.getElementById('open-splashScreen-cancel').addEventListener('click', function(){
	document.getElementById('open-splashScreen').style.visibility = 'hidden';
});

document.getElementById('imageLoader').addEventListener('change', function(e){
	var reader = new FileReader();
	reader.onload = function(event){
		var userImg = new Image();
		userImg.onload = function(){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			gridCtx.clearRect(0, 0, grid.width, grid.height);
			canvas.width = userImg.width;
			canvas.height = userImg.height;
			grid.width = userImg.width;
			grid.height = userImg.height;
			drawGrid(grid.width, grid.height, gridScale);
			ctx.drawImage(userImg, 0, 0);
			columnsQuantity = canvas.width / gridScale;
			rowsQuantity = canvas.height / gridScale;
			document.getElementById('display-column-quantity').innerHTML = columnsQuantity;
			document.getElementById('display-row-quantity').innerHTML = rowsQuantity;
		}
		userImg.src = event.target.result;
	}
	reader.readAsDataURL(e.target.files[0]);
	document.getElementById('open-splashScreen').style.visibility = 'hidden';
});

document.getElementById('menu-save').addEventListener('click', function(){
	var imgUrl = canvas.toDataURL();
	
	var tmpLink = document.createElement('a');
	tmpLink.download = 'image.png';
	tmpLink.href = imgUrl;
	
	document.body.appendChild(tmpLink);
	tmpLink.click();
	document.body.removeChild(tmpLink);
});

