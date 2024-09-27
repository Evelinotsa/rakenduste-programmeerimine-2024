const crypto = require("crypto");
const cats = [
  {
    id: "627ce527-7f0b-4a0d-9fdf-b389055d4e9b",
    name: "Kuti",
    createdAt: 1727452180355,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "8bfa7139-b41b-47ff-a4c4-1e9aee27e7bf",
    name: "Artur",
    createdAt: 1727452275695,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;

  if (!name || name === "") {
    return res
      .status(418)
      .send({ type: "Error", message: "Must include a name" });
  }

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  cats.push(newCat);

  res.send(newCat);
};

exports.read = (req, res) => {
  res.send(cats);
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
