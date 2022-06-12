const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/main',
    output: {
        path: path.resolve(_dirname, 'public'),
        filename: 'main.js'
    }    
}