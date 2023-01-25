const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./scr/generateHTML');
const Manager  = require('./lib/Manager')
const Engineer  = require('./lib/Engineer')
const Intern  = require('./lib/Intern')

//Generating an empty array where the team objects can be stored 
generateTeamArray = [];

//initiates the function by starting with the manager prompt
function init(){
    generateManager();
}

//Uses inquirerer to genreate a team manager 
const generateManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter your name: ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your employee email: ',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter your office number: ',
        },
    ])
    //once the questions are answered, we use object destructuring to pull out the object keys
    .then (newManager => {
        const {employeeName, id, email, officeNum} = newManager;
        const createManager= new Manager (employeeName, id, email, officeNum)

        //push the new object to the array
        generateTeamArray.push(createManager)
        //calls the function that will allow you to choose which employee to create next
        generateTeam()
    })
}

//this function calls you to choose a new team member to create. it uses a switch conditiont o call the different functions for createing employees
function generateTeam (){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Add another team member, or finish creating your team: ',
            choices: ['Engineer', 'Intern', 'Finish creating your team'],
        },
    ]).then(function(input){
        switch(input.employeeType){
            case "Engineer":
                generateEngineer()
                break
            case "Intern":
                generateIntern()
                break
            default:
                htmlFileCreate()
        }
    })
}

//function gnerates an engineer, similar to the manager function 
const generateEngineer = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter your name: ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your employee email: ',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter your Github username: ',
        },
    ])
    .then(newEngineer => {
        const {employeeName, id, email, GitHub} = newEngineer
        const createEngineer = new Engineer(employeeName, id, email, GitHub)
        
        generateTeamArray.push(createEngineer)
        generateTeam()
    })
}

//function generates an intern, similar to the manager function
const generateIntern = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter your name: ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your employee email: ',
        },
        {
            type: 'input',
            name: 'School',
            message: 'Enter your school: ',
        },
    ])
    .then(newIntern => {
        const {employeeName, id, email, School} = newIntern
        const createIntern = new Intern(employeeName, id, email, School)
        
        generateTeamArray.push(createIntern)
        generateTeam()
    })
}


//after all employees are created, this function can be called by the switch. Writes to an html file using the cardsToPage function 
function htmlFileCreate (){
    fs.writeFile('./dist/index.html', cardsToPage(generateTeamArray), err =>{
        err ? console.log(err) : console.log('You have successfully created your team page')
    })
}

//initiates the program
init()


