exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Create Sub Admin Controller api",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Read Sub Admin Controller api",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Delete Sub Admin Controller api",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Update Sub Admin Controller api",
  });
};
