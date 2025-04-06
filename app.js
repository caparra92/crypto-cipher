/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

import express from 'express';
import readline from 'node:readline/promises';
import colors from 'colors';
import * as fs from 'fs';
import { argv } from './config/yargs.js';
import { getInput, getEncodedText } from './tasks/caesar.js';
import { getAesText }  from './tasks/options.js';
import { generateDigitalSignature } from './tasks/createSign.js';
import { verifyDigitalSignature } from './tasks/verifySign.js';


const app = express();
let command = argv._[0];
const encoded = argv.encode || argv.c;
const decoded = argv.decode || argv.d;
const sign = argv.sign || argv.s;
const verify = argv.verify || argv.v;

const data = fs.readFileSync('./files/data.txt', 'utf-8');

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
            case 'sign':
                if(sign) {
                    console.log('======== DSA Sign ========'.green);
                    const signature  = generateDigitalSignature(data);
                    fs.writeFileSync('./files/signature.txt', signature);
                    console.log('Generated signature: ', signature);
                    process.exit(1);
                } else {
                    console.log(`Not valid argument`);
                    break;
                }
                case 'verify':
                    if(verify) {
                        console.log('======== DSA Verify ========'.green);
                        const signature = fs.readFileSync('./files/signature.txt', 'utf-8');
                        const isSignatureValid = verifyDigitalSignature(data, signature);
            console.log('Signature validation result: ', isSignatureValid);
            process.exit(1);
        } else {
            console.log(`Not valid argument`);
            break;
        }
    default:
        console.log('command not allowed');
}

app.listen(8000, (error) => console.error(error));

