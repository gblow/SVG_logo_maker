class Shapes {
    constructor(color, text, textColor) {
        this.color = color
        this.text  = text
        this.textColor = textColor
    }

}

class Circle extends Shapes{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    create(){
        return`
        <svg width="200" height="200">
            <circle cx="50" cy="50" r="50" style="fill:${this.color};" />
            <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `
    }
}

class Square extends Shapes{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    create(){
        return`
        <svg width="200" height="200">  
            <rect width="100" height="100" style="fill:${this.color};" />
            <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Triangle extends Shapes{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    create(){
        return`
        <svg width="200px" height="200px">
            	<polygon points="50 15, 100 100, 0 100" style="fill:${this.color};"/>
                <text x="50" y="60" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}  

module.exports = {
    Circle,
    Triangle,
    Square,
}
