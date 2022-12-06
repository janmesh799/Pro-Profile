
const jwt = require('jsonwebtoken')
const secKey = process.env.SECKEY;

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    else {
        try {
            const data = jwt.verify(token, secKey);
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ error: "Please authenticate using a valid token" });
        }
    }
}

module.exports = fetchUser;