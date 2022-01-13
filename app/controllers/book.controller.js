const Book = require("../models/book.model");
exports.getList = function (req, res) {
  Book.getAll((result) => {
    res.send(result);
  });
};

exports.details = function (req, res) {
  Book.getById(req.params.id, (result) => {
    res.send(result);
  });
};

exports.addList = (req, res) => {
  // var data = ["learning","Test NodeJS"]
  var data = [req.body.title, req.body.body];
  Book.create(data);
  res.send("Insert Success !");
};

exports.updateList = (req, res) => {
  // var data = ["learning","Test NodeJS"]
  //var data = [req.body.title, req.body.body];
  Book.update(req.params.id,req.body.title,req.body.body);
  res.send("Update Success !");
};

exports.deleteList = (req, res) => {
  // var data = ["learning","Test NodeJS"]
  //var data = [req.body.title, req.body.body];
  Book.delete(req.params.id);
  res.send("Delete Success !");
};