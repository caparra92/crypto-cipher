/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const encode = {
    alias: 'c',
    describe: 'Encodes a text string',
    demand: true
}

const decode = {
    alias: 'd',
    describe: 'Decodes an encoded text string',
    demand: true
}

export const argv  = yargs(hideBin(process.argv))
                        .command('cipher', 'Encodes a text string using Caesar Cipher method', {
                            encode
                        })
                        .command('decipher', 'Decodes a text string using Caesar Cipher method', {
                            decode
                        })
                        .parse()