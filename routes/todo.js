const router = require("express").Router();
const Todo = require("../models/Todo")

router.post('/add/todo',(req,res)=>{
    const {todo}= req.body;
    const newTodo = new Todo({todo:todo})
    newTodo.save()
    .then(()=>{
        console.log("added")
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;