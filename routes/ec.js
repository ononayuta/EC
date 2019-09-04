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
        connection.query('SELECT * FROM items ORDER BY RAND() LIMIT 6;',
          function (err, items) {
            res.render('me/index',{items:items, csrfToken: req.csrfToken() })
          }
)}





exports.items = (req, res) => {
        connection.query('SELECT * FROM items;',
        function (err, item) {
        res.render('me/items',{item:item, csrfToken: req.csrfToken() })
       
})}

exports.show = (req, res) => {
        connection.query('SELECT * FROM items WHERE id = ?;',req.params.id,
        function (err, show_id) {
        res.render('me/show', {show:show_id})
})}

exports.addcart = (req, res) => {
        //insert文を書く必要あり
        res.render('me/cart')
}

exports.cart = (req, res) => {
        res.render('me/cart')
}

exports.mypage_t = (req, res) => {
 if(req.user) {
        connection.query('SELECT * FROM users WHERE id = ?;',req.user.current_user.id,
        function (err, user) {
        res.render('me/mypage_t', {user:user, csrfToken: req.csrfToken() })
        })
        }else{
        res.redirect('/signin');
        }
};

exports.account = (req, res) => {
 if(req.user) {
        connection.query('SELECT * FROM users WHERE id = ?;',req.user.current_user.id,
        function (err, user) {
        res.render('me/account', {user_a:user, csrfToken: req.csrfToken() })
        })
        }else{
        res.redirect('/signin');
        }
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