// app.js
const API_BASE = "https://yp32yulkli.execute-api.us-east-1.amazonaws.com/prod/definitions"; 
// <-- replace with your API invoke URL

document.getElementById('searchBtn').addEventListener('click', search);
document.getElementById('termInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') search(); });

async function search() {
  const term = document.getElementById('termInput').value.trim();
  const out = document.getElementById('result');
  out.textContent = '';

  if (!term) { out.textContent = 'Please enter a term.'; return; }

  out.textContent = 'Searching…';

  try {
    const url = ${API_BASE}?term=${encodeURIComponent(term)};
    const res = await fetch(url, { method: 'GET' });

    if (res.status === 404) {
      const j = await res.json();
      out.textContent = j.error || 'Not found';
      return;
    }
    if (!res.ok) {
      out.textContent = 'Server error: ' + res.status;
      return;
    }

    const data = await res.json();
    out.innerHTML = <h3>${escapeHtml(data.term)}</h3><p>${escapeHtml(data.definition)}</p>;
  } catch (err) {
    out.textContent = 'Error: ' + err.message;
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
}