let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

// Drawing arcs using RaphaelJS
// Parameters for drawing an arc: A or a (rx, ry, x-rotation, large-arc-flag, sweep-flag, x, y)
let arc = paper.path(['M', 100, 150, 'a', 130, 100, 0, 1, 1, 100, 300])

// Setting attributes to the arc declared above
arc.attr({stroke: 'green'})

/* 
    Utility methods for working with paths
    Element.getTotalLength()
    Element.getPointAtLength(length)
*/
