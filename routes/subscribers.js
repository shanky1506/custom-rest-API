const express=require('express')
const router = express.Router()
const Subscriber=require('../models/subscriber')


// Getting Alll Subscribers
router.get('/',async (req,res)=>{
    try{
        const subscribers = await  Subscriber.find();
        res.json(subscribers)
    } catch(err){
        res.status(500).json({
            message :err.message
        })
    }
})
// Getting One
router.get('/:id',getSubscriber,(req,res)=>{
    res.send(res.subscriber)
})
//Creating One
router.post('/',async(req,res)=>{
    const sub = new Subscriber({
        name: req.body.name,
        subscribedToChannel:req.body.subscribedToChannel,
    })
    try{
        const newSub = await sub.save()
        res.status(201).json(newSub)
    } catch (err){
        res.status(400).json({message : err.message})
    }
})
//update One
router.patch('/:id',getSubscriber,async (req,res)=>{
    if(req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if(req.body.subscribedToChannel != null){
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try{
        const updatedSubscriber = await res.subscriber.save()
        res.status(200).json(updatedSubscriber)
    } catch(err){
        res.status(400).json({
            message:err.message,
        })
    }
})
//Removing one
router.delete('/:id',getSubscriber,async (req,res)=>{
    try{
        await res.subscriber.remove()
        res.json({
            message: 'Deleted'
        })
    } catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

async function getSubscriber(req,res,next){
    try{
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return res.status(404).json({
                message:'Cant find the subscriber'
            })
        }
    } catch(err){
        return res.status(500).json({
            message : err.message
        })
    }

    res.subscriber = subscriber
    next()
}

module.exports = router 