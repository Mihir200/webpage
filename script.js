const timestampElement = document.getElementById('timestamp');
const date = new Date();
const timestamp = date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
timestampElement.textContent = timestamp.toUpperCase();
