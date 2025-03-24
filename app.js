/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

import express from 'express';
import colors from 'colors';
import { argv } from './config/yargs.js';
import { getInput, getEncodedText } from './tasks/task.js';

const app = express();

let command = argv._[0];
// console.log(command);

switch (command) {
    case 'cipher':
        console.log('======== CIPHER ========'.green);
        await getInput();
        break;
        case 'decipher':
        console.log('======== DECIPHER ========'.green);
        await getEncodedText();
    default:
        console.log('command not allowed');
}

app.listen(8000, (error) => console.error(error));

