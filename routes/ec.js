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
        res.render('me/index')
};

exports.items = (req, res) => {
        res.render('me/items')
}

exports.show = (req, res) => {
        res.render('me/show')
}

exports.addcart = (req, res) => {
        //insert文を書く必要あり
        res.render('me/cart')
}

