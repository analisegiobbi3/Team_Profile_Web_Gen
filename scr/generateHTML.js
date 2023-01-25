const generateHTML = (cards)  => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="style.css">
            <title>Employee Website</title>
        </head>
        <body>
            <header>
                <nav>
                    <h1>My Team<h1>
                </nav>

            <header>
            <main>
                 <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        ${cards}
                    </div>
                 </div>
            </main>
        </body>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    `;

}


const managerCard = (manager) => {
    return `
    <div class="card employee-card" style="width: 18rem;">
        <div class="card-header">
            <h3>${manager.name}<h3>
            <h3>Manager<h3>
        <div>

         <div class="card-body">
            <p>ID Number: ${manager.id}<p>
            <p>Email: <a href="mailto:${manager.email}"></a>${manager.email}<p>
            <p>Office Number: ${manager.officeNum}<p>
        <div>
    <div>
    `
}


const engineerCard = (engineer) => {
    return `
    <div class="card employee-card" style="width: 18rem;">
        <div class="card-header">
            <h3>${engineer.name}<h3>
            <h3>Engineer<h3>
        <div>

         <div class="card-body">
            <p>ID Number: ${engineer.id}<p>
            <p>Email: <a href="mailto:${engineer.email}"></a> ${engineer.email}<p>
            <p>Github: <a href="https://github.com/${engineer.GitHub}">${engineer.GitHub}</a></p>
        <div>

    <div>
    `
}

const internCard = (intern) => {
    return `
    <div class="card employee-card" style="width: 18rem;">
        <div class="card-header">
            <h3>${intern.name}<h3>
            <h3>Intern<h3>
        <div>

        <div class="card-body">
            <p>ID Number: ${intern.id}<p>
            <p>Email: <a href="mailto:${intern.email}"></a> ${intern.email}<p>
            <p>Office Number: ${intern.school}<p>
        <div>
    <div>
    `
}


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