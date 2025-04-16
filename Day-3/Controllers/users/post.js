const User = require("../../models/user");

// Create a new user
const createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser); // Status 201 means "Created"
  } catch (error) {
    res.status(500).send('Error: ' + error); // Internal server error status
  }
};

module.exports = createUser;
