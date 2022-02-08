const express = require('express')
const router = express.Router()
const Student = require('../models/student')

//add a student
router.post('/',async(req,res)=>{
    const student = new Student({
        name: req.body.name,
        class: req.body.class,
        status: req.body.status
    })

    try{
        const a1 = await student.save()
        res.json(a1)
    }catch(err){
        res.send('Error' +err)
    }
})

//fetch all students
router.get('/',async(req,res)=>{
    try{
        const students = await Student.find()
        res.json(students)
    }
    catch(err){
        res.send('Error' + err)
    }
})

//fetch a student by id
router.get('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        res.json(student)
    }
    catch(err){
        res.send('Error' + err)
    }
})

//patch a student by id
router.patch('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        student.status = req.body.status
        const a1 = await student.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error' + err)
    }
})

//delete a student by id
router.delete('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        student.status = req.body.status
        const a1 = await student.remove()
        res.json(a1)
    }
    catch(err){
        res.send('Error' + err)
    }
})


module.exports = router