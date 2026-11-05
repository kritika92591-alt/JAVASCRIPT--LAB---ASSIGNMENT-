// Name: Zainul Ali | Roll Number: BCS2025413 | Assignment: 9, Task: 2
function validateForm(name) {
  const errors = [];

  if (name.trim() === "") {
    errors.push("Name is required");
  }

  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
