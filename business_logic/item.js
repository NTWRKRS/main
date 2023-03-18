class Item {
    constructor() {
        this.name;
        this.description;
        this.priority;
        this.pwd;
        this.__IS_DONE__;
    }
    setName = (itemName) => this.name = itemName;
            
    setDescription = (itemDescription) =>this.description = itemDescription;
       
    setPwd = (itemPwd) => this.pwd = itemPwd;
    
    setPriority = (itemPriority) => { 
        if (!Number.isInteger(itemPriority)) {
            console.log (new Error("Invalid Value: Priority must be of type integer"))
        } else {
            return this.priority = itemPriority;
        }
        
    }
   

}
module.exports = Item;