exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Create Admin Controller api",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Read Admin Controller api",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Delete Admin Controller api",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Update Admin Controller api",
  });
};
