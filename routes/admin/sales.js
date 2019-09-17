exports.index = (req, res) => {
  res.render('admin/sales/index')
};

exports.show = (req, res) => {
  res.render('admin/sales/show')
};

exports.new = (req, res) => {
  res.render('admin/sales/new')
};

exports.edit = (req, res) => {
  res.render('admin/sales/edit')
};