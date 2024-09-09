import { keys } from "./config.js";

const inputData = document.querySelector("#promptInput");
const greetandSuggestion = document.querySelector(".greetandSuggestion");
const form = document.querySelector("form");
const outputSection = document.querySelector(".output-hero-section");
const copyBtn = document.getElementById("copyButton");
const chatBotOutputPara = document.querySelector("#incoming-message");
const inputtoshowPara = document.querySelector(".userPrompt");
const submitBtn = document.querySelector(".submitBtn");
const loadingSpinner = document.getElementById("loadingSpinner");

const API_KEY = keys.API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;


document.addEventListener("DOMContentLoaded", () => {
  copyBtn.addEventListener("click", () => {
    const dataToBeCopied = chatBotOutputPara.textContent;
    try {
      navigator.clipboard.writeText(dataToBeCopied);
      console.log("Text copied successfully! for message");
    } catch (err) {
      console.error("Error occurred while copying the text:", err);
    }
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userPrompt = inputData.value.trim();
  if (!userPrompt) {
    alert("Please provide an input.");
    return;
  }

  greetandSuggestion.classList.add("hidden");
  loadingSpinner.classList.remove("hidden");

  submitBtn.disabled = true;
  submitBtn.classList.add("opacity-50", "cursor-not-allowed");

  try {
    const response = await GeminiFetch(userPrompt);
    if (response) {
      chatBotOutputPara.textContent = response;
      inputtoshowPara.textContent = userPrompt;
      showOutput();
    } else {
      chatBotOutputPara.textContent = "Sorry, I couldn't generate a response.";
    }
  } catch (error) {
    console.error("Error during API fetch:", error);
    chatBotOutputPara.textContent =
      "An error occurred while fetching the response.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
    loadingSpinner.classList.add("hidden");
    clearPrompt();
  }
});

async function clearPrompt() {
  inputData.value = "";
}

async function GeminiFetch(userPrompt) {
  console.log("Sending prompt to API:", userPrompt);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: userPrompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const finalRes = await response.json();
    const result = finalRes.candidates[0]?.content.parts[0]?.text;

    if (result) {
      console.log("API response:", result);
      return result;
    } else {
      console.error("No content in the API response.");
      return null;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}

function showOutput() {
  const isHidden = outputSection.classList.contains("hidden");
  if (isHidden) {
    outputSection.classList.remove("hidden");
  }
}
