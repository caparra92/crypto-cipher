### This console app applies the Caesar Cipher technique as an interactive CLI ###

use Docker compose to install all dependencies and run the application in background:

```shell
docker compose up -d --build
```

To get help of available commands:

```shell
docker-compose exec web node app.js --help
docker-compose exec web node app.js caesar --help
docker-compose exec web node app.js aes --help
```

Available commands:

```shell
caesar      Encodes or Decodes a text string using caesar cipher technique
aes         Encodes and Decodes a text string using AES cipher technique
`````

This app uses <a href="https://www.npmjs.com/package/colors">Colors</a> package to display Tasks in an user-friendly manner.

### Example usage

- Cipher text using caesar:

```shell
docker-compose exec web node app.js caesar -c

======== CIPHER ========
Enter a shift key for Caesar Cipher
(it should be integer and 0-25)
19
Enter your message (Just a string)
this is a test message
The cipher text of message this is a test message is: MABL BL T MXLM FXLLTZX
The recovered plain text is: THIS IS A TEST MESSAGE
Bye!
```

- Decipher text:

```shell
docker-compose exec web node app.js caesar -d

======== DECIPHER ========
Enter a shift key for Caesar Cipher
(it should be integer and 0-25
19
Enter your message (Just a string)
MABL BL T MXLM FXLLTZX
The recovered plain text of MABL BL T MXLM FXLLTZX is: THIS IS A TEST MESSAGE
Bye!
```