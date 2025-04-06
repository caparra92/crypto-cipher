/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

import * as fs from 'fs';
const {
    createVerify
} = await import('node:crypto');

export const verifyDigitalSignature = (data, receivedSignature) => {

    const publicKey  = fs.readFileSync('./files/public.pem', 'utf-8');

    const verify = createVerify('RSA-SHA256');
    verify.update(data);

    return verify.verify(publicKey, receivedSignature, 'base64');
}
