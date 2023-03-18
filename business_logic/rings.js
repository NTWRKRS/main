const item = require('./item');
const password = require('./password');
let ringFive = [];

let ringFour = [];

let ringThree = [];

let ringTwo = [];


let root = [ringFive, ringFour, ringThree, ringTwo];


class Two{
    constructor(ringAssignment) {
        this.ringAssignment = ringAssignment;

    }
    ringGo=(()=>{ringTwo.push(this)})()
}
class Three{
    constructor(ringAssignment) {
        this.ringAssignment = ringAssignment;
    }
    ringGo = (() => { ringThree.push(this) })();
}
class Four{
    constructor(ringAssignment) {
        this.ringAssignment = ringAssignment;
    
       
} ringGo = (() => { ringFour.push(this) })();
}
class Five{
    constructor(ringAssignment) {
        this.ringAssignment = ringAssignment;
    }
    ringGo = (() => { ringFive.push(this) })();
}

let data = new Five('fifth')
let data4 = new Four('fourth')
let data3 = new Three('third')
let data2 = new item()
    
    
    
    
    
    
    
    
    
    
    data2.setPwd(new password(32).generatePassword());
    data2.setPriority(0);
data2.setName('first name');



let schedule = [data2]

for (let i = 0; i < schedule.length; i++) {
console.log(schedule[i])
}
 
