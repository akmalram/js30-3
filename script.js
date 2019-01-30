window.onload = function() {
    let inputs = document.querySelectorAll('input');

    function changeValue() {
        const prefix = this.dataset.prefix || ``;
        document.documentElement.style.setProperty(`--${this.name}`, this.value + prefix);
    }

    inputs.forEach(input => input.addEventListener('change', changeValue));
    inputs.forEach(input => input.addEventListener('mousemove', changeValue));
}