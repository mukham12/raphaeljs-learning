let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

let rectangle = paper.rect(100, 50, 25, 50)

rectangle.animate({ opacity: 0.6, x: 400 })
