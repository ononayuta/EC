exports.index = (req, res) => {
  res.render('admin/products/index')
};

exports.show = (req, res) => {
  res.render('admin/products/show')
};

exports.new = (req, res) => {
  res.render('admin/products/new')
};

exports.edit = (req, res) => {
  res.render('admin/products/edit')
};