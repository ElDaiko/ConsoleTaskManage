import inquirer from 'inquirer';
import colors from 'colors';

const questions = [  //objeto con las preguntas a mostrar en consola
    {
        type: 'list',
        name: 'opt',
        message: 'Choose an option',
        choices: [
            'Crear tarea',
            'Listar tareas',
            'Listar tareas completadas',
            'Listar tareas pendientes',
            'Completar tarea(s)',
            'Eliminar tarea(s)',
            'Salir',
          ],
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log("====================================".magenta);
    console.log("  Select an option for your tasks  ".blue);
    console.log("====================================\n".magenta);

    const opt = await inquirer.prompt(questions);  //mostrar las preguntas 

    return opt;

}

export { inquirerMenu };