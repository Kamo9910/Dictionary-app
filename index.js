const API_URL = "https://3tjap44m25.execute-api.us-east-1.amazonaws.com/prod";

document.getElementById("callApiBtn").addEventListener("click", async () => {
  const word = document.getElementById("wordInput").value.trim();
  const resultElement = document.getElementById("result");

  if (!word) {
    resultElement.innerText = "Please enter a cloud term!";
    return;
  }

  try {
    // ✅ Use query string ?term=...
    const response = await fetch(${API_URL}/definitions?term=${encodeURIComponent(word)}, {
      method: "GET"
    });

    const data = await response.json();

    if (response.ok) {
      resultElement.innerText = data.definition || "No definition found.";
    } else {
      resultElement.innerText = Error: ${data.error || "Unknown error"};
    }
  } catch (error) {
    console.error("Error:", error);
    resultElement.innerText = "❌ Something went wrong while fetching data.";
  }
});
