const getUser = (req, res) => {
  res.json({ user: req.user, success: true });
};

module.exports = getUser;
