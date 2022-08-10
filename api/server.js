require("dotenv").config();
const { sequelize } = require("./models");
const express = require("express");
const cors = require("cors");
const usersRouter = require('./routers/rotues/userRoute');
const itemRouter = require('./routers/rotues/itemRout');
const commentRoute = require('./routers/rotues/commentRout');
const favItems = require("./routers/rotues/FavItemRout");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const port = 3005;

app.get("/", (req, res) => res.send("Dat App"));
app.use(usersRouter);

app.use(commentRoute)
app.use(itemRouter);
app.use(favItems);
// app.use(itemRouter);





app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, Authorization, X-Requested-With"
  );
  next();
});

app.listen(port, async () => {
  try {
    console.log(`app listening on http://localhost:${port}`);
    await sequelize.sync({
      // force: true,
      alter: true,
    }).then(() => {
        console.log("Database connected successfully")
    })
    // await sequelize.sync();
    // await init();
  } catch (error) {
    console.log(error);
  }
});


