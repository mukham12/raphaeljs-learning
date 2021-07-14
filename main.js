let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

/* 
    Utility methods for working with paths
    Element.getTotalLength()
    Element.getPointAtLength(length)
*/

// Learning animations using Raphäel
let circle = paper.circle(100, 100, 50).attr({ fill: 'green' })

circle.animate( { cx: 500, r: 15 }, 1000)

let rectangle = paper.rect(100, 50, 25, 50)

rectangle.animate({ opacity: 0.6, x: 400 })
