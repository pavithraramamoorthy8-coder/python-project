function goBack() {
  window.location.href = "dash.html";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  const chatBox = document.getElementById("chatBox");

  if (message === "") return;

  // User message
  const userDiv = document.createElement("div");
  userDiv.classList.add("user-message");
  userDiv.textContent = message;
  chatBox.appendChild(userDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot response
  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.classList.add("bot-message");
    const img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/4712/4712109.png";
    img.classList.add("bot-icon");

    const reply = document.createElement("p");
    reply.textContent = getBotResponse(message);

    botDiv.appendChild(img);
    botDiv.appendChild(reply);
    chatBox.appendChild(botDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function quickReply(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("save")) return "💡 Turn off lights when not in use and use LED bulbs!";
  if (input.includes("ac")) return "❄️ Set your AC to 24°C for efficient cooling.";
  if (input.includes("report")) return "📊 Visit the Visualization page for detailed reports!";
  if (input.includes("support")) return "📞 Contact us at energyteam@gmail.com.";
  return "🤖 I'm still learning! Try asking about 'saving power' or 'your report'.";
}
