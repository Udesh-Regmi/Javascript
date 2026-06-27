const faqData = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all items.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 5-7 business days.",
  },
  {
    question: "Who are you? ",
    answer:
      "We are a company dedicated to providing high-quality products and excellent customer service.",
  },
];
let faqContainer = document.getElementsByClassName("FAQContainer")[0];

faqData.forEach((item) => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  const question = document.createElement("h3");
  question.classList.add("faq-question");
  question.style.cursor = "pointer";
  question.style.color = "#333";
  question.style.backgroundColor = "#f9f9f9";
  question.style.border = "1px solid #ccc";
  question.style.padding = "10px";
  question.textContent = item.question;

  const plusIcon = document.createElement("span");
  plusIcon.textContent = "+";
  plusIcon.style.float = "right";
  plusIcon.style.fontSize = "20px";
  plusIcon.style.color = "#333";
  question.appendChild(plusIcon);

  const answer = document.createElement("p");
  answer.classList.add("faq-answer");
  answer.style.display = "none";
  answer.style.margin = "0";
  answer.style.padding = "0";

  answer.textContent = item.answer;

  question.addEventListener("click", () => {
    answer.classList.toggle("active");
    plusIcon.classList.toggle("active");
    plusIcon.textContent = plusIcon.classList.contains("active") ? "-" : "+";
    answer.style.display = answer.classList.contains("active")
      ? "block"
      : "none";
    answer.style.padding = answer.classList.contains("active") ? "10px" : "1px";
    answer.style.transform = "all ease 0.3s";
  });

  faqItem.appendChild(question);
  faqItem.appendChild(answer);

  faqContainer.appendChild(faqItem);
});

