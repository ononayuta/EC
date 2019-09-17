// var items = [
//         { id: 0, title: '道福茶', body: '花の香りのミルクティ' },
//         { id: 1, title: 'アールグレイミルクティ', body: '清涼感のあるサッパリミルクティ', price: '540' },
//         { id: 2, title: '黒糖ミルク', body: '沖縄産黒糖', price: '540' },
//         { id: 3, title: '黒糖抹茶ラテ', body: '沖縄産黒糖と抹茶のハーモニィ', price: '650' },
//         { id: 4, title: 'ハニーオレンジ', body: '夏にピッタリすっきりドリンク　オレンジ', price: '650' },
//         { id: 5, title: 'ハニーレモン', body: '夏にピッタリすっきりドリンク　レモン', price: '540' },
//         { id: 6, title: 'ベリーベリースカッシュ', body: '夏にピッタリすっきりドリンク　炭酸　いちご　ブルーベリー', price: '650' }
//         ];




exports.index = (req, res) => {
  if (req.user) {
    connection.query('SELECT * FROM users WHERE id = ?;', req.user.current_user.id,
      function (err, user) {
        connection.query('SELECT * FROM items ORDER BY RAND() LIMIT 6;',
          function (err, items) {
            res.render('me/index',{items:items, csrfToken: req.csrfToken() })
          })})
    } else {
            res.redirect('/signin');
    }
};


exports.items = (req, res) => {
        connection.query('SELECT * FROM items;',
        function (err, item) {
        res.render('me/items',{item:item, csrfToken: req.csrfToken() })
       
})}

exports.show = (req, res) => {
        connection.query('SELECT * FROM items WHERE id = ?;',req.params.id,
        function (err, show_id) {
        res.render('me/show', {show:show_id, csrfToken: req.csrfToken()})
})}

exports.addcart = (req, res) => {
  console.log(req.user.current_user)
  if (req.user) {
    console.log(req.user.current_user.id)
    console.log(req.body.id)
    console.log(req.body.quantity)
    const user_id = req.user.current_user.id
    const item_id = req.body.id
    const quantity = req.body.quantity
    const ec = {user_id: user_id, item_id: item_id, quantity: quantity}
    connection.query('INSERT INTO carts set ?', ec,
      (err, results) => {
        res.redirect('/cart'); 
      })    
  } else {
    res.redirect('/signin');
  }
}       


        // const user_id = req.user.current_user.id
        // const title = req.body.title
        // const article = req.body.article
        // const diary = {user_id: user_id, title: title, article: article}
        // connection.query('INSERT INTO diaries set ?', diary,
        // //SQL実行結果がresultsにデータが入り、errという名前になっているらしい。
        //   (err, results) => {
        //     console.log(err)
        //     res.redirect('/');
        //   })
        // };


exports.cart = (req, res) => {
  if (req.user) {
    connection.query('SELECT * FROM ec.carts inner JOIN ec.items ON carts.item_id = items.id WHERE user_id = ?;', req.user.current_user.id,
      function (err, carts) {
        console.log(carts)
        res.render('me/cart',{cart_items: carts, csrfToken: req.csrfToken() })
          })
  } else {
          res.redirect('/signin');
  }
};

exports.delete = (req, res) => {
  connection.query('DELETE FROM carts  WHERE id = ?', req.cart_items.item_id,
  (err, results) => {
    res.redirect('/')
  })
};

exports.mypage_t = (req, res) => {
 if(req.user) {
        connection.query('SELECT * FROM users WHERE id = ?;',req.body.id,
        function (err, user) {
        res.render('me/mypage_t', {user:user, csrfToken: req.csrfToken() })
        })
        }else{
        res.redirect('/signin');
        }
};

exports.account = (req, res) => {
 if (req.user) {
  console.log(req.user)
        connection.query('SELECT * FROM users WHERE id = ?;', req.user.current_user.id,
                function (err, user) {
                  res.render('me/account', {user_a:user, csrfToken: req.csrfToken() })
                })
        } else {
          res.redirect('/signin');
        }
};

exports.account_edit = (req, res) => {
  if (req.user) {
    connection.query('SELECT * FROM users WHERE id = ?;', req.user.current_user.id,
      function (err, user) {
        res.render('me/account_edit', {user_a:user, csrfToken: req.csrfToken() })
      })
  } else {
    res.redirect('/signin');
  }
}

exports.update = (req, res, next) => {
  const id = req.user.current_user.id
  const name = req.body.name
  console.log(req.body)
  const post_number = req.body.post_number
  const address = req.body.address
  const phone_number = req.body.phone_number
  const email = req.body.email
  const ec = { id: id, name: name, postal_code: post_number, address: address, phone_number: phone_number, email: email }

  connection.query("UPDATE users SET ? WHERE id = ?", [ec, id],
    (err,results) => {
      res.redirect('/mypage/account');
    }
  );
};


exports.delivery = (req, res) => {
        res.render('me/delivery')
}

exports.order = (req, res) => {
        res.render('me/order')
}

exports.pay = (req, res) => {
        res.render('me/pay')
}

exports.myorder = (req, res) => {
        res.render('me/myorder')
}

exports.confirm = (req, res) => {
        res.render('me/confirm')
}