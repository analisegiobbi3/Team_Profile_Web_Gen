//generates the body of the heml, pulling in input 'cards', which comes from the generate cards function
//generate cards creates new cards for each employee
const generateHTML = (cards)  => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
             />
            <link rel="stylesheet" href="style.css">
            <title>Employee Website</title>
        </head>
        </body>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-12 mb-3 team-heading jumbotron bg-info text-white">
                    <h1 class="text-cneter">My Team</h1>
                </nav>
            </div>
        </div>

        <div class="containter">
            <div class="row">
                <div class="row justify-content-center col-12 d-flex">
                    ${cards}
                </div>
            </div>
        </div>
        </body>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    </html>
    `;

}

// HTML for the manager card
const managerCard = (manager) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title">Manager</h3><i class="fa-solid fa-people-roof"></i>
        </div>

         <div class="card-body">
            <p>ID Number: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}"></a>${manager.email}</p>
            <p>Office Number: ${manager.officeNum}</p>
        </div>
    </div>
    `
}

//HTML for the engineer card
const engineerCard = (engineer) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title">Engineer</h3><i class="fa-solid fa-code"></i>
        </div>

         <div class="card-body">
            <p>ID Number: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}"></a> ${engineer.email}</p>
            <p>Github: <a href="https://github.com/${engineer.GitHub}">${engineer.GitHub}</a></p>
        </div>

    </div>
    `
}

//HTML for the intern card
const internCard = (intern) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h3 class="card-title">${intern.name}</h3>
            <h3 class="card-title">Intern</h3><i class="fa-regular fa-graduation-cap"></i>
        </div>

        <div class="card-body">
            <p>ID Number: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}"></a> ${intern.email}</p>
            <p>Office Number: ${intern.school}</p>
        </div>
    </div>
    `
}

// function to create cards for the main page
//uses for loop to go through the data provided by the index. js file 
// adds each card to a blank array, whcih will then be pushed to the main HTML body
cardsToPage = (data) => {

    const cardAray = [];
    for( let i =0; i<data.length; i++){

        if (data[i].getRole() === 'Manager'){
            const createManagerCard = managerCard(data[i])
            cardAray.push(createManagerCard)
        }
        if (data[i].getRole() === 'Engineer'){
            const createEngineerCard = engineerCard(data[i])
            cardAray.push(createEngineerCard)
        }
        if (data[i].getRole() === 'Intern'){
            const createInternCard = internCard(data[i])
            cardAray.push(createInternCard)
        }
    };
    const cards = cardAray.join('')
    const teamCards = generateHTML(cards)

    return teamCards;
}


module.export = generateHTML;