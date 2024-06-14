import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req);
    // console.log(req.rawHeaders);
    // res.send("Hello World!");
    res.send("<h1>Hello World!</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone Number: +91 9088037256</p>");
});
app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Hello, I'm  Sk Mahammad Anish, Currently pursuing my B.E. degree from Jadavpur Unviersity</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});