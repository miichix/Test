import cookieParser from "cookie-parser";
import express from "express";
import session, { Store } from "express-session";

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

app.get("/dataCheck", (req, res) => {
    req.session.store.all
    res.send("bruh");
})
app.listen(3000);