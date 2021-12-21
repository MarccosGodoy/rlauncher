const { execFile } = require("child_process");
const functions = {};

functions.openGame = (g) => {
  console.log(g.path);
  console.log(g.options);
  execFile(g.path, g.options, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
};

module.exports = functions;
