let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

// Pausing and resuming animation
var circle = paper.circle(0, 0, 13).attr({fill: '#09c', cursor: 'pointer'})

const runloop = () => {
    circle.animate({pathFactor: 1}, 4000, () => {
        this.attr({pathFactor: 0})
        setTimeout(runLoop)
    })
    circle.unclick().click(() => this.pause)
    circle.undbclick().dbclick(() => this.resume)
}

runloop()
