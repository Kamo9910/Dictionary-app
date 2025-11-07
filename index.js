const API_URL = "https://3tjap44m25.execute-api.us-east-1.amazonaws.com/prod";

document.getElementById("callApiBtn").addEventListener("click", async function () {
  const word = document.getElementById("wordInput").value.trim();
  const resultElement = document.getElementById("result");

  if (!word) {
    resultElement.innerText = "Please enter a cloud term!";
    return;
  }

  try {
    const url = API_URL + "/definitions?term=" + encodeURIComponent(word);
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      resultElement.innerText = (data.definition || "No definition found.");
    } else {
      resultElement.innerText = "Error: " + (data.error || "Definition not in the dictionary");
    }
  } catch (error) {
    console.error(error);
    resultElement.innerText = "❌ Something went wrong.";
  }
});

