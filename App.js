import colors from 'colors';
import { inquirerMenu, stop } from './helpers/inquirer.js';

const main = async () => {

    let opt = '';

    do {
        opt = await inquirerMenu(); //Esperar hasta que se tenga respuesta de show menu
        console.log({ opt });

        await stop();

    } while (opt != 0);

}


main();