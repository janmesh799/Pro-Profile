const Profile = require('../../Models/profile');


const getProfile = async (req, res) => {
    try {
        const username  = req.headers.username;
        const profile = await Profile.findOne({ username });
        if (!profile) {
            return res.status(404).json({ error: "User not found" ,success:false});
        }
        res.status(200).json({ profile,success:true });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" ,success:false});
    }
}
module.exports = getProfile;