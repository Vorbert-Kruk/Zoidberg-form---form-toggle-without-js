const form = document.querySelector('.right-side form');
const changeValue = newValue => form.style.backgroundColor = newValue;

(() => {
    document.querySelector('input[type=\'text\'].change-value').addEventListener('blur', e => changeValue(e.target.value));
})();