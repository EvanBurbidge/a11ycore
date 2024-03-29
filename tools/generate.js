const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: "create frontend service",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./tools/templates/frontend/"
    },
    stringReplacers: ["__PACKAGE__"],
    output: {
      path: "./packages/__PACKAGE__(kebabCase)",
      pathAndFileNameDefaultCase: "(kebabCase)"
    },
    onComplete: results => {
      console.log(results)
    }
  },
  {
    option: "create backend service",
    defaultCase: "(kebabCase)",
    entry: {
      folderPath: "./tools/templates/backend/"
    },
    stringReplacers: ["__PACKAGE__"],
    output: {
      path: "./packages/__PACKAGE__(kebabCase)",
      pathAndFileNameDefaultCase: "(kebabCase)"
    },
    onComplete: results => {
      console.log(results)
    }
  }
]);