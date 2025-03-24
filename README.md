### This console app applies the Caesar Cipher technique as an interactive CLI ###

use Docker compose to install all dependencies and run the application in background:

```shell
docker compose up -d --build
```

To get help of available commands:

```shell
docker-compose exec web node app.js --help
docker-compose exec web node app.js cipher --help
docker-compose exec web node app.js decipher --help
```

Available commands:

```shell
cipher      Encodes a text string
decipher    Decodes a text string
`````

This app uses <a href="https://www.npmjs.com/package/colors">Colors</a> package to display Tasks in an user-friendly manner.

### Example usage

- Cipher text:

```shell
docker-compose exec web node app.js cipher -c

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
docker-compose exec web node app.js decipher -d

======== DECIPHER ========
Enter a shift key for Caesar Cipher
(it should be integer and 0-25
19
Enter your message (Just a string)
MABL BL T MXLM FXLLTZX
The recovered plain text of MABL BL T MXLM FXLLTZX is: THIS IS A TEST MESSAGE
Bye!
```