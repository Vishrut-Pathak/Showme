const path = require('path')
const express = require
('express');
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter")
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`);
});