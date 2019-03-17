export default class {
    constructor() {
        this.images = document.querySelectorAll('img.lazy');
    }
    load() {
        if ('IntersectionObserver' in window) {
            return this.loadWithIntersectionObserver();
        }

        return this.oldBrowserLoader();
    }
    loadWithIntersectionObserver() {
        const _this = this;
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    if ('undefined' !== typeof lazyImage.dataset.srcset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        _this.images.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
    oldBrowserLoader() {
        for (let i = 0, l = this.images.length; i < l; i++) {
            this.images[i].src = this.images[i].dataset.src;
            if ('undefined' !== typeof this.images[i].dataset.srcset) {
                this.images[i].srcset = this.images[i].dataset.srcset;
            }

            this.images[i].classList.remove('lazy');
        }
    }
}
