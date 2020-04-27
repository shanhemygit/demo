const express = require("express");
const app = new express()
app.use(express.static("./pages"));

app.listen("443", function() {
    console.log("服务已启动")
})