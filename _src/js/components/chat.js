// Setup
(function(d, w, c) {
    w.ChatraID = 'DMxNajG68hYYtyPsd';
    var s = d.createElement('script');
    w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
    };
    s.async = true;
    s.defer = true;
    s.src = 'https://call.chatra.io/chatra.js';
    if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');

// Events
let listeners = document.querySelectorAll('[data-chat-open]');

listeners.forEach(listener => {
    listener.addEventListener('click', function (e) {
        e.preventDefault();
        Chatra('expandWidget');
    });
});
