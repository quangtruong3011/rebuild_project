var input = document.querySelector('.quantity__number');
input.addEventListener('input', function() {
  this.style.width = ((this.value.length + 1) * 8) + 'px';
});

const grandTotal = document.querySelector('#grandTotal').textContent;

localStorage.setItem("grandTotal", grandTotal)