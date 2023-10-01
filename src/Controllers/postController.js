exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Create Post Controller api",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Read Post Controller api",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Delete Post Controller api",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Update Post Controller api",
  });
};
