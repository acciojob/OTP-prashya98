//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus(); // focus first box initially

codes.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // allow only digits
    if (!/^\d$/.test(value)) {
      e.target.value = "";
      return;
    }

    // move to next field if available
    if (index < codes.length - 1 && value !== "") {
      codes[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        // move focus to previous field
        if (index > 0) {
          codes[index - 1].focus();
          codes[index - 1].value = "";
        }
      } else {
        // clear current field
        input.value = "";
      }
    }
  });
});
