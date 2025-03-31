/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/
import 'dotenv/config';

const {
    scryptSync,
    randomFillSync,
    createCipheriv,
    createDecipheriv
} = await import('node:crypto');

const password = process.env.ENCRYPTION_KEY || 'random stars run pipes';

export const aesEncryption = (textToCipher, algorithm) => {

    const key = scryptSync(password, 'salt', 24);
    const iv = randomFillSync(new Uint8Array(16));
    const cipher = createCipheriv(algorithm, key, iv);
        
    let encrypted = cipher.update(textToCipher, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // console.log(encrypted);
    return {encrypted, iv, key};
}

export const aesDecryption = (encryptedText, algorithm, key, iv) => {
    // const key = scryptSync(password, 'salt', 24);

    const decipher = createDecipheriv(algorithm, key, iv);
    
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
    