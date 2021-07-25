let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

let star = paper.path('M 100, 40 40, 210 190,90 10,90 160,210 z')

// let square = paper.rect(500, 100, 50, 50).attr({ 'fill': '#09c', cursor: 'pointer' })

// Transform one shape to another after clicking a green square
square.click(() => {
    star.animate({
        path: ['M', 100, 180, 'a', 140, 140, 0, 0, 1, 280, 0, 90, 90, 0, 0, 0, -180, 0, 50, 50, 0, 0, 0, -100, 0]
    }, 1000)
})
