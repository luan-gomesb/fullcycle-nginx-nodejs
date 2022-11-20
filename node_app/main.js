const express = require('express');
const app = express();
const MySqlDao = require('./mysqlDAO');
const port = 3000;

const dbConnection = new MySqlDao();

async function insertUser() {
    const query = "INSERT INTO people (name) value('Luan Gomes')";
    const result = await dbConnection.query(query);
    console.log(result);
    
}

async function getPeople(){
    const query = "SELECT * FROM people";
    return await dbConnection.query(query);
}


app.get("/",async (req,res) => {
    const [result,columns] = await getPeople();
    const nameList = result.map(({name}) => `<h3>${name}</h3>`)
    const htmlcontent = "<h1>FullCycle Rocks!!</h1>"+ nameList.join(); 
    res.send(htmlcontent);
});


app.listen(port,() => {
    insertUser();
    console.log("works fine on: "+ port);
})
