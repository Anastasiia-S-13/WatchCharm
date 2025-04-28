document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById('phone');

  phoneInput.addEventListener('input', () => {
    let value = phoneInput.value.replace(/\D/g, '');
    if (value.startsWith('380')) value = value.slice(3);
    value = value.substring(0, 9);

    let formatted = '+380';
    if (value.length > 0) formatted += '-' + value.substring(0, 2);
    if (value.length > 2) formatted += '-' + value.substring(2, 5);
    if (value.length > 5) formatted += '-' + value.substring(5, 7);
    if (value.length > 7) formatted += '-' + value.substring(7, 9);

    phoneInput.value = formatted;
  });
});


