//Paint tool buttons section//////////////////////////////////////
var tools = {
	currentToolName: '',
	pencil: {button: document.getElementById('pencilButton'), name: 'pencil'},
	brush: {button: document.getElementById('brushButton'), name: 'brush'},
	eraser: {button: document.getElementById('eraserButton'), name: 'eraser'},
	fill: {button: document.getElementById('fillButton'), name: 'fill'},
	eyedropper: {button: document.getElementById('eyedropperButton'), name: 'eyedropper'},
	drag: {button: document.getElementById('dragButton'), name: 'drag'},
	copy: {button: document.getElementById('copyButton'), name: 'copy'},
	stamp: {button: document.getElementById('stampButton'), name: 'stamp'},
	
	select: function(currentTool){
		currentTool.button.style.color = 'dodgerblue';
		this.currentToolName = currentTool.name;
	},
	
	deselect: function(){
		this.pencil.button.style.color = 'black';
		this.brush.button.style.color = 'black';
		this.eraser.button.style.color = 'black';
		this.fill.button.style.color = 'black';
		this.eyedropper.button.style.color = 'black';
		this.drag.button.style.color = 'black';
		this.copy.button.style.color = 'black';
		this.stamp.button.style.color = 'black';
	},
	
	chooseTool: function(currentTool){
		this.deselect();
		this.select(currentTool);
	}
}

tools.pencil.button.addEventListener('click', function(){tools.chooseTool(tools.pencil)});
tools.brush.button.addEventListener('click', function(){tools.chooseTool(tools.brush)});
tools.eraser.button.addEventListener('click', function(){tools.chooseTool(tools.eraser)});
tools.fill.button.addEventListener('click', function(){tools.chooseTool(tools.fill)});
tools.eyedropper.button.addEventListener('click', function(){tools.chooseTool(tools.eyedropper)});
tools.drag.button.addEventListener('click', function(){tools.chooseTool(tools.drag)});
tools.copy.button.addEventListener('click', function(){tools.chooseTool(tools.copy)});
tools.stamp.button.addEventListener('click', function(){tools.chooseTool(tools.stamp)});
//////////////////////////////////////////////////////////////////


//Color pallete section///////////////////////////////////////////
$(function(){
	$('#colpkr').colorpicker();
});

var colors = {
	black: {button: document.getElementById('black'), rgbaName: 'rgba(0,0,0,255)'},
	gray: {button: document.getElementById('gray'), rgbaName: 'rgba(128,128,128,255)'},
	darkred: {button: document.getElementById('darkred'), rgbaName: 'rgba(165,42,42,255)'},
	red: {button: document.getElementById('red'), rgbaName: 'rgba(255,0,0,255)'},
	orange: {button: document.getElementById('orange'), rgbaName: 'rgba(255,165,0,255)'},
	white: {button: document.getElementById('white'), rgbaName: 'rgba(255,255,255,255)'},
	lightgray: {button: document.getElementById('lightgray'), rgbaName: 'rgba(211,211,211,255)'},
	brown: {button: document.getElementById('brown'), rgbaName: 'rgba(163,96,72,255)'},
	pink: {button: document.getElementById('pink'), rgbaName: 'rgba(255,192,203,255)'},
	lightorange: {button: document.getElementById('lightorange'), rgbaName: 'rgba(255,204,115,255)'},
	yellow: {button: document.getElementById('yellow'), rgbaName: 'rgba(255,255,0,255)'},
	green: {button: document.getElementById('green'), rgbaName: 'rgba(0,128,0,255)'},
	dodgerblue: {button: document.getElementById('dodgerblue'), rgbaName: 'rgba(30,144,255,255)'},
	blue: {button: document.getElementById('blue'), rgbaName: 'rgba(0,0,255,255)'},
	purple: {button: document.getElementById('purple'), rgbaName: 'rgba(128,0,128,255)'},
	lightyellow: {button: document.getElementById('lightyellow'), rgbaName: 'rgba(255,253,158,255)'},
	lightgreen: {button: document.getElementById('lightgreen'), rgbaName: 'rgba(144,238,144,255)'},
	skyblue: {button: document.getElementById('skyblue'), rgbaName: 'rgba(135,206,235,255)'},
	lightblue: {button: document.getElementById('lightblue'), rgbaName: 'rgba(158,163,255,255)'},
	lightpurple: {button: document.getElementById('lightpurple'), rgbaName: 'rgba(153,85,153,255)'},
	
	customColor: false,
	
	activeColor: 'rgba(0,0,0,255)',
	customColorString: document.getElementById('current-color-string'),
	toolbar: document.getElementById('tool-bar'),
	chooseColor: function(currentColor){
		this.customColor = false;
		this.activeColor = currentColor.rgbaName;
		this.customColorString.value = this.activeColor;
		this.toolbar.style.borderColor = this.activeColor;
	}
}

colors.black.button.addEventListener('click', function(){colors.chooseColor(colors.black)});
colors.gray.button.addEventListener('click', function(){colors.chooseColor(colors.gray)});
colors.darkred.button.addEventListener('click', function(){colors.chooseColor(colors.darkred)});
colors.red.button.addEventListener('click', function(){colors.chooseColor(colors.red)});
colors.orange.button.addEventListener('click', function(){colors.chooseColor(colors.orange)});
colors.white.button.addEventListener('click', function(){colors.chooseColor(colors.white)});
colors.lightgray.button.addEventListener('click', function(){colors.chooseColor(colors.lightgray)});
colors.brown.button.addEventListener('click', function(){colors.chooseColor(colors.brown)});
colors.pink.button.addEventListener('click', function(){colors.chooseColor(colors.pink)});
colors.lightorange.button.addEventListener('click', function(){colors.chooseColor(colors.lightorange)});
colors.yellow.button.addEventListener('click', function(){colors.chooseColor(colors.yellow)});
colors.green.button.addEventListener('click', function(){colors.chooseColor(colors.green)});
colors.dodgerblue.button.addEventListener('click', function(){colors.chooseColor(colors.dodgerblue)});
colors.blue.button.addEventListener('click', function(){colors.chooseColor(colors.blue)});
colors.purple.button.addEventListener('click', function(){colors.chooseColor(colors.purple)});
colors.lightyellow.button.addEventListener('click', function(){colors.chooseColor(colors.lightyellow)});
colors.lightgreen.button.addEventListener('click', function(){colors.chooseColor(colors.lightgreen)});
colors.skyblue.button.addEventListener('click', function(){colors.chooseColor(colors.skyblue)});
colors.lightblue.button.addEventListener('click', function(){colors.chooseColor(colors.lightblue)});
colors.lightpurple.button.addEventListener('click', function(){colors.chooseColor(colors.lightpurple)});


