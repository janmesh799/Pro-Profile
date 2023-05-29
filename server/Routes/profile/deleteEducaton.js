
const User = require('../../Models/User')
const Profile = require("../../Models/profile")
const deleteEducation = async (req, res) => {
    let errorCode = null;
    try {
        const educationId = req.headers.educationid;
        const username = req.user.user.username;
        const profile = await Profile.findOne({username});
        if(!profile){
            errorCode = 404;
            throw new Error("Profile not found");
        }
        const education = profile.education;
        // console.log(education)
        let updatedEducation = [];
        for(let i =0;i<education.length;i++){
            if(educationId === education[i]._id.toHexString()) continue;
            updatedEducation.push(education[i]);
        }
        profile.education = updatedEducation;
        profile.save().then(()=>{
            res.status(200).json({success:true, message:"Education deleted"});
        }).catch(err=>{
            errorCode = 500;
            throw new Error("Education Deletion failed")
        })
    } catch (err) {
        res.status(errorCode || 500).json({ success: false, message: "Internal Server Error", error: err.message });
    }
}

module.exports = deleteEducation;