const mix = require('laravel-mix')
const path = require('path')
const fs = require('fs')

mix
    .disableNotifications()
    .js('app.js', 'app.dist.js')
    .copy('app.dist.js', path.join(__dirname, '..', 'assets', 'js', 'app.js'))
    .then(() => {
        fs.unlinkSync(path.join(__dirname, 'app.dist.js'))
    })
