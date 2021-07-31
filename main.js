let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

// Learning about Catmull-Rom curves
let curve = paper.path(pathStart).attr({'stroke-width': 0, 'stroke-linejoin': 'round', 'fill': 'green'});
