const API_URL = "https://3tjap44m25.execute-api.us-east-1.amazonaws.com/prod";

document.getElementById("callApiBtn").addEventListener("click", async () => {
  const word = document.getElementById("wordInput").value.trim();
  const resultElement = document.getElementById("result");

  if (!word) {
    resultElement.innerText = "Please enter a cloud term!";
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term: word })
    });

    const data = await response.json();
    resultElement.innerText = data.meaning || data.message || JSON.stringify(data);
  } catch (error) {
    console.error("Error:", error);
    resultElement.innerText = "Something went wrong while fetching data.";
  }
});
