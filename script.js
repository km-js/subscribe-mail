const scriptURL = 'https://script.google.com/macros/s/AKfycbzxbZULC8fBgq0qHpVuuTZjK3wFFjBnYupFAMswxiQMN0-afa4eqwlj-3OPca04bUx_Bg/exec';

const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            msg.innerHTML = 'Thank You for Subscribing!';
            setTimeout(function () {
                msg.innerHTML = '';
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
