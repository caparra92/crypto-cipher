/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/
import * as fs from 'fs';

const {
    generateKeyPairSync
} = await import('node:crypto');

export const createKeyPair = () => {
    const { privateKey, publicKey } = generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem'
        }
    });
    
    fs.writeFileSync('./files/private.pem', privateKey);
    fs.writeFileSync('./files/public.pem', publicKey);

    console.log('🔑 RSA Key pair generated and saved');
}