const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const BookSchema=Schema({
  name:{type:String,default:''},
  type:{type:String,default:'pdf'},
  tags:{type:Object,default:'miscellaneous'},
  download_link:{type:String,default:''}
});

module.exports=mongoose.model('libraries',BookSchema);