document.getElementById('current-custom-color').addEventListener('click', function(){colors.customColor = true});
setInterval(function(){
	if(colors.customColor == true && colors.activeColor !== colors.customColorString.value){
		colors.activeColor = colors.customColorString.value;
		colors.toolbar.style.borderColor = colors.customColorString.value;
	}
}, 100);
//////////////////////////////////////////////////////////////////


//Canvas and grid creation////////////////////////////////////////
var drawingSpace = {
	canvas: {sheet: document.getElementById('canvas'), context: document.getElementById('canvas').getContext('2d')},
	grid: {sheet: document.getElementById('grid'), context: document.getElementById('grid').getContext('2d'), scale: 20,},
	copyCanvas: {sheet: document.getElementById('copyCanvas'), context: document.getElementById('copyCanvas').getContext('2d'), active: false},
	
	drawCanvas: function(w = this.canvas.sheet.width, h = this.canvas.sheet.height){
		this.canvas.context.clearRect(0, 0, w, h);
		this.canvas.context.fillStyle = 'rgba(255,255,255,255)';
		this.canvas.context.fillRect(0, 0, w, h);
	},
	
	drawGrid: function(w = this.canvas.sheet.width, h = this.canvas.sheet.height, scaleX = this.grid.scale, scaleY = this.grid.scale, color = 'black'){
		this.grid.context.beginPath();
		this.grid.context.strokeStyle = color;
		this.grid.context.lineWidth = 1;
		for(var x = 0; x <= w; x += scaleX){
			this.grid.context.moveTo(x, 0);
			this.grid.context.lineTo(x, h);
		}
		this.grid.context.stroke();
		
		for(var y = 0; y <= h; y += scaleY){
			this.grid.context.moveTo(0, y);
			this.grid.context.lineTo(w, y);
		}
		this.grid.context.stroke();
		this.grid.context.closePath();
	},
	
	drawCanvasAndGrid: function(w = this.canvas.sheet.width, h = this.canvas.sheet.height, scaleX = this.grid.scale, scaleY = this.grid.scale){
		this.drawCanvas(w, h);
		this.drawGrid(w, h, scaleX, scaleY);
	},
	
	drawSavedCanvas: function(canvasData){
		this.drawCanvas();
		var canvasImg = new Image();
		canvasImg.src = canvasData;
		canvasImg.onload = function(){
			drawingSpace.canvas.context.drawImage(canvasImg, 0, 0);
		}
	}
}

drawingSpace.drawCanvasAndGrid();

drawingSpace.grid.sheet.addEventListener('mousedown', function(e){

	if(tools.currentToolName == tools.pencil.name){ //PENCIL TOOL
		
		function pencilDraw(e){
			drawingSpace.canvas.context.fillStyle = colors.activeColor;
			drawingSpace.canvas.context.fillRect(Math.floor(e.offsetX / drawingSpace.grid.scale) * drawingSpace.grid.scale, Math.floor(e.offsetY / drawingSpace.grid.scale) * drawingSpace.grid.scale, drawingSpace.grid.scale, drawingSpace.grid.scale);
			drawingSpace.grid.sheet.addEventListener('mousemove', pencilDraw);
		}
		
		pencilDraw(e);
		drawingSpace.grid.sheet.addEventListener('mouseup', function(){
			drawingSpace.grid.sheet.removeEventListener('mousemove', pencilDraw);
		});
		
	}else if(tools.currentToolName == tools.brush.name){ //BRUSH TOOL
		
		function brushDraw(e){
			drawingSpace.canvas.context.lineWidth = 2;
			drawingSpace.canvas.context.lineCap = 'round';
			drawingSpace.canvas.context.strokeStyle = colors.activeColor;
			
			drawingSpace.canvas.context.lineTo(e.offsetX, e.offsetY);
			drawingSpace.canvas.context.stroke();
			drawingSpace.canvas.context.lineTo(e.offsetX, e.offsetY);
			drawingSpace.canvas.context.stroke();
			
			drawingSpace.grid.sheet.addEventListener('mousemove', brushDraw);
		}
		
		brushDraw(e);
		drawingSpace.grid.sheet.addEventListener('mouseup', function(){
			drawingSpace.canvas.context.beginPath();
			drawingSpace.grid.sheet.removeEventListener('mousemove', brushDraw);
		});
		
	}else if(tools.currentToolName == tools.eraser.name){ //ERASER TOOL
		
		function eraserDraw(e){
			drawingSpace.canvas.context.lineWidth = 20;
			drawingSpace.canvas.context.lineCap = 'round';
			drawingSpace.canvas.context.strokeStyle = 'rgba(255,255,255,255)';
		
			drawingSpace.canvas.context.lineTo(e.offsetX, e.offsetY);
			drawingSpace.canvas.context.stroke();
			drawingSpace.canvas.context.lineTo(e.offsetX, e.offsetY);
			drawingSpace.canvas.context.stroke();
			
			drawingSpace.grid.sheet.addEventListener('mousemove', eraserDraw);
		}
		
		eraserDraw(e);
		drawingSpace.grid.sheet.addEventListener('mouseup', function(){
			drawingSpace.canvas.context.beginPath();
			drawingSpace.grid.sheet.removeEventListener('mousemove', eraserDraw);
		});
		
	}else if(tools.currentToolName == tools.drag.name){ //DRAG TOOL
		
		var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
		var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
		
		function mouseMoveHandler(e){
			drawingSpace.canvas.sheet.style.top = (e.clientY - offsetY) + 'px';
			drawingSpace.canvas.sheet.style.left = (e.clientX - offsetX) + 'px';
			drawingSpace.grid.sheet.style.top = (e.clientY - offsetY) + 'px';
			drawingSpace.grid.sheet.style.left = (e.clientX - offsetX) + 'px';
		}
		
		function reset(){
			window.removeEventListener('mousemove', mouseMoveHandler);
			window.removeEventListener('mouseup', reset);
		}
		
		window.addEventListener('mousemove', mouseMoveHandler);
		window.addEventListener('mouseup', reset);
	}
	
});

