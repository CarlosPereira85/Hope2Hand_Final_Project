
import usersModel from "../models/users.js";
import statusLikeModel from "../models/statusLikeModel.js";


export const postStatus = async (req, res) => {


    const { } = req.body;
    try {
        const user = await usersModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        console.log(user);
        const status = new statusLikeModel({
               lastActive: new Date(),  

        });

       


        await status.save();
        user.status.push(status._id);
        await user.save();
        res.status(200).json({ msg: "status Added!" });
    } catch (error) {
        res.status(500).send("Error");
    }

};
export const deleteStatus = async (req, res) => {
    const { id } = req.params;
    try {
        await statusLikeModel.findByIdAndDelete(id);
        const user = await usersModel.findById(req.body.user_id);
        const updatedstatus = user.status.filter(item => item != id);
        user.status = updatedstatus;
        await user.save();
        res.status(200).json({ msg: "status Deleted!" });
    } catch (error) {
        res.status(500).send(error);
    }
}
export const getAllStatus = async (req, res) => {
    //code here
    try {
      const status = await statusFormModel.find();
      res.status(200).json({ data: status });
    } catch (error) {
      console.log(error.message);
    }
  };
