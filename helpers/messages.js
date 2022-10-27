require('colors');

const showMenu = () => {

    return new Promise((resolve) => {
        console.clear();
        console.log("====================================".magenta);
        console.log("  Select an option for your tasks  ".blue);
        console.log("====================================\n".magenta);

        console.log(`${'1.'.blue} Create task`);
        console.log(`${'2.'.blue} Show task's`);
        console.log(`${'3.'.blue} Show completed tasks`);
        console.log(`${'4.'.blue} Show pending tasks`);
        console.log(`${'5.'.blue} Complete task`);
        console.log(`${'6.'.blue} Delete task`);
        console.log(`${'0.'.blue} Close \n`);

        const readLine = require('readline').createInterface({ //Paquete que ya tiene node para acceder a data de consola
            input: process.stdin, //espera la info
            output: process.stdout //Salida
        })

        readLine.question("Select an option: ", (opt) => {
            readLine.close();
            resolve(opt)
        }) //Preguntarle al user la info
    })

}

const stop = () => {

    return new Promise((resolve, reject) => {
        const readLine = require('readline').createInterface({ //Paquete que ya tiene node para acceder a data de consola
            input: process.stdin, //espera la info
            output: process.stdout //Salida
        })

        readLine.question(`\nPresione ${'Enter'.magenta} para continuar\n`, (opt) => {
            readLine.close();
            resolve(opt)
        })
    })

}

module.exports = {
    showMenu,
    stop
}