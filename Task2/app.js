    const data = require("./data")
// require yargs module
    const yargs = require('yargs');

// Define options
    yargs.command({
        command :"add",
        describe: 'to add a person',
        builder: {
            fname:{
                demandOption: true,
                type:'string'
                },
            lname:{
                demandOption:true,
                type:"string"}
        },
        handler : (p) => {
            data.addPerson( p.id, p.fname, p.lname, p.city, p.age )
        }
    })

    yargs.command({
        command :"delete",
        describe: 'to delete a person',
        handler : (P) => {
            data.deletePerson(P.id)
        }
    })

    yargs.command ({
        command :"list",
        describe : "list data for all persons",
        handler : ()=>{
            data.listData()
        }
    })
    
    yargs.command ({
        command : "read",
        describe : "to read data of a person",
        builder : {
            id : {
                describe : "this is id description in read command",
                demandOption : true,
                type : "string"
            }
        },
        handler : (p)=> {
            data.readData (p.id)
        }
    })

    yargs.parse() 