drawingSpace.grid.sheet.addEventListener('click', function(e){
	
	var pixelData = drawingSpace.canvas.context.getImageData(e.offsetX, e.offsetY, 1, 1).data;
	
	if(tools.currentToolName == tools.fill.name){ //FILL TOOL
		
		if(colors.activeColor == 'rgba(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ',' + pixelData[3] + ')'){return};
		
		var currentFillColor = colors.activeColor.slice(5, colors.activeColor.length - 1);
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
		var colorLayer = drawingSpace.canvas.context.getImageData(0, 0, drawingSpace.canvas.sheet.width, drawingSpace.canvas.sheet.height);
		
		var pixelStack = [[e.offsetX, e. offsetY]];
		
		while(pixelStack.length)
		{
			newPos = pixelStack.pop();
			x = newPos[0];
			y = newPos[1];
			
			pixelPos = (y * drawingSpace.canvas.sheet.width + x) * 4;
			while(y-- >= 0 && matchStartColor(pixelPos))
			{
				pixelPos -= drawingSpace.canvas.sheet.width * 4;
			}
			pixelPos += drawingSpace.canvas.sheet.width * 4;
			++y;
			var reachLeft = false;
			var reachRight = false;
			while(y++ < drawingSpace.canvas.sheet.height - 1 && matchStartColor(pixelPos))
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
				
				if(x < drawingSpace.canvas.sheet.width - 1)
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
				
				pixelPos += drawingSpace.canvas.sheet.width * 4;
			}
		}
		
		drawingSpace.canvas.context.putImageData(colorLayer, 0, 0);
		
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
		
	}else if(tools.currentToolName == tools.eyedropper.name){ //EYEDROPPER TOOL
		
		colors.customColor = false;
		colors.activeColor = 'rgba(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ',' + pixelData[3] + ')';
		colors.customColorString.value = colors.activeColor;
		colors.toolbar.style.borderColor = colors.activeColor;
		tools.chooseTool(tools.pencil);
		
	}else if(tools.currentToolName == tools.copy.name){ //COPY TOOL
		
		function clearCopyCanvas(){
			drawingSpace.copyCanvas.context.clearRect(0, 0, drawingSpace.copyCanvas.sheet.width, drawingSpace.copyCanvas.sheet.height);
			drawingSpace.copyCanvas.sheet.style.visibility = 'hidden';
			drawingSpace.copyCanvas.active = false;
			window.removeEventListener('contextmenu', clearCopyCanvas);
		}
		
		if(drawingSpace.copyCanvas.active == true){
			
			animationControllers.setFrame();
			var copiedImg = new Image();
			copiedImg.src = drawingSpace.copyCanvas.sheet.toDataURL();
			copiedImg.onload = function(){
				drawingSpace.canvas.context.drawImage(copiedImg, 0, 0, drawingSpace.copyCanvas.sheet.width, drawingSpace.copyCanvas.sheet.height, Math.floor(e.offsetX / animationControllers.frame.width) * animationControllers.frame.width, Math.floor(e.offsetY / animationControllers.frame.height) * animationControllers.frame.height, animationControllers.frame.width, animationControllers.frame.height);
				clearCopyCanvas();
			}
			
		}else{
			
			animationControllers.setFrame();
			drawingSpace.copyCanvas.sheet.style.visibility = 'visible';
			drawingSpace.copyCanvas.sheet.width = animationControllers.frame.width;
			drawingSpace.copyCanvas.sheet.height = animationControllers.frame.height;
			var copyImg = new Image();
			copyImg.src = drawingSpace.canvas.sheet.toDataURL();
			copyImg.onload = function(){
				drawingSpace.copyCanvas.context.drawImage(copyImg, Math.floor(e.offsetX / animationControllers.frame.width) * animationControllers.frame.width, Math.floor(e.offsetY / animationControllers.frame.height) * animationControllers.frame.height, animationControllers.frame.width, animationControllers.frame.height, 0, 0, drawingSpace.copyCanvas.sheet.width, drawingSpace.copyCanvas.sheet.height);
				drawingSpace.copyCanvas.active = true;
				window.addEventListener('contextmenu', clearCopyCanvas);
			}
			
		}
		
	}else if(tools.currentToolName == tools.stamp.name){ //STAMP TOOL
		
		function clearCopyCanvas(){
			drawingSpace.copyCanvas.context.clearRect(0, 0, drawingSpace.copyCanvas.sheet.width, drawingSpace.copyCanvas.sheet.height);
			drawingSpace.copyCanvas.sheet.style.visibility = 'hidden';
			drawingSpace.copyCanvas.active = false;
			window.removeEventListener('contextmenu', clearCopyCanvas);
		}
		
		if(drawingSpace.copyCanvas.active == true){
			
			animationControllers.setFrame();
			var copiedImg = new Image();
			copiedImg.src = drawingSpace.copyCanvas.sheet.toDataURL();
			copiedImg.onload = function(){
				drawingSpace.grid.context.globalAlpha = 0.4;
				drawingSpace.grid.context.drawImage(copiedImg, 0, 0, drawingSpace.copyCanvas.sheet.width, drawingSpace.copyCanvas.sheet.height, Math.floor(e.offsetX / animationControllers.frame.width) * animationControllers.frame.width, Math.floor(e.offsetY / animationControllers.frame.height) * animationControllers.frame.height, animationControllers.frame.width, animationControllers.frame.height);
				drawingSpace.grid.context.globalAlpha = 1;
				clearCopyCanvas();
			}
			
		}else{
			
			animationControllers.setFrame();
			drawingSpace.copyCanvas.sheet.style.visibility = 'visible';
			drawingSpace.copyCanvas.sheet.width = animationControllers.frame.width;
			drawingSpace.copyCanvas.sheet.height = animationControllers.frame.height;
			var copyImg = new Image();
			copyImg.src = drawingSpace.canvas.sheet.toDataURL();
			copyImg.onload = function(){
				drawingSpace.copyCanvas.context.drawImage(copyImg, Math.floor(e.offsetX / animationControllers.frame.width) * animationControllers.frame.width, Math.floor(e.offsetY / animationControllers.frame.height) * animationControllers.frame.height, animationControllers.frame.width, animationControllers.frame.height, 0, 0, drawingSpace.copyCanvas.sheet.width, drawingSpace.copyCanvas.sheet.height);
				drawingSpace.copyCanvas.active = true;
				window.addEventListener('contextmenu', clearCopyCanvas);
			}
			
		}
		
	}
	
});
//////////////////////////////////////////////////////////////////


