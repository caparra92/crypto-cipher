/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

import express from 'express';
import readline from 'node:readline/promises';
import colors from 'colors';
import { argv } from './config/yargs.js';
import { getInput, getEncodedText } from './tasks/caesar.js';
import { getAesText }  from './tasks/options.js';

const app = express();
let command = argv._[0];
const encoded = argv.encode || argv.c;
const decoded = argv.decode || argv.d


switch (command) {
    case 'caesar':
        if(encoded) {
            console.log('======== CAESAR CIPHER ========'.green);
            await getInput();
            break;
        } else if(decoded) {
            console.log('======== CAESAR DECIPHER ========'.green);
            await getEncodedText();
            break;
        } else {
            console.log(`Not valid argument`);
            break;
        }
    case 'aes':
        if(encoded) {
            console.log('======== AES CIPHER ========'.green);
            await getAesText();
            break;
        } else {
            console.log(`Not valid argument`);
            break;
        }
    default:
        console.log('command not allowed');
}

app.listen(8000, (error) => console.error(error));

