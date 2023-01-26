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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            <title>Employee Website</title>
        </head>
        </body>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-12 mb-3 team-heading jumbotron" style="background-color: #3a5a40">
                    <h1 class="text-center" style="font-size: 60px; color: #dad7cd">My Team</h1>
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
            <h2 class="card-title" style="color: #003049">${manager.name}</h2>
            <h4 class="card-title">Manager</h4><i class="fa fa-mug-hot"></i>
        </div>

         <div class="card-body">
            <p>ID Number: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
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
            <h2 class="card-title" style="color: #003049">${engineer.name}</h2>
            <h4 class="card-title">Engineer</h4><i class="fa fa-code"></i>
        </div>

         <div class="card-body">
            <p>ID Number: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
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
            <h2 class="card-title" style="color: #003049">${intern.name}</h2>
            <h4 class="card-title">Intern</h4><i class="fa fa-graduation-cap"></i>
        </div>

        <div class="card-body">
            <p>ID Number: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
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