//Grid controllers section////////////////////////////////////////
var gridControllers = {
	switch: document.getElementById('grid-switch'),
	disablingScreen: document.getElementById('grid-handlers-disabling-screen'),
	
	rowsPanel: {
		removeButton: document.getElementById('remove-row'),
		addButton: document.getElementById('add-row'),
		display: document.getElementById('display-row-quantity'),
		quantity: parseInt(document.getElementById('display-row-quantity').value)
	},
	columnsPanel: {
		removeButton: document.getElementById('remove-column'),
		addButton: document.getElementById('add-column'),
		display: document.getElementById('display-column-quantity'),
		quantity: parseInt(document.getElementById('display-column-quantity').value)
	},
	
	switchToggle: function(){
		if(this.switch.innerHTML == 'On'){
			this.switch.innerHTML = 'Off';
			this.switch.style.color = 'gray';
			drawingSpace.grid.sheet.style.opacity = 0;
		}else if(this.switch.innerHTML == 'Off'){
			this.switch.innerHTML = 'On';
			this.switch.style.color = 'dodgerblue';
			drawingSpace.grid.sheet.style.opacity = 1;
		}
	},
	
	removeRow: function(){
		if(this.rowsPanel.quantity !== 1){
			var canvasData = drawingSpace.canvas.sheet.toDataURL();
			this.rowsPanel.quantity -= 1;
			this.rowsPanel.display.value = this.rowsPanel.quantity;
			drawingSpace.canvas.sheet.height -= drawingSpace.grid.scale;
			drawingSpace.grid.sheet.height -= drawingSpace.grid.scale;
			drawingSpace.drawGrid();
			drawingSpace.drawSavedCanvas(canvasData);
		}
	},
	
	removeColumn: function(){
		if(this.columnsPanel.quantity !== 1){
			var canvasData = drawingSpace.canvas.sheet.toDataURL();
			this.columnsPanel.quantity -= 1;
			this.columnsPanel.display.value = this.columnsPanel.quantity;
			drawingSpace.canvas.sheet.width -= drawingSpace.grid.scale;
			drawingSpace.grid.sheet.width -= drawingSpace.grid.scale;
			drawingSpace.drawGrid();
			drawingSpace.drawSavedCanvas(canvasData);
		}
	},
	
	addRow: function(){
		var canvasData = drawingSpace.canvas.sheet.toDataURL();
		this.rowsPanel.quantity += 1;
		this.rowsPanel.display.value = this.rowsPanel.quantity;
		drawingSpace.canvas.sheet.height += drawingSpace.grid.scale;
		drawingSpace.grid.sheet.height += drawingSpace.grid.scale;
		drawingSpace.drawGrid();
		drawingSpace.drawSavedCanvas(canvasData);
	},
	
	addColumn: function(){
		var canvasData = drawingSpace.canvas.sheet.toDataURL();
		this.columnsPanel.quantity += 1;
		this.columnsPanel.display.value = this.columnsPanel.quantity;
		drawingSpace.canvas.sheet.width += drawingSpace.grid.scale;
		drawingSpace.grid.sheet.width += drawingSpace.grid.scale;
		drawingSpace.drawGrid();
		drawingSpace.drawSavedCanvas(canvasData);
	},
	
	setRows(){
		if(parseInt(this.rowsPanel.display.value) > 0){
			document.activeElement.blur();
			var canvasData = drawingSpace.canvas.sheet.toDataURL();
			this.rowsPanel.quantity = parseInt(this.rowsPanel.display.value);
			drawingSpace.canvas.sheet.height = this.rowsPanel.quantity * drawingSpace.grid.scale;
			drawingSpace.grid.sheet.height = this.rowsPanel.quantity * drawingSpace.grid.scale;
			drawingSpace.drawGrid();
			drawingSpace.drawSavedCanvas(canvasData);
		}else{
			this.rowsPanel.display.value = drawingSpace.canvas.sheet.height / drawingSpace.grid.scale;
		}
	},
	
	setColumns(){
		if(parseInt(this.columnsPanel.display.value) > 0){
			document.activeElement.blur();
			var canvasData = drawingSpace.canvas.sheet.toDataURL();
			this.columnsPanel.quantity = parseInt(this.columnsPanel.display.value);
			drawingSpace.canvas.sheet.width = this.columnsPanel.quantity * drawingSpace.grid.scale;
			drawingSpace.grid.sheet.width = this.columnsPanel.quantity * drawingSpace.grid.scale;
			drawingSpace.drawGrid();
			drawingSpace.drawSavedCanvas(canvasData);
		}else{
			this.columnsPanel.display.value = drawingSpace.canvas.sheet.width / drawingSpace.grid.scale;
		}
	}
}

