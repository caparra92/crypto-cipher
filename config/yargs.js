/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const encode = {
    alias: 'c',
    describe: 'Encodes a text string',
    // demand: true
}

const decode = {
    alias: 'd',
    describe: 'Decodes an encoded text string',
    // demand: true
}

export const argv  = yargs(hideBin(process.argv))
                        .command('caesar', 'Encodes or Decodes a text string using Caesar Cipher method', {
                            encode,
                            decode
                        })
                        .command('aes', 'Encodes and Decodes a text string using AES Cipher method', {
                            encode
                        })
                        .parse()