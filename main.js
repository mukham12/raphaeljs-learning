let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

// Learning to animate along a path
let curve = paper.path(pathStart).attr({'stroke-width': 0, 'stroke-linejoin': 'round', 'fill': 'green'});
