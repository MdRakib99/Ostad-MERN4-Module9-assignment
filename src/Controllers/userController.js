exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Create User Controller api",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Read User Controller api",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Delete User Controller api",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Update User Controller api",
  });
};
