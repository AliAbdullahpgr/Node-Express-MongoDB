const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    taste:{
        type: String,
        enum:['sweet','sour','spicy']
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredents:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        min:0
    }
})
const MenuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports = MenuItem;