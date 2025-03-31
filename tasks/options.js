import readline from 'node:readline/promises';
import colors from 'colors';
import { aesEncryption, aesDecryption } from './aes.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let key = 0;

const containsLetters = (value) => {
    return /^[A-Za-z(\s)]+$/.test(value);
}

const getUsername = async() => {
    const message = await rl.question(`Enter your username\n`.cyan);
    rl.on('close', () => {
        console.log('Bye!'.green);
        process.exit(0);
    });
    return message;
}

const getPassword = async() => {
    const message = await rl.question(`Enter your password\n`.cyan);
    rl.on('close', () => {
        console.log('Bye!'.green);
        process.exit(0);
    });
    return message;
}

export const getAesText = async() => {
    const algorithm = 'aes-192-cbc';
    let isValid = false;

    // Get valid username input
    isValid = false;
    while(!isValid) {
        let message = await getUsername();
        if(message == null || message == undefined || message.trim() === '') {
            console.log('Username cannot be empty\n'.red);
        } else {
            isValid = true;
            const encodedMessage = aesEncryption(message, algorithm);
            console.log(`username: ${message} is encrypted to: ${encodedMessage.encrypted}`);
            console.log(`The decrypted username is: ${aesDecryption(encodedMessage.encrypted, algorithm, encodedMessage.key, encodedMessage.iv)}`);
        }
    }

    // Get valid password input
    isValid = false;
    while(!isValid) {
        let message = await getPassword();
        if(message == null || message == undefined || message.trim() === '') {
            console.log('Password cannot be empty\n'.red);
        } else {
            isValid = true;
            const encodedMessage = aesEncryption(message, algorithm);
            console.log(`password: ${message} is encrypted to: ${encodedMessage.encrypted}`);
            console.log(`The decrypted password is: ${aesDecryption(encodedMessage.encrypted, algorithm, encodedMessage.key, encodedMessage.iv)}`);
        }
    }

    rl.close();
}
