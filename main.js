function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const chevron = element.querySelector(".chevron");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    chevron.classList.remove("up");
    chevron.classList.add("down");
  } else {
    answer.style.display = "block";
    chevron.classList.remove("down");
    chevron.classList.add("up");
  }
}
