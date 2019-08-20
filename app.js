const express = require("express");
const app =express();

//静的ファイルを読み込ませられるようにしたいhtmlファイルを読み込んでいる
app.use(express.static(__dirname));
//テンプレートの使用
app.set('views', __dirname + '/views'); //テンプレートがどこにあるか
app.set('view engine', 'ejs'); //どのテンプレートエンジンを使用するか指定する
//リンクはってる
const ec = require('./routes/ec')
const admin = require('./routes/admin/admin')
const users = require('./routes/admin/users')
const products = require('./routes/admin/products')
const stocks = require('./routes/admin/stocks')
const sales = require('./routes/admin/sales')

//以下の3行はbodyparserを使うときに記載する
const bodyParser = require('body-parser')
//Json形式で投げられたリクエストをパース（ゲット）する
app.use(bodyParser.json());
//不明な文字をエンコードする？bodyparserを使うときは入れたほうがいい、「あ」を％５とかで表示するやつ、また日本語に戻すのをデコードという
app.use(bodyParser.urlencoded({ extended: true }));

//putとdeleteに対応するためのミドルウェア
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

// //CSRF対策
// var cookieParser = require("cookie-parser");
// var session = require("express-session");
// var csurf = require("csurf");

// //クッキー
// app.use(cookieParser());

// //セッション管理
// app.use(session({
//   secret: "12345678", //任意の文字列
//   resave: false,
//   saveUninitialized: false
// }));

// //passportとexpress-sessionを読み込む(login)
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// //サインインのページへの遷移ルート作り
// var signinRouter =require("./routes/signin");

// //csrf
// app.use(csurf({ cookie: true }));

// //mysqlとのコネクション
// var mysql = require('mysql');
// global.connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'ono',
//   password: 'password',
//   database: 'diary_dev'
// });

// // session, passport.initialize, passport.sessionは以下の順番で追加
// app.use(passport.initialize());
// app.use(passport.session());
// // authentication
// // ログイン成功後指定されたオブジェクトをシリアライズして保存する際の
// // シリアライズ処理をフックするもの
// passport.serializeUser(function(users, done) {
//  console.log('serializeUser');
//  done(null, users);
// });

// passport.deserializeUser(function(users, done) {
//  console.log('deserializeUser');
//  done(null, {current_user: users[0]});
// });

// // localStrategy：ユーザIDとパスワードを用いた認証の実装部分
// passport.use(new LocalStrategy(
//  function(username, password, done) {
//    connection.query("select * from users where name = ? AND password = ?;",
//      [username, password],
//      (err, users) => {
//        if (users) {
//          return done(null, users);
//        }
//        return done(null, false, {message: "invalid"});
//      }
//    );
//  }
// ));


app.get('/', ec.index);
app.get('/items', ec.items); //itemをIDに変更する★
app.get('/items/:id', ec.show); //itemをIDに変更する★
app.post('/cart', ec.addcart) //カートへ入れるからカートへ遷移した場合
// app.get('/cart' ,ec.cart) //カートボタンからカートへ遷移した場合
// 管理者画面
app.get('/admin/home', admin.home)
// ユーザ管理画面
app.get('/admin/users', users.index)
app.get('/admin/users/show/:id', users.show)
app.get('/admin/users/new', users.new)
app.get('/admin/users/:id/edit', users.edit)
// 商品管理画面
app.get('/admin/products', products.index)
app.get('/admin/products/show/:id', products.show)
app.get('/admin/products/new', products.new)
app.get('/admin/products/:id/edit', products.edit)
// 在庫管理画面
app.get('/admin/stocks', stocks.index)
app.get('/admin/stocks/:id/edit', stocks.edit)
// 売上管理画面
app.get('/admin/sales', sales.index)
app.get('/admin/sales/show/:id', sales.show)
app.get('/admin/sales/new', sales.new)
app.get('/admin/sales/:id/edit', sales.edit)






app.listen(3000, () => {
  console.log("My App Listening on Port 3000! todo");
});