let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

square.click(() => {
    star.animate({
        path: ['M', 100, 180, 'a', 140, 140, 0, 0, 1, 280, 0, 90, 90, 0, 0, 0, -180, 0, 50, 50, 0, 0, 0, -100, 0]
    })
})
