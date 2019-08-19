exports.index = (req, res) => {
  res.render('admin/users/index')
};

exports.show = (req, res) => {
  res.render('admin/users/show')
};

exports.new = (req, res) => {
  res.render('admin/users/new')
};

exports.edit = (req, res) => {
  res.render('admin/users/edit', { name: "Material Design Color Palette", address:"xxx県〇〇市〇〇区 1-1-1", tel: "000-1234-5678", mail: "test01@example.com" })
};