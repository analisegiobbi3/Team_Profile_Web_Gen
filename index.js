const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./scr/generateHTML');
const manager  = require('./lib/Manager')
const engineer  = require('./lib/Engineer')
const intern  = require('./lib/Intern')

generateTeamArray = [];

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
    .then (newManager => {
        const {employeeName, id, email, officeNum} = newManager;
        const createManager= new manager (employeeName, id, email, officeNum)

        generateTeamArray.push(createManager)
        generateTeam()

    })

}

function generateTeam (){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Add another team member, or finsh creating your team: ',
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
                generateHTML()
        }
    })
}

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
        const createEngineer = new engineer(employeeName, id, email, GitHub)
        
        generateTeamArray.push(createEngineer)
        generateTeam()
    })
}

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
        const createIntern = new intern(employeeName, id, email, School)
        
        generateTeamArray.push(createIntern)
        generateTeam()
    })
}

const generateHTML = data => {
    fs.writeFile('./output/index.html', generateHTML, err =>{
        err ? console.log(err) : console.log('You have successfully created your team page')
    })

}


function init(){
    generateManager()
}

init();

