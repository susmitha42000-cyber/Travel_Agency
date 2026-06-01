const countries = [
  { flag: "🇺🇸", name: "United States", code: "+1" },
  { flag: "🇮🇳", name: "India", code: "+91" },
  { flag: "🇬🇧", name: "United Kingdom", code: "+44" },
  { flag: "🇦🇪", name: "United Arab Emirates", code: "+971" },
  { flag: "🇯🇵", name: "Japan", code: "+81" },
  { flag: "🇦🇺", name: "Australia", code: "+61" }
];

function setError(input, message) {
  const row = input.closest(".form-row");
  row.classList.add("error");
  row.classList.remove("success");
  const small = row.querySelector("small");
  if (small) small.textContent = message;
}

function setSuccess(input) {
  const row = input.closest(".form-row");
  row.classList.remove("error");
  row.classList.add("success");
  const small = row.querySelector("small");
  if (small) small.textContent = "";
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setupCountrySelector() {
  const search = document.querySelector("[data-country-search]");
  const options = document.querySelector("[data-country-options]");
  const hidden = document.querySelector("[data-country-code]");
  if (!search || !options || !hidden) return;

  const render = (term = "") => {
    const filtered = countries.filter((country) => country.name.toLowerCase().includes(term.toLowerCase()) || country.code.includes(term));
    options.innerHTML = filtered.map((country) => `<button type="button" data-code="${country.code}" data-name="${country.name}">${country.flag} ${country.name} ${country.code}</button>`).join("");
    options.classList.add("open");
  };

  search.addEventListener("focus", () => render(search.value));
  search.addEventListener("input", () => render(search.value));
  options.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    search.value = `${button.dataset.name} ${button.dataset.code}`;
    hidden.value = button.dataset.code;
    options.classList.remove("open");
    setSuccess(search);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".country-field")) options.classList.remove("open");
  });
}

function clearRestoredValues() {
  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    form.reset();
    form.querySelectorAll("input").forEach((input) => {
      if (input.type === "checkbox") {
        input.checked = false;
      } else {
        input.value = "";
      }
      input.closest(".form-row")?.classList.remove("error", "success");
    });
  });
}

function preventDelayedAutofill() {
  clearRestoredValues();
  window.addEventListener("pageshow", clearRestoredValues);
  window.addEventListener("load", clearRestoredValues);
  [50, 250, 700].forEach((delay) => {
    window.setTimeout(clearRestoredValues, delay);
  });
}

function validateForm(form) {
  let ok = true;
  const fields = [...form.querySelectorAll("input[required]")];

  fields.forEach((input) => {
    if (input.type === "checkbox") {
      if (!input.checked) ok = false;
      return;
    }
    if (!input.value.trim()) {
      setError(input, "Required");
      ok = false;
    } else if (input.type === "email" && !validEmail(input.value)) {
      setError(input, "Enter a valid email");
      ok = false;
    } else if (input.name === "password" && input.value.length < 6) {
      setError(input, "Use a stronger password");
      ok = false;
    } else {
      setSuccess(input);
    }
  });

  const password = form.querySelector("[name='signupPassword']");
  const confirm = form.querySelector("[name='confirmPassword']");
  if (password && confirm && password.value !== confirm.value) {
    setError(confirm, "Passwords must match");
    ok = false;
  }

  return ok;
}

document.querySelectorAll("[data-auth-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm(form)) return;
    const button = form.querySelector("button[type='submit']");
    button.textContent = form.dataset.authForm === "forgot" ? "Reset Link Sent" : "Success";
    form.reset();
  });
});

preventDelayedAutofill();
setupCountrySelector();
