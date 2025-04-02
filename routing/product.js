const express = require("express");
const path = require("path");
const fs = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");
const renderNewProductPage = require("../views/renderNewProductPage");
const router = express.Router();

router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});

router.post("/add", (req, res) => {
  const { name, description } = req.body;
  //const content = `name: ${name}, description: ${description}`;
  const content = `${name} - ${description}`;

  fs.writeFile("product.txt", content, (err) => {
    if(err){
      return res.status(500).send("Erorr saving product.");
    }
    res.status(STATUS_CODE.FOUND).redirect("/product/new");
  });
});

router.get("/new", (req, res) => {
  fs.readFile("product.txt", "utf-8", (err, data) => {
    const html = renderNewProductPage(err ? null : data);
    res.send(html);
  });
});

module.exports = router;