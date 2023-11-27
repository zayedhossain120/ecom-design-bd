document.addEventListener("DOMContentLoaded", function (event) {
  function handleOTPInput() {
    const inputs = document.querySelectorAll("#otpNumberCounter > *[id]");

    inputs.forEach((input, i) => {
      console.log(i, "hello");
      input.addEventListener("keydown", (event) => {
        console.log(event, "hellllddl");
        const isBackspace = event.key === "Backspace";
        const isLastInput = i === inputs.length - 1;

        if (isBackspace) {
          inputs[i].value = "";
          if (i !== 0) inputs[i - 1]?.focus();
        } else if (
          !isLastInput &&
          ((event.keyCode >= 48 && event.keyCode <= 57) ||
            (event.keyCode >= 65 && event.keyCode <= 90))
        ) {
          inputs[i].value = isLastInput
            ? ""
            : event.key || String.fromCharCode(event.keyCode);
          if (!isLastInput) inputs[i + 1].focus();
          event.preventDefault();
        }
      });
    });
  }

  handleOTPInput();
});
