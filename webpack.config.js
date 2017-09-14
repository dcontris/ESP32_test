var path = require("path")

module.exports = {
    entry: "./app.js",
    output: {
        path: path.join(__dirname, "/client/"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\/.css$/, loader: "style!css" }
        ]

        
    },

    node: {
        fs: 'empty'
      }
};