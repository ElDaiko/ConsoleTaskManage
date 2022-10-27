require('colors');
const { showMenu, stop } = require('./helpers/messages');


console.clear();

const main = async () => {
    console.log("Hola mundo");

    let opt = '';

    do {
        opt = await showMenu(); //Esperar hasta que se tenga respuesta de show menu
        console.log({opt});


        if (opt != 0)await stop();

    } while (opt != 0);

}


main();