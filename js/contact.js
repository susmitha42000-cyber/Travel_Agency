(function () {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const required = [...form.querySelectorAll("[required]")];
    const isValid = required.every((field) => field.value.trim());
    const status = form.querySelector(".form-status");

    required.forEach((field) => {
      field.closest(".form-row").classList.toggle("error", !field.value.trim());
    });

    if (!isValid) {
      status.textContent = "Please complete each field.";
      return;
    }

    status.textContent = "Inquiry sent. A travel designer will reply shortly.";
    form.reset();
  });
})();
