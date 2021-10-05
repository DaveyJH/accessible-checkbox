// checkmark controls
let checkmarks = document.getElementsByClassName("checkmark");
for (let i = 0; i < checkmarks.length; i++) {
  const checkbox = checkmarks[i].previousElementSibling;
  checkbox.addEventListener("click", () => {
    // add function here
    ariaCheck(checkbox);
  })
  // aria control for click
  checkmarks[i].addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    // add function here
    ariaCheck(checkbox);
  });
  // keyboard
  checkmarks[i].addEventListener("keydown", (keyed) => {
    if (keyed.key === " ") {
      keyed.preventDefault();
    }
  })
  checkmarks[i].addEventListener("keyup", (keyed) => {
    if (!checkbox.disabled) {
      if (keyed.key === " ") {
        checkbox.checked = !checkbox.checked;
        // add function here
        ariaCheck(checkbox);
      }
    }
  });
}

function ariaCheck(checkbox) {
  if (!checkbox.checked) {
    checkbox.nextElementSibling.setAttribute("aria-checked", "false");
  } else {
    checkbox.nextElementSibling.setAttribute("aria-checked", "true");
  }
  if (checkbox.disabled) {
    checkbox.nextElementSibling.setAttribute("aria-disabled", "true");
  } else {
    checkbox.nextElementSibling.setAttribute("aria-disabled", "false");
  }
}