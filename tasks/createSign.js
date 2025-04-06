/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

const {
    createSign
} = await import('node:crypto');
import * as fs from 'fs';
import { createKeyPair } from './generateKeys.js';

export const generateDigitalSignature = (data) => {

    createKeyPair();

    const privateKey = fs.readFileSync('./files/private.pem', 'utf-8');

    const sign = createSign('RSA-SHA256');
    sign.update(data);
    
    return sign.sign(privateKey, 'base64');
}