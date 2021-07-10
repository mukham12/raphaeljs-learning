let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

// Drawing arcs using RaphaelJS
// Parameters for drawing an arc: A or a (rx, ry, x-rotation, large-arc-flag, sweep-flag, x, y)
let arc = paper.path(['M', 100, 150, 'a', 130, 100, 0, 1, 1, 100, 300])

/* 
    Utility methods for working with paths
    Element.getTotalLength()
    Element.getPointAtLength(length)
*/

// Learning animations using Raphäel
let circle = paper.circle(100, 100, 50).attr({ fill: 'green' })
