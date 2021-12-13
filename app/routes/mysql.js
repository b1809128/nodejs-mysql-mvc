var express = require("express");
var router = express.Router();
var database = require("../database/connect")
router.get("/", (req, res) => {
  res.send("Hello server");
});

// Init Database
router.get("/create", (req, res) => {
  const sql = "CREATE DATABASE nodemysql";
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database create success...");
  });
});

//Init table
router.get("/createPostsTable", (req, res) => {
  const sql =
    "CREATE TABLE posts (id int AUTO_iNCREMENT, title VARCHAR(255), body VARCHAR(255) ,PRIMARY KEY (id))";
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table create success...");
  });
});

//Hien thi du lieu
router.get("/display", (req, res) => {
  const sql = "select * from posts";
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//Them du lieu vao bang
/*Can use this params
    const sql =
      "insert into posts (title,body) values ('PostgreSQL','nice')";
    */

/** or use this and database.query(sql,post,(err)=>{}) 
  
  Neu muon post 1 luc nhieu hang vao database
  let post = [['posts','thanhnien'],['news','tuoitre']];
  const sql = "INSERT INTO posts(title,body) values ?";
  database.query(sql, [post], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts upload success...");
  }); */
router.get("/add", (req, res) => {
  let post = ["music", "Zing mp3"];
  const sql = "INSERT INTO posts(title,body) values (?,?)";
  database.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts upload success...");
  });
});

router.get("/update", (req, res) => {
  const sql = "update posts set body='this is update elements' where id = 7";
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts update success...");
  });
});

router.get("/delete", (req, res) => {
  const getID = req.query.id;
  //console.log(getID)
  const sql = `delete from posts where id = ${getID}`;
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`Delete post ${getID} success...`);
  });
});

module.exports = router;
