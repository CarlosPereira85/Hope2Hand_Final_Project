
import usersModel from "../models/users.js";
import accomodationFormModel from "../models/accomodationFormModel.js";
import mongoose from "mongoose";

export const postAccomodation = async (req, res) => {


    const {image, address, city, accomodationType, numberOfPersons,lastActive,contactPerson,contactNumber,contactEmail, startDate, endDate } = req.body;
    try {
        const user = await usersModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
     
        const accomodation = new accomodationFormModel({
            
            address,
            city,
            accomodationType,
            numberOfPersons,  
            lastActive ,
            contactPerson,
            contactNumber,
            contactEmail,
            startDate,
            endDate,
            image,
            // creator: req.user.id

        });
console.log("Accomodation:", accomodation);
        await accomodation.save();
        user.accomodation.push(accomodation._id);
        await user.save();
        res.status(200).json({ msg: "Accomodation Added!" });
    } catch (error) {
        res.status(500).send("Error");
    }

};


export const getUserAccomodations = async (req, res)=>{

    try {
        const accs = []
        const user = await usersModel.findById(req.user.id);

        user.accomodation.forEach(place=> {
            accs.push(place.toHexString()) 

        })

        const records = await accomodationFormModel.find({'_id': {$in: accs}})
       
        res.json(records)
    } catch (error) {
        res.send(error)
    }
}


export const deleteUserAccomodation = async (req, res) => {
    const { id } = req.params;
    try {
        await accomodationFormModel.findByIdAndDelete(id);
        const user = await usersModel.findById(req.user.id);
        console.log("User:", user);
        const updatedAccomodation = user.accomodation.filter(item => item != id);
        user.accomodation = updatedAccomodation;
        await user.save();
        res.status(200).json({ msg: "Accomodation Deleted!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateAccomodation = async (req, res) => {
    const { id } = req.params;
    const { address, city, accomodationType, numberOfPersons,  } = req.body;
    try {
        await accomodationFormModel.findByIdAndUpdate(id, {
            address,
            city,
            accomodationType,
            numberOfPersons,
            // availabilityFrom,
            // availabilityTo,
        });
        res.status(200).json({ msg: "Accomodation Updated!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAllAccomodation = async (req, res) => {
    //code here
    try {
      const accomodation = await accomodationFormModel.find();
      res.status(200).json({ data: accomodation });
    } catch (error) {
      console.log(error.message);
    }
  };

