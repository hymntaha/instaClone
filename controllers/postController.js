exports.index = (req, res) => {
  throw new Error('Some random error');
  res.send({message: "hi"});
};
