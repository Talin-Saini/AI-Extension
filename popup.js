
document.getElementById('ask').addEventListener('click', async () => {
  const problem = document.getElementById('problem').value;
  const responseBox = document.getElementById('response');
  responseBox.textContent = 'Thinking...';

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Give a hint for this DSA problem: ${problem}` }]
      })
    });

    const data = await res.json();
    responseBox.textContent = data.choices[0].message.content;
  } catch (err) {
    responseBox.textContent = 'Error: ' + err.message;
  }
});
