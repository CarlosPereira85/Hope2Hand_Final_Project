import mongoose from "mongoose";




const UsersSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true

    }
    ,
    email: {
        type: String,
        required: true
    }  ,
    
    password: {
        type: String,
        required: true,
        // minlength: 6
    },
  
    accomodation: [{type : mongoose.Schema.Types.ObjectId, ref: "Accomodation"}],
   help: [{type : mongoose.Schema.Types.ObjectId, ref: "Help"}],
  job: [{type : mongoose.Schema.Types.ObjectId, ref: "Job"}],

   
});

const usersModel = mongoose.model("Register", UsersSchema);

export default usersModel;