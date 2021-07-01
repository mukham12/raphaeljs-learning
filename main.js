let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

let x = 100 * Math.cos(Raphael.rad(60))
let y = 100 * Math.sin(Raphael.rad(60))

var hexagon = paper.path(['M', 50, 150, 'Q', 225, 20, 400, 150])

// Drawing arcs using RaphaelJS
