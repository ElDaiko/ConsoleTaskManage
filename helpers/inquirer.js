import inquirer from 'inquirer';
import colors from 'colors';

const questions = [  //objeto con las preguntas a mostrar en consola
    {
        type: 'list',
        name: 'opt',
        message: 'Choose an option',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. Show tasks'
            },
            {
                value: '3',
                name: '3. Show completed tasks'
            },
            {
                value: '4',
                name: '4. Show pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Close'
            }
        ],
    }
];

const inquirerMenu = async () => {

    console.clear();
    console.log("====================================".magenta);
    console.log("  Select an option for your tasks  ".blue);
    console.log("====================================\n".magenta);

    const { opt } = await inquirer.prompt(questions);  //mostrar las preguntas y se desestructura opt dado a que no necesitamos el obj completo

    return opt;
}

const stop = async() => {

    const questions = [{
        type: 'input',
        name: 'enter',
        message: `Press ${'Enter'.magenta} to continue\n`
    }]; 

    console.log("\n");
    await inquirer.prompt(questions); //Espera a que se presione enter para continuar
}


export { inquirerMenu, stop };