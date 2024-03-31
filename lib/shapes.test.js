// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' 
const {Circle, Square, Triangle} = require("./shapes.js")

//The test checks if the "Circle, Square, and Triangle" object can be instantiated by calling the constructor functions.


describe('Circle', () => {
    it('should return a svg circle giving the parameters', () => {
        const CorrectCircle =`
        <svg width="200" height="200">
            <circle cx="50" cy="50" r="50" style="fill:green;" />
            <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="yellow">BLW</text>
        </svg>
      `
            const circle = new Circle('green', 'BLW', 'yellow')
            expect(circle.create()).toBe(CorrectCircle)
    })
})

describe('Triangle', () => {
    it('should return a svg triangle giving the parameters', () =>{
        const CorrectTriangle = `
        <svg width="200px" height="200px">
            	<polygon points="50 15, 100 100, 0 100" style="fill:green;"/>
                <text x="50" y="60" dominant-baseline="middle" text-anchor="middle" fill="yellow">BLW</text>
        </svg>`
            const triangle = new Triangle('green', 'BLW', 'yellow')
            expect(triangle.create()).toBe(CorrectTriangle)
    })
})

describe('Square', () =>{
    it('should return a svg square giving the parameters', () =>{
        const CorrectSquare = `
        <svg width="200" height="200">  
            <rect width="100" height="100" style="fill:green;" />
            <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="yellow">BLW</text>
        </svg>
        `
            const square = new Square('green', 'BLW', 'yellow')
            expect(square.create()).toBe(CorrectSquare)
            
    })
})
