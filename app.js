function darkMode() {
    let body = document.querySelector('body');
    let nav = document.querySelector('nav');
    let darlit = document.querySelector('#darlit')
    body.classList.toggle('dark');
    nav.classList.toggle('dark');
    darlit.classList.toggle('blue');
}
