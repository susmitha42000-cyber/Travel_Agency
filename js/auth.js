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

function validPassword(value) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value);
}

function preventNumbersInEmail() {
  document.querySelectorAll("input[type='email']").forEach((input) => {
    input.addEventListener("input", () => {
      const cleanValue = input.value.replace(/\d/g, "");
      if (input.value !== cleanValue) input.value = cleanValue;
    });
  });
}

function preventNumbersInNames() {
  document.querySelectorAll("[name='firstName'], [name='lastName']").forEach((input) => {
    input.addEventListener("input", () => {
      const cleanValue = input.value.replace(/\d/g, "");
      if (input.value !== cleanValue) input.value = cleanValue;
    });
  });
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
    form.querySelectorAll("input, select").forEach((field) => {
      if (field.type === "checkbox") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.closest(".form-row")?.classList.remove("error", "success");
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
  const fields = [...form.querySelectorAll("input[required], select[required]")];

  fields.forEach((field) => {
    if (field.type === "checkbox") {
      if (!field.checked) ok = false;
      return;
    }
    if (!field.value.trim()) {
      setError(field, "Required");
      ok = false;
    } else if (field.type === "email" && !validEmail(field.value)) {
      setError(field, "Enter a valid email");
      ok = false;
    } else if (field.type === "password" && !validPassword(field.value)) {
      setError(field, "Min 8 chars, 1 Upper, 1 Lower, 1 Number & 1 Symbol");
      ok = false;
    } else {
      setSuccess(field);
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
    if (form.dataset.authForm === "login") {
      const role = form.querySelector("[name='loginRole']")?.value;
      const email = form.querySelector("[name='loginEmail']")?.value.trim() || "";
      const emailName = email.split("@")[0] || "Traveler";
      const displayName = emailName
        .replace(/[._-]+/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
      const dashboards = {
        traveler: "traveler-dashboard.html",
        planner: "planner-dashboard.html"
      };
      localStorage.setItem("stacklyUser", JSON.stringify({ displayName, email, role }));
      window.location.href = dashboards[role] || "traveler-dashboard.html";
      return;
    }
    form.reset();
  });
});

preventDelayedAutofill();
preventNumbersInEmail();
preventNumbersInNames();
setupCountrySelector();
