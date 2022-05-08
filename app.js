require('dotenv').config()
const Trello = require("trello");

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}


const trello1 = new Trello(process.env.KEY, process.env.TOKEN);
let cardTitle = `Card Nueva ${new Date()}`

trello1.addCard(cardTitle, 'Launch X', "6273e8c6f420e52fa4cb689d",
    function (error, trelloCard) {
        if (error) {
            console.log('Could not add card:', error);
        }
        else {
            console.log('Added card:', trelloCard);
        }
    }
);