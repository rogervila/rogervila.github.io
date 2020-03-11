const Navbar = require('./components/Navbar').default
// const LazyImages = require('./components/LazyImages').default
const disqus = require('disqus-snippet')
const chatra = require('./components/Chatra').default
const commentBox = require('commentbox.io')

document.addEventListener('DOMContentLoaded', function () {

    // Load navbar burger
    let burgers = document.querySelectorAll('.navbar-burger')

    burgers.forEach(burger => {
        new Navbar(burger).load()
    })

    // Load disqus comments
    if (null !== document.getElementById('disqus_thread')) {
        disqus()
    }

    // Load Commentbox.io comments
    let commentBoxMeta = document.querySelector('meta[name="commentbox_io"]')
    if (null !== commentBoxMeta) {
        commentBox(commentBoxMeta.content)
    }

    // Lazy load images
    // new LazyImages().load()

    // Load chatra
    chatra()
})

function styleLoader() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var style = document.createElement('style')
            style.setAttribute('type', 'text/css')
            style.innerHTML = this.responseText
            document.head.appendChild(style)
            document.body.removeAttribute('data-cloak')
        }
    }
    xhttp.open('GET', '/assets/css/app.css', true)
    xhttp.send()
}

styleLoader()
