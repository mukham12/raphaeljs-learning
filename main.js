let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

// 
var path = paper.path(['M', 100, 100, 'C', 100, 0, 400, 200, 400, 100, 'S', 100, 200, 100, 100, 'z']).attr({ 'stroke-width': 2 })
