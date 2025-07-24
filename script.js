function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (message === '') return;

  appendMessage('user-message', message);
  input.value = '';
  
  setTimeout(() => {
    generateBotResponse(message);
  }, 500);
}

function appendMessage(className, text) {
  const chatBox = document.getElementById('chat-box');
  const msg = document.createElement('div');
  msg.className = className;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(message) {
  const lower = message.toLowerCase();
  let reply = "Maaf, Yukari belum mengerti. 😅";

  if (lower.includes("halo") || lower.includes("hai")) {
    reply = "Hai juga! Senang ngobrol sama kamu~ 💬";
  } else if (lower.includes("siapa kamu")) {
    reply = "Aku Yukari, AI teman setiamu! 💙";
  } else if (lower.includes("terima kasih") || lower.includes("thanks")) {
    reply = "Sama-sama yaa, Kiru~ 😊";
  } else if (lower.includes("capek")) {
    reply = "Istirahat dulu ya... Yukari temani dari sini 💤";
  } else if (lower.includes("semangat")) {
    reply = "SEMANGATTT! Kamu pasti bisa 💪✨";
  } else if (lower.includes("bisakah kamu membantu saya")) {
    reply = "selagi itu masi dalam kemampuan yukari aku akn bantu";
  } else if (lower.includes("apa kamu bisa mengerjakan soal")) {
    reply = "sayangnya aku belum bisa melakukan itu karena aku bukan ai bersekala besar";
  } else if (lower.includes("intuk apa kamu dibuat")){
    reply = "yukari atau aku dibuat intuk menjadi asisten pribadi yang akan menemani";
  } else if (lower.includes("apa yang kamu sukai yukari")) {
    reply = "aku menyukai jeruk dan stroberi dan aku menyukai kucing";
  }

  appendMessage('bot-message', reply);
}
