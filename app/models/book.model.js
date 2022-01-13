const database = require("../database/connect");
const Book = (book) => {
  this.id = book.id;
  this.title = book.title;
  this.body = book.body;
};

Book.getAll = function (result) {
  const sql = "SELECT * FROM posts";
  database.query(sql, (err, data) => {
    if (err) throw err;
    console.log(data);
    result(data);
  });
};

Book.getById = function (id,result) {
  const sql = `SELECT * FROM posts where id=${id}`;
  database.query(sql, (err, data) => {
    if (err) throw err;
    console.log(data);
    result(data);
  });
};

Book.create = (newBook) => {
  const sql = "INSERT INTO posts(title,body) values (?,?)";
  database.query(sql, newBook, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
};

Book.update = (id,data1, data2) => {
  const sql = `UPDATE posts set title='${data1}', body='${data2}' where id=${id}`;
  database.query(sql,(err, result) => {
    if (err) throw err;
    console.log(result);
  });
};


Book.delete = (id) => {
  const sql = `delete from posts where id = ${id}`;
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
};
module.exports = Book;
