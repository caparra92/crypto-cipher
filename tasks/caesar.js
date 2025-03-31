/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/
import readline from 'node:readline/promises';
import colors from 'colors';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetDictionary = {}
let keys = [];
let key = 0;

const getValueByKey = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

const containsLetters = (value) => {
    return /^[A-Za-z(\s)]+$/.test(value);
}

const getKey = async() => {
    const key = await rl.question(`Enter a shift key for Caesar Cipher\n(it should be integer and ${keys[0]}-${keys.length-1}\n`.cyan);
    return key;
}

const getMessage = async() => {
    const message = await rl.question(`Enter your message (Just a string)\n`.cyan);
    rl.on('close', () => {
        console.log('Bye!'.green);
        process.exit(0);
    });
    return message;
}

const getNumericMessage = (message) => {
    const numericMessage = [];

    for(let i = 0; i < letters.length; i++) {
        alphabetDictionary[letters[i]] = i;
    }
    for(let i = 0; i < message.length; i++) {
        if(message[i] === ' ') {
            numericMessage.push('');
        } else {
            numericMessage.push(alphabetDictionary[message[i]]);
        }
    }
    // console.log(numericMessage);
    
    return numericMessage;
}

const getAlphabeticMessage = (numericMessage) => {
    const alphabeticMessage = [];
    for(let i = 0; i < letters.length; i++) {
        alphabetDictionary[letters[i]] = i;
    }
    for(let i = 0; i < numericMessage.length; i++) {
        if(numericMessage[i] === '') {
            alphabeticMessage.push(' ');
        } else {
            alphabeticMessage.push(getValueByKey(alphabetDictionary, alphabetDictionary[letters[numericMessage[i]]]));
        }
    }
    // console.log(alphabeticMessage);
    
    return alphabeticMessage;

}

const getYmessage = (message) => {

    let yMessage = [];
    let y = 0;
    const numericMessage = getNumericMessage(message);

    for(let i = 0; i < message.length; i++) {
        if(numericMessage[i] === '') {
            yMessage.push('');
        } else {
            y = (parseInt(numericMessage[i])+parseInt(key)) % letters.length;
            yMessage.push(y);
        }
    }

    return yMessage;
}

const getXMessage = (yMessage) => {
    let XMessage = [];
    let x = 0;
    for(let i = 0; i < yMessage.length; i++) {
        if(yMessage[i] === '') {
            XMessage.push('');
        } else {
            x = (parseInt(yMessage[i])-parseInt(key)) % letters.length;
            if(x < 0) {
                XMessage.push(letters.length + x);
            } else {
                XMessage.push(x);
            }
        }
    }

    return XMessage;
}

const cipher = (message) => {

    message = message.toUpperCase();

    const numericMessage = getNumericMessage(message);

    const YMessage = getYmessage(message);

    const alphabeticMessage = getAlphabeticMessage(YMessage);

    return alphabeticMessage.join('');
    
}

const decipher = (encodedMessage) => {
    const YMessage = getNumericMessage(encodedMessage);
    const XMessage = getXMessage(YMessage);
    const alphabeticMessage = getAlphabeticMessage(XMessage);

    return alphabeticMessage.join('');
}

export const getInput = async() => {

    for(let i = 0; i < 26; i++) {
        keys.push(i);
    }

    let isValidKey = false;
    let isValidMessage = false;

    while(!isValidKey) {
        key = await getKey();
        if((key < 0 || key > 25) || containsLetters(key)) {
            console.log(`Your key should be integer ${keys[0]} - ${keys.length-1})\n`.red)
        } else {
            isValidKey = true;
        }
    }

    while(!isValidMessage) {
        let message = await getMessage();
        if(!containsLetters(message)) {
            console.log('It should be a string\n'.red);
        } else {
            isValidMessage = true;
            const encodedMessage = cipher(message);
            console.log(`The cipher text of message ${message} is: ${encodedMessage}`.yellow);
            console.log(`The recovered plain text is: ${decipher(encodedMessage)}`.green);
        }
    }
    rl.close();
}

export const getEncodedText = async() => {
    for(let i = 0; i < 26; i++) {
        keys.push(i);
    }

    let isValidKey = false;
    let isValidMessage = false;

    while(!isValidKey) {
        key = await getKey();
        if((key < 0 || key > 25) || containsLetters(key)) {
            console.log(`Your key should be integer ${keys[0]} - ${keys.length-1})\n`.red)
        } else {
            isValidKey = true;
        }
    }

    while(!isValidMessage) {
        let encodedMessage = await getMessage();
        encodedMessage = encodedMessage.trim();
        // console.log(encodedMessage);
        if(!containsLetters(encodedMessage)) {
            console.log('It should be a string\n'.red);
        } else {
            isValidMessage = true;
            console.log(`The recovered plain text of ${encodedMessage} is: ${decipher(encodedMessage)}`.yellow);
        }
    }
    rl.close();


}


// QVIREFVGL ZJ DJG LMKXGZMA -> DIVERSITY (13) IS (17) OUR (15) STRENGTH (19)
// canada (19) => VTGTWT
// canada is good (19) => VTGTWT BL ZHHW
// web security is a must (19) => PXU LXVNKBMR BL T FNLM