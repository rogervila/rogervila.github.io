export default class {
    constructor(burger) {
        this.burger = burger;
    }
    load() {
        this.burger.addEventListener('click', function() {
            // Get the target from the "data-target" attribute
            let target = document.getElementById(this.dataset.target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            this.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    }
}
