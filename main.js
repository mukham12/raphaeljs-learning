let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

let star = paper.path('M 100, 40 40, 210 190,90 10,90 160,210 z')

let square = paper.rect(500, 100, 50, 50).attr({ 'fill': '#09c', cursor: 'pointer' })