gridControllers.switch.addEventListener('click', function(){gridControllers.switchToggle()});
gridControllers.rowsPanel.removeButton.addEventListener('click', function(){gridControllers.removeRow()});
gridControllers.rowsPanel.addButton.addEventListener('click', function(){gridControllers.addRow()});
gridControllers.rowsPanel.display.addEventListener('change', function(){gridControllers.setRows()});
gridControllers.columnsPanel.removeButton.addEventListener('click', function(){gridControllers.removeColumn()});
gridControllers.columnsPanel.addButton.addEventListener('click', function(){gridControllers.addColumn()});
gridControllers.columnsPanel.display.addEventListener('change', function(){gridControllers.setColumns()});
//////////////////////////////////////////////////////////////////


//Animation controllers section///////////////////////////////////
var animationControllers = {
	rowsPanel: {
		removeButton: document.getElementById('remove-animation-row'),
		addButton: document.getElementById('add-animation-row'),
		display: document.getElementById('display-animation-rows'),
		quantity: parseInt(document.getElementById('display-animation-rows').value)
	},
	
	framesPanel: {
		removeButton: document.getElementById('remove-animation-frame'),
		addButton: document.getElementById('add-animation-frame'),
		display: document.getElementById('display-animation-frames'),
		quantity: parseInt(document.getElementById('display-animation-frames').value)
	},
	
	frame: {
		width: gridControllers.columnsPanel.quantity * drawingSpace.grid.scale,
		height: gridControllers.rowsPanel.quantity * drawingSpace.grid.scale
	},
	
	setFrame: function(){
		gridControllers.disablingScreen.style.visibility = 'visible';
		this.frame.width = gridControllers.columnsPanel.quantity * drawingSpace.grid.scale;
		this.frame.height = gridControllers.rowsPanel.quantity * drawingSpace.grid.scale;
	},
	
	removeAnimationRow: function(){
		if(this.rowsPanel.quantity !== 1){
			this.setFrame();
			var canvasData = drawingSpace.canvas.sheet.toDataURL();
			this.rowsPanel.quantity -= 1;
			this.rowsPanel.display.value = this.rowsPanel.quantity;
			drawingSpace.canvas.sheet.height -= this.frame.height; 
			drawingSpace.grid.sheet.height -= this.frame.height;
			drawingSpace.drawGrid();
			drawingSpace.drawSavedCanvas(canvasData);
			drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, this.frame.width, this.frame.height, 'dodgerblue');
		}
	},
	
	addAnimationRow: function(){
		this.setFrame();
		var canvasData = drawingSpace.canvas.sheet.toDataURL();
		this.rowsPanel.quantity += 1;
		this.rowsPanel.display.value = this.rowsPanel.quantity;
		drawingSpace.canvas.sheet.height += this.frame.height; 
		drawingSpace.grid.sheet.height += this.frame.height;
		drawingSpace.drawGrid();
		drawingSpace.drawSavedCanvas(canvasData);
		drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, this.frame.width, this.frame.height, 'dodgerblue');
	},
	
	removeAnimationFrame: function(){
		if(this.framesPanel.quantity !== 1){
			removeMarker(this.framesPanel.quantity);
			this.setFrame();
			var canvasData = drawingSpace.canvas.sheet.toDataURL();
			this.framesPanel.quantity -= 1;
			this.framesPanel.display.value = this.framesPanel.quantity;
			drawingSpace.canvas.sheet.width -= this.frame.width; 
			drawingSpace.grid.sheet.width -= this.frame.width;
			drawingSpace.drawGrid();
			drawingSpace.drawSavedCanvas(canvasData);
			drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, this.frame.width, this.frame.height, 'dodgerblue');
		}
	},
	
	addAnimationFrame: function(){
		this.setFrame();
		var canvasData = drawingSpace.canvas.sheet.toDataURL();
		this.framesPanel.quantity += 1;
		this.framesPanel.display.value = this.framesPanel.quantity;
		drawingSpace.canvas.sheet.width += this.frame.width; 
		drawingSpace.grid.sheet.width += this.frame.width;
		drawingSpace.drawGrid();
		drawingSpace.drawSavedCanvas(canvasData);
		drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, this.frame.width, this.frame.height, 'dodgerblue');
		addMarker(this.framesPanel.quantity);
	}
}

animationControllers.rowsPanel.removeButton.addEventListener('click', function(){animationControllers.removeAnimationRow()});
animationControllers.rowsPanel.addButton.addEventListener('click', function(){animationControllers.addAnimationRow()});
animationControllers.framesPanel.removeButton.addEventListener('click', function(){animationControllers.removeAnimationFrame()});
animationControllers.framesPanel.addButton.addEventListener('click', function(){animationControllers.addAnimationFrame()});
//////////////////////////////////////////////////////////////////

//Frame bar section///////////////////////////////////////////////
function clearFrameMarkers(){
	var node = document.getElementById('frames-container');
	while(node.firstChild){
		node.removeChild(node.firstChild);
	}
	var elem = document.createElement('span');
	elem.id = 'marker1';
	elem.innerHTML = 1;
	elem.style.cssText = 'background-color: gray; border: 1px solid black; user-select: all';
	elem.addEventListener('click', function(){
		drawingSpace.canvas.sheet.style.left = window.innerWidth / 2 - (drawingSpace.canvas.sheet.width / (2 * animationControllers.framesPanel.quantity)) + 'px';
		drawingSpace.canvas.sheet.style.top = window.innerHeight / 2 - (drawingSpace.canvas.sheet.height / (2 * animationControllers.rowsPanel.quantity)) - ((gridControllers.rowsPanel.quantity * drawingSpace.grid.scale) * (animationControllers.rowsPanel.quantity - 1)) + 'px';
		drawingSpace.grid.sheet.style.left = window.innerWidth / 2 - (drawingSpace.grid.sheet.width / (2 * animationControllers.framesPanel.quantity)) + 'px';
		drawingSpace.grid.sheet.style.top = window.innerHeight / 2 - (drawingSpace.canvas.sheet.height / (2 * animationControllers.rowsPanel.quantity)) - ((gridControllers.rowsPanel.quantity * drawingSpace.grid.scale) * (animationControllers.rowsPanel.quantity - 1)) + 'px';
	});
	node.appendChild(elem);
}

clearFrameMarkers();

