
// create object person
    const person = {
        fname : "Ahmed" ,
        lname : "Hossam",
        age : 20 ,
        city : "alex"
    }

// change obj to JSON
    const personJson = JSON.stringify(person)

// store data in file 
    const fs=require('fs')
    fs.writeFileSync("data.json" , personJson)
    console.log(personJson)

// read file (JSON)
    const dataJson = fs.readFileSync("data.json").toString()

// Convert to obj
    const personObj = JSON.parse(dataJson)
    console.log(personObj)

// Update data
    personObj.fname = "Adel"
    personObj.lname = "Ahmed"
    personObj.age = 40
    personObj.city = "Cairo"
    console.log(personObj)
//  convert obj to JSON
    const updatepersonJson = JSON.stringify(personObj)

// store data in file 
    fs.writeFileSync("data.json" , updatepersonJson)
    console.log(updatepersonJson)

