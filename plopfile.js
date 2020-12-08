const ui = require("./@config/plop/generators/ui");
const page = require("./@config/plop/generators/page");

module.exports = (plop) => {
  plop.setGenerator("ui", ui);
  plop.setGenerator("page", page);
};
