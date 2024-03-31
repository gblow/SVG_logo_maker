const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Enter up to (3) Characters:',
        validate: (input) => {
            return input.length > 0 && input.length < 4 ? true : 'Please enter 1-3 characters.';
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'TEXT COLOR: Enter a color keyword (OR a hexadecimal number):',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose which Pixel Image you would like?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];


function writeNewSVG(shape){
    fs.writeFile('logo.svg', shape, (err) => {
        if (err) throw err;
        console.log('New Logo Created')
    })
}

function init(){
    inquirer.prompt(questions)
    .then((responses) =>{
        console.log(responses.text)
        if(responses.text.length > 3 || responses.text.length === 0){
            console.error('!!Please Enter Up To 3 Characters!!')
        }else{
        let shape = ""
        switch(responses.shape)
            { 
               case "Circle": 
                shape = new Circle(responses.shapeColor, responses.text, responses.textColor)
                    writeNewSVG(shape.create())
               break;
               case "Triangle":
                shape = new Triangle(responses.shapeColor, responses.text, responses.textColor)
                    writeNewSVG(shape.create())
               break
               case "Square":
                shape = new Square(responses.shapeColor, responses.text, responses.textColor)
                    writeNewSVG(shape.create())
               break
            }
        }     
    })

}
init();