function addMarker(frameNumber){
	var elem = document.createElement('span');
	elem.id = 'marker' + frameNumber;
	elem.innerHTML = frameNumber;
	elem.style.cssText = 'background-color: gray; border: 1px solid black; user-select: all';
	elem.addEventListener('click', function(){
		drawingSpace.canvas.sheet.style.left = window.innerWidth / 2 - (drawingSpace.canvas.sheet.width / (2 * animationControllers.framesPanel.quantity)) - ((gridControllers.columnsPanel.quantity * drawingSpace.grid.scale) * (frameNumber - 1)) + 'px';
		drawingSpace.canvas.sheet.style.top = window.innerHeight / 2 - (drawingSpace.canvas.sheet.height / (2 * animationControllers.rowsPanel.quantity)) - ((gridControllers.rowsPanel.quantity * drawingSpace.grid.scale) * (animationControllers.rowsPanel.quantity - 1)) + 'px';
		drawingSpace.grid.sheet.style.left = window.innerWidth / 2 - (drawingSpace.grid.sheet.width / (2 * animationControllers.framesPanel.quantity)) - ((gridControllers.columnsPanel.quantity * drawingSpace.grid.scale) * (frameNumber - 1)) + 'px';
		drawingSpace.grid.sheet.style.top = window.innerHeight / 2 - (drawingSpace.canvas.sheet.height / (2 * animationControllers.rowsPanel.quantity)) - ((gridControllers.rowsPanel.quantity * drawingSpace.grid.scale) * (animationControllers.rowsPanel.quantity - 1)) + 'px';
	});
	document.getElementById('frames-container').appendChild(elem);
}
function removeMarker(frameNumber){
	document.getElementById('frames-container').removeChild(document.getElementById('marker' + frameNumber));
}
//////////////////////////////////////////////////////////////////

