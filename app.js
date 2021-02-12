const express = require('express'); //expressパッケージの読み込み
const mysql = require('mysql'); //mysqlパッケージの読み込み
const session = require('express-session');//express-sessionパッケージの読み込み
const bcrypt = require('bcrypt');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); //POSTを取得する機能
app.use( //セッション管理
    session({
      secret: 'my_secret_key',
      resave: false,
      saveUninitialized: false,
    })
  );

app.get('/',(req, res) => {
    res.render('top.ejs');
});

app.listen(3000);