class Password {
    constructor(length) {
        this.length=length;
    }
    generatePassword = () => {
    
        let password = "NT";
        let characters = `{}[]'\"\\abcdefghijklmnopqrstuvwxyzABCDEFGHIJ-_(&)LMOPQSUVXYZ0123456789\`|:;+=-?/>,<*%$#@!~.`;
        for (let i = 0; i < this.length - 5; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        password += "WRK";
        return password;
    };
}
module.exports = Password;