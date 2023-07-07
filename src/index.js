const fs = require("fs/promises");
const fileName = "myfile.txt";
fileContent = ",An online learning platform.";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  fs.appendFile(fileName, fileContent, (error) => {
    console.log(error)
  })
};
updateFile(fileName, fileContent);
module.exports = updateFile;
