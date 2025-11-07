// ✅ Replace with your actual API Gateway Invoke URL (without a trailing slash)
const API_URL = "https://3tjap44m25.execute-api.us-east-1.amazonaws.com/prod";

document.getElementById("callApiBtn").addEventListener("click", async () => {
  const word = document.getElementById("wordInput").value.trim();
  const resultElement = document.getElementById("result");

  if (!word) {
    resultElement.innerText = "Please enter a cloud term!";
    return;
  }

  try {
    // 🔹 Send GET request with query string (e.g. ?term=lambda)
    const response = await fetch(${API_URL}?term=${encodeURIComponent(word)}, {
      method: "GET"
    });

    const data = await response.json();

    if (response.ok) {
      resultElement.innerText = data.meaning || data.message || "No definition found.";
    } else {
      resultElement.innerText = Error: ${data.message || "Unknown error"};
    }
  } catch (error) {
    console.error("Error:", error);
    resultElement.innerText = "❌ Something went wrong while fetching data.";
  }
});
