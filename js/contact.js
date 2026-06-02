(function () {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const validEmail = (value) => {
    const email = value.trim();
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) &&
      !email.includes("..") &&
      !email.startsWith(".") &&
      !email.split("@")[0].endsWith(".");
  };

  const getMessage = (field) => {
    let message = field.closest(".form-row").querySelector("small");
    if (!message) {
      message = document.createElement("small");
      field.closest(".form-row").appendChild(message);
    }
    return message;
  };

  const setError = (field, message) => {
    const row = field.closest(".form-row");
    row.classList.add("error");
    row.classList.remove("success");
    getMessage(field).textContent = message;
  };

  const setSuccess = (field) => {
    const row = field.closest(".form-row");
    row.classList.remove("error");
    row.classList.add("success");
    getMessage(field).textContent = "";
  };

  const validateField = (field) => {
    if (!field.value.trim()) {
      setError(field, "Required");
      return false;
    }

    if (field.type === "email" && !validEmail(field.value)) {
      setError(field, "Enter a valid email address");
      return false;
    }

    setSuccess(field);
    return true;
  };

  form.querySelectorAll("[required]").forEach((field) => {
    field.addEventListener("blur", () => {
      validateField(field);
    });

    field.addEventListener("input", () => {
      if (field.closest(".form-row").classList.contains("error")) {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.dataset.submitting === "true") return;

    const required = [...form.querySelectorAll("[required]")];
    const status = form.querySelector(".form-status");
    const button = form.querySelector("button[type='submit']");
    let isValid = true;

    required.forEach((field) => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) {
      status.textContent = "Please fix the highlighted fields.";
      return;
    }

    form.dataset.submitting = "true";
    if (button) {
      button.disabled = true;
      button.classList.add("is-loading");
      button.textContent = "Sending...";
    }
    status.textContent = "Sending your inquiry...";

    window.setTimeout(() => {
      if (button) {
        button.classList.remove("is-loading");
        button.textContent = "Sent";
      }
      status.textContent = "Inquiry sent. A travel designer will reply shortly.";
      form.reset();
    }, 700);
  });
})();
