let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

let x = 100 * Math.cos(Raphael.rad(60))
let y = 100 * Math.sin(Raphael.rad(60))

// var hexagon = paper.path(['M', 50, 150, 'Q', 225, 20, 400, 150])

// Drawing arcs using RaphaelJS
// Parameters for drawing an arc: A or a (rx, ry, x-rotation, large-arc-flag, sweep-flag, x, y)
let arc = paper.path(['M', 100, 150, 'a', 130, 100, 0, 1, 1, 100, 300])

// Setting attributes to the arc declared above
arc.attr({ })
