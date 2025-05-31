module.exports = (req, res, next) => {
  const userId = req.headers['x-user-id'];
  if (!userId) {
    return res.status(400).json({ message: 'x-user-id header is required.' });
  }
  req.user = { id: userId };
  next();
};
