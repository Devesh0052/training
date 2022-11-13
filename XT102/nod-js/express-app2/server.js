const express = require('express');

const emp_data = {
    emps: [
        {
            id: 100,
            name: "john",
            salary: 5000
        }, {
            id: 101,
            name: "peter",
            salary: 6000
        }, {
            id: 102,
            name: "scott",
            salary: 7000
        },
    ]
};

//emp_data.emps[1].salary=8000;

const PORT = 8081;
const app = express();

app.use(express.json());

app.get('/emp', (req, res) => {
    res.json(emp_data);
});
app.get('/emp/:id', (req, res) => {
    let emp_id = req.params.id;
    let emp = emp_data.emps;

    let found_emp = emp.find((e) => {
        if (e.id == emp_id) {
            return e
        }
    });
    console.log(emp_id)
    if (found_emp != undefined) {
        res.json(found_emp);
    } else {
        res.json({"status": "Not Found"});
    }

});
app.post('/emp', (req, res) => {});
app.put('/emp', (req, res) => {});

app.delete('/emp', (req, res) => {

//contributed by Renu Poonia
    let queryString=req.query.id
    var index= emp_data.emps.findIndex(function(data){
        return data.id===parseInt(queryString);
    })
    if(index!==-1){
       emp_data.emps.splice(index,1)
       res.json(emp_data);
    }else{
        res.send(`this id ${queryString} is not present  `)
    }

    /* let id = req.query.id;
    if (id == undefined) {
        res.send("provide id to delete")
    } else {
        let emp_to_delete = emp_data.emps.find((e) => {
            if (e.id === parseInt(id)) {
                return e;
            } else {
                res.send(`emp with id ${id} does not exist`);
                return;
            }
        });

        //let idx = emp_data.emps.findIndex(emp_data);
        //emp_data.emps.splice(idx, 1);
        res.send("deleted"); */
    //}
});

app.listen(PORT, () => {
    console.log(`Server is available on port ${PORT}`);
});
