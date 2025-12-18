(() => {
  const form = document.getElementById('orderForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const spinner = submitBtn.querySelector('.spinner-border');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    btnText.textContent = 'Mengirim...';
    spinner.classList.remove('d-none');
    submitBtn.disabled = true;

    setTimeout(() => {
      btnText.textContent = 'Kirim Pesanan';
      spinner.classList.add('d-none');
      submitBtn.disabled = false;
      form.reset();
      form.classList.remove('was-validated');

      const modal = new bootstrap.Modal(
        document.getElementById('successModal')
      );
      modal.show();
    }, 1500);
  });
})();
