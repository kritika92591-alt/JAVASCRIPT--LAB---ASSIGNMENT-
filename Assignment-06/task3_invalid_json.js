// Name: kritika | Roll Number: BCS2025462| Assignment: 6, Task: 3
const jsonText = "{name: Rohan}";

try {
  JSON.parse(jsonText);
} catch (error) {
  console.log("Invalid JSON");
}