//Menu bar options section////////////////////////////////////////
var menu = {
	new: {
		button: document.getElementById('menu-new'),
		splashScreen: document.getElementById('new-splashScreen'),
		cancel: document.getElementById('new-splashScreen-cancel'),
		ok: document.getElementById('new-splashScreen-ok'),
		scaleOptions: {
			sixteen: {
				button: document.getElementById('16x16'),
				value: 20
			},
			thirtytwo: {
				button: document.getElementById('32x32'),
				value: 10
			},
			sixtyfour: {
				button: document.getElementById('64x64'),
				value: 5
			}
		},
		newRowsQuantity: 16,
		newColumnsQuantity: 16,
		newGridScale: 20,
		
		chooseScale: function(value){
			if(value == 20){
				this.newRowsQuantity = 16;
				this.newColumnsQuantity = 16;
				this.newGridScale = 20;
			}else if(value == 10){
				this.newRowsQuantity = 32;
				this.newColumnsQuantity = 32;
				this.newGridScale = 10;
			}else if(value == 5){
				this.newRowsQuantity = 64;
				this.newColumnsQuantity = 64;
				this.newGridScale = 5;
			}
		},
		
		setScale: function(){
			gridControllers.rowsPanel.quantity = this.newRowsQuantity;
			gridControllers.columnsPanel.quantity = this.newColumnsQuantity;
			drawingSpace.grid.scale = this.newGridScale;
			gridControllers.rowsPanel.display.value = gridControllers.rowsPanel.quantity;
			gridControllers.columnsPanel.display.value = gridControllers.columnsPanel.quantity;
			drawingSpace.canvas.context.clearRect(0, 0, drawingSpace.canvas.sheet.width, drawingSpace.canvas.sheet.height);
			drawingSpace.canvas.sheet.width = 320;
			drawingSpace.canvas.sheet.height = 320;
			drawingSpace.canvas.sheet.style.top = '200px';
			drawingSpace.canvas.sheet.style.left = '450px';
			drawingSpace.grid.context.clearRect(0, 0, drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height);
			drawingSpace.grid.sheet.width = 320;
			drawingSpace.grid.sheet.height = 320;
			drawingSpace.grid.sheet.style.top = '200px';
			drawingSpace.grid.sheet.style.left = '450px';
			drawingSpace.drawCanvasAndGrid();
			this.splashScreen.style.visibility = 'hidden';
			gridControllers.disablingScreen.style.visibility = 'hidden';
			animationControllers.rowsPanel.quantity = 1;
			animationControllers.framesPanel.quantity = 1;
			animationControllers.rowsPanel.display.value = animationControllers.rowsPanel.quantity;
			animationControllers.framesPanel.display.value = animationControllers.framesPanel.quantity;
			animationControllers.setFrame();
			menu.animationPreview.canvas.getContext('2d').clearRect(0, 0, menu.animationPreview.canvas.width, menu.animationPreview.canvas.height);
			gridControllers.disablingScreen.style.visibility = 'hidden';
			clearFrameMarkers();
		}
	},
	
	open: {
		button: document.getElementById('menu-open'),
		splashScreen: document.getElementById('open-splashScreen'),
		cancel: document.getElementById('open-splashScreen-cancel'),
		ok: document.getElementById('open-splashScreen-ok'),
		frameWidth: document.getElementById('open-frame-width'),
		frameHeight: document.getElementById('open-frame-height'),
		imageLoader: document.getElementById('imageLoader'),
		originalImageScale: 20,
		
		getOriginalImageScale: function(fileName){
			var imgName = fileName;
			imgName = imgName.slice(imgName.length-6, imgName.length-4);
			if(imgName == 16)
			{
				this.originalImageScale = 20;
			}
			else if(imgName == 32)
			{
				this.originalImageScale = 10;
			}
			else if(imgName == 64)
			{
				this.originalImageScale = 5;
			}
		},
		
		loadImage: function(e){
			var reader = new FileReader();
			this.getOriginalImageScale(e.target.files[0].name);
			reader.onload = function(event){
				var userImg = new Image();
				userImg.onload = function(){
					
					drawingSpace.canvas.context.clearRect(0, 0, drawingSpace.canvas.sheet.width, drawingSpace.canvas.sheet.height);
					drawingSpace.grid.context.clearRect(0, 0, drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height);
					drawingSpace.canvas.sheet.width = userImg.width;
					drawingSpace.canvas.sheet.height = userImg.height;
					drawingSpace.canvas.sheet.style.top = '200px';
					drawingSpace.canvas.sheet.style.left = '450px';
					drawingSpace.grid.sheet.width = userImg.width;
					drawingSpace.grid.sheet.height = userImg.height;
					drawingSpace.grid.sheet.style.top = '200px';
					drawingSpace.grid.sheet.style.left = '450px';
					drawingSpace.drawCanvasAndGrid();
					drawingSpace.canvas.context.drawImage(userImg, 0, 0);
					
					if(drawingSpace.grid.scale == menu.open.originalImageScale)
					{
						gridControllers.rowsPanel.quantity = menu.open.frameHeight.value;
						gridControllers.columnsPanel.quantity = menu.open.frameWidth.value;
						animationControllers.rowsPanel.quantity = userImg.height / (menu.open.frameHeight.value * drawingSpace.grid.scale);
						animationControllers.framesPanel.quantity = userImg.width / (menu.open.frameWidth.value * drawingSpace.grid.scale);
						drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, menu.open.frameWidth.value * drawingSpace.grid.scale, menu.open.frameHeight.value * drawingSpace.grid.scale, 'dodgerblue');
					}
					else if(drawingSpace.grid.scale == 20 && menu.open.originalImageScale == 10)
					{
						gridControllers.rowsPanel.quantity = menu.open.frameHeight.value / 2;
						gridControllers.columnsPanel.quantity = menu.open.frameWidth.value / 2;
						animationControllers.rowsPanel.quantity = userImg.height / (menu.open.frameHeight.value * drawingSpace.grid.scale / 2);
						animationControllers.framesPanel.quantity = userImg.width / (menu.open.frameWidth.value * drawingSpace.grid.scale / 2);
						drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, menu.open.frameWidth.value * drawingSpace.grid.scale / 2, menu.open.frameHeight.value * drawingSpace.grid.scale / 2, 'dodgerblue');
					}
					else if(drawingSpace.grid.scale == 20 && menu.open.originalImageScale == 5)
					{
						gridControllers.rowsPanel.quantity = menu.open.frameHeight.value / 4;
						gridControllers.columnsPanel.quantity = menu.open.frameWidth.value / 4;
						animationControllers.rowsPanel.quantity = userImg.height / (menu.open.frameHeight.value * drawingSpace.grid.scale / 4);
						animationControllers.framesPanel.quantity = userImg.width / (menu.open.frameWidth.value * drawingSpace.grid.scale / 4);
						drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, menu.open.frameWidth.value * drawingSpace.grid.scale / 4, menu.open.frameHeight.value * drawingSpace.grid.scale / 4, 'dodgerblue');
					}
					else if(drawingSpace.grid.scale == 10 && menu.open.originalImageScale == 20)
					{
						gridControllers.rowsPanel.quantity = menu.open.frameHeight.value * 2;
						gridControllers.columnsPanel.quantity = menu.open.frameWidth.value * 2;
						animationControllers.rowsPanel.quantity = userImg.height / (menu.open.frameHeight.value * drawingSpace.grid.scale * 2);
						animationControllers.framesPanel.quantity = userImg.width / (menu.open.frameWidth.value * drawingSpace.grid.scale * 2);
						drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, menu.open.frameWidth.value * drawingSpace.grid.scale * 2, menu.open.frameHeight.value * drawingSpace.grid.scale * 2, 'dodgerblue');
					}
					else if(drawingSpace.grid.scale == 10 && menu.open.originalImageScale == 5)
					{
						gridControllers.rowsPanel.quantity = menu.open.frameHeight.value / 2;
						gridControllers.columnsPanel.quantity = menu.open.frameWidth.value / 2;
						animationControllers.rowsPanel.quantity = userImg.height / (menu.open.frameHeight.value * drawingSpace.grid.scale / 2);
						animationControllers.framesPanel.quantity = userImg.width / (menu.open.frameWidth.value * drawingSpace.grid.scale / 2);
						drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, menu.open.frameWidth.value * drawingSpace.grid.scale / 2, menu.open.frameHeight.value * drawingSpace.grid.scale / 2, 'dodgerblue');
					}
					else if(drawingSpace.grid.scale == 5 && menu.open.originalImageScale == 10)
					{
						gridControllers.rowsPanel.quantity = menu.open.frameHeight.value * 2;
						gridControllers.columnsPanel.quantity = menu.open.frameWidth.value * 2;
						animationControllers.rowsPanel.quantity = userImg.height / (menu.open.frameHeight.value * drawingSpace.grid.scale * 2);
						animationControllers.framesPanel.quantity = userImg.width / (menu.open.frameWidth.value * drawingSpace.grid.scale * 2);
						drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, menu.open.frameWidth.value * drawingSpace.grid.scale * 2, menu.open.frameHeight.value * drawingSpace.grid.scale * 2, 'dodgerblue');
					}
					else if(drawingSpace.grid.scale == 5 && menu.open.originalImageScale == 20)
					{
						gridControllers.rowsPanel.quantity = menu.open.frameHeight.value * 4;
						gridControllers.columnsPanel.quantity = menu.open.frameWidth.value * 4;
						animationControllers.rowsPanel.quantity = userImg.height / (menu.open.frameHeight.value * drawingSpace.grid.scale * 4);
						animationControllers.framesPanel.quantity = userImg.width / (menu.open.frameWidth.value * drawingSpace.grid.scale * 4);
						drawingSpace.drawGrid(drawingSpace.grid.sheet.width, drawingSpace.grid.sheet.height, menu.open.frameWidth.value * drawingSpace.grid.scale * 4, menu.open.frameHeight.value * drawingSpace.grid.scale * 4, 'dodgerblue');
					}
					gridControllers.rowsPanel.display.value = gridControllers.rowsPanel.quantity;
					gridControllers.columnsPanel.display.value = gridControllers.columnsPanel.quantity;
					animationControllers.rowsPanel.display.value = animationControllers.rowsPanel.quantity;
					animationControllers.framesPanel.display.value = animationControllers.framesPanel.quantity;
					
					clearFrameMarkers();
					for(var i = 2; i <= animationControllers.framesPanel.quantity; i++){
						addMarker(i);
					}
					
				}
				userImg.src = event.target.result;
			}
			reader.readAsDataURL(e.target.files[0]);
			this.splashScreen.style.visibility = 'hidden';
			gridControllers.disablingScreen.style.visibility = 'visible';
			animationControllers.setFrame();
			menu.animationPreview.canvas.getContext('2d').clearRect(0, 0, menu.animationPreview.canvas.width, menu.animationPreview.canvas.height);
		}
	},
	
	save: {
		button: document.getElementById('menu-save'),
		
		saveImage: function(){
			var imgUrl = drawingSpace.canvas.sheet.toDataURL();
			var tmpLink = document.createElement('a');
			tmpLink.download = 'image.png';
			tmpLink.href = imgUrl;
			document.body.appendChild(tmpLink);
			tmpLink.click();
			document.body.removeChild(tmpLink);
		}
	},
	
	animationPreview: {
		button: document.getElementById('menu-animation-preview'),
		splashScreen: document.getElementById('animation-splashScreen'),
		animationRow: document.getElementById('animation-row'),
		animationFrames: document.getElementById('number-of-animation-frames'),
		animationSpeed: document.getElementById('animation-speed'),
		canvas: document.getElementById('animation-preview-canvas'),
		cancel: document.getElementById('animation-preview-cancel'),
		play: false,
		
		runAnimation: function(){
			animationControllers.setFrame();
			menu.animationPreview.canvas.getContext('2d').clearRect(0, 0, menu.animationPreview.canvas.width, menu.animationPreview.canvas.height);
			menu.animationPreview.play = true;
			var spriteSheet = new Image();
			spriteSheet.src = drawingSpace.canvas.sheet.toDataURL();
			var srcX = 0;
			var srcY = 0;
			var currentFrame = 0;
			var animationBrake = 0;
			var animationInterval = 60;
			spriteSheet.onload = requestAnimationFrame(animate);
			function updateFrame(){
				currentFrame = ++currentFrame % menu.animationPreview.animationFrames.value;
				srcX = animationControllers.frame.width * currentFrame;
				srcY = (animationControllers.frame.height * menu.animationPreview.animationRow.value) - animationControllers.frame.height;
			}
			function drawFrame(){
				updateFrame();
				menu.animationPreview.canvas.getContext('2d').drawImage(spriteSheet, srcX, srcY, animationControllers.frame.width, animationControllers.frame.height, 0, 0, menu.animationPreview.canvas.width, menu.animationPreview.canvas.height);
			}
			function animate(){
				if(animationBrake > animationInterval){
					drawFrame();
					animationBrake = 0;
				}
				animationBrake++;
				animationInterval = 60 - menu.animationPreview.animationSpeed.value;
				if(menu.animationPreview.play == true){
					requestAnimationFrame(animate);
				}
			}
		}
	},
	
	help: {
		button: document.getElementById('menu-help'),
		splashScreen: document.getElementById('help-splashScreen'),
		cancel: document.getElementById('help-splashScreen-cancel')
	}
}

