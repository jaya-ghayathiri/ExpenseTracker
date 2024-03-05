const mongoose=require('mongoose')
const expenseTrackerSchema=new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
        type:String
    },
    date:{
        type:String
    }
})      
    

const Expense=mongoose.model('expensedetails',expenseTrackerSchema)//expensedetails-->collection

module.exports={Expense }