const express=require('express')
const router = express.Router()

module.exports = router 

// Getting Alll Subscribers
router.get('/',(req,res)=>{
    res.send('Hello World')
})
// Getting One
router.get('/:id',(req,res)=>{
    req.params.id
})
//Creating One
router.post('/',(req,res)=>{
    
})
//update One
router.patch('/:id',(req,res)=>{
    req.params.id
})
//Removing one
router.delete('/:id',(req,res)=>{
    req.params.id
})