menu.new.button.addEventListener('click', function(){
	menu.new.splashScreen.style.visibility = 'visible';
	menu.open.splashScreen.style.visibility = 'hidden';
	menu.animationPreview.splashScreen.style.visibility = 'hidden';
	menu.animationPreview.animationRow.value = 1;
	menu.animationPreview.animationFrames.value = 1;
	menu.animationPreview.play = false;
});
menu.new.scaleOptions.sixteen.button.addEventListener('click', function(){menu.new.chooseScale(menu.new.scaleOptions.sixteen.value)});
menu.new.scaleOptions.thirtytwo.button.addEventListener('click', function(){menu.new.chooseScale(menu.new.scaleOptions.thirtytwo.value)});
menu.new.scaleOptions.sixtyfour.button.addEventListener('click', function(){menu.new.chooseScale(menu.new.scaleOptions.sixtyfour.value)});
menu.new.ok.addEventListener('click', function(){menu.new.setScale()});
menu.new.cancel.addEventListener('click', function(){menu.new.splashScreen.style.visibility = 'hidden'});
menu.open.button.addEventListener('click', function(){
	menu.open.splashScreen.style.visibility = 'visible';
	menu.new.splashScreen.style.visibility = 'hidden';
	menu.animationPreview.splashScreen.style.visibility = 'hidden';
	menu.open.frameWidth.value = gridControllers.columnsPanel.quantity;
	menu.open.frameHeight.value = gridControllers.rowsPanel.quantity;
	menu.animationPreview.animationRow.value = 1;
	menu.animationPreview.animationFrames.value = 1;
	menu.animationPreview.play = false;
});
menu.open.imageLoader.addEventListener('change', function(e){menu.open.loadImage(e)});
menu.open.cancel.addEventListener('click', function(){menu.open.splashScreen.style.visibility = 'hidden'});
menu.save.button.addEventListener('click', function(){menu.save.saveImage()});
menu.animationPreview.button.addEventListener('click', function(){
	menu.animationPreview.splashScreen.style.visibility = 'visible';
	menu.open.splashScreen.style.visibility = 'hidden';
	menu.new.splashScreen.style.visibility = 'hidden';
	menu.animationPreview.animationRow.value = 1;
	menu.animationPreview.animationFrames.value = 1;
	menu.animationPreview.runAnimation();
});
menu.animationPreview.cancel.addEventListener('click', function(){
	menu.animationPreview.splashScreen.style.visibility = 'hidden';
	menu.animationPreview.animationRow.value = 1;
	menu.animationPreview.animationFrames.value = 1;
	menu.animationPreview.play = false;
});
menu.help.button.addEventListener('click', function(){
	menu.help.splashScreen.style.visibility = 'visible';
});
menu.help.cancel.addEventListener('click', function(){
	menu.help.splashScreen.style.visibility = 'hidden';
});
//////////////////////////////////////////////////////////////////