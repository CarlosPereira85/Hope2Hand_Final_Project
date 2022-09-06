import mongoose from "mongoose";




const accomodationFormSchema = new mongoose.Schema({
   
    // creator: {
    //     type: String,
    // },
   

    contactPerson: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true

    }
    ,

    // image:String,

    city: {
        type: String,
       // required: true,
        // minlength: 6
    },
    accomodationType: {
        type: String,
        required: true,
        // minlength: 6
    },
    numberOfPersons: {
        type: Number,
        required: true,
        // minlength: 6
    },
    
     startDate: {
        type: String,
        
     },
        endDate: {
        type: String,
        
        },





    lastActive: { type: Date, default: Date },

    // availabilityFrom: {
    //     type: Number,
    //     required: true,
    // } ,
    // availabilityTo: {
    //     type: Number,
    //     required: true,
    // } ,

image:[],

 



});

const accomodationFormModel = mongoose.model("Accomodation", accomodationFormSchema);

export default accomodationFormModel;