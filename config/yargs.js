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

const sign = {
    alias: 's',
    describe: 'Sign a message using DSA algorithm',
    demand: true
}

const verify = {
    alias: 'v',
    describe: 'Verifies a message using DSA algorithm',
    demand: true
}

export const argv  = yargs(hideBin(process.argv))
                        .command('caesar', 'Encodes or Decodes a text string using Caesar Cipher method', {
                            encode,
                            decode
                        })
                        .command('aes', 'Encodes and Decodes a text string using AES Cipher method', {
                            encode
                        })
                        .command('sign', 'Creates a digital signature for a given file located on /.files folder', {
                            sign
                        })
                        .command('verify', 'Verifies a digital signature for a given file located on /.files folder', {
                            verify
                        })
                        .parse()