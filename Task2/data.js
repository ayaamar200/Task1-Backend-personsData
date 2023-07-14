// Function to add 7 persons with ids from 1-7

// require file system module
    const fs = require("fs")

    const addPerson = (id ,fname ,lname ,city ,age ) => {
// read file
    const allPersonsData = loadData()
// To check if there is duplicated data or not
    const duplicatedData = allPersonsData.filter((obj) => {
        return obj.id===id
    })
    console.log(duplicatedData)
    if(duplicatedData.length == 0){
    allPersonsData.push({
        id   : id,
        fname: fname,
        lname :lname,
        city  :city ,
        age     :age
    })
// store date in file 
    saveallPersonsData(allPersonsData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
    }

// Function to delete id 4 - 6
const deletePerson = (id) => {
    const allPersonsData = loadData()
    if(id >= 4 && id <=6){
        const dataToKeep = allPersonsData.filter((obj) => {
            return obj.id !== id
        })
        
    saveallPersonsData(dataToKeep)
    console.log(dataToKeep)
    } else{
        console.log("ERROR : This is important Person Data , you can't delete it")
    }
    }

// Function to list fname & lname & city for all 
    function listData(){
        const allPersonsData = loadData()
        allPersonsData.forEach((obj) => {
            console.log(obj.fname , obj.lname , obj.city) 
        });
    
    }

// Function to read all data for only the 5th person
    const readData = (id) => {
        const allPersonsData = loadData()
        if(id == 5)
        {
            const itemNeeded = allPersonsData.find((obj) => {
                return obj.id == id
            })
            console.log(itemNeeded)
        }
        else{
            console.log("ERROR : You can't read the data of this person")
        }
    }
// Function to load data of persons
    const loadData = () =>{
        try{
            const dataJson = fs.readFileSync("personsData.json").toString()
            return JSON.parse(dataJson); 
        }
        catch{
            return []
        }
    }

// Function to save data of persons
    const saveallPersonsData = (allPersonsData) =>{
        const saveallPersonsDataJson = JSON.stringify(allPersonsData)
        fs.writeFileSync("personsData.json" , saveallPersonsDataJson)
    }



module.exports = {
    addPerson ,
    deletePerson ,
    listData ,
    readData ,
}