function addMessage() {
  const name = document.getElementById('name').value || 'Unknown';
  const message = document.getElementById('message').value;
  const time = document.getElementById('time').value || '10:00';

  if (!message) {
    alert('Please enter a message.');
    return;
  }

  const photoProfileInput = document.getElementById('photo-profile');
  const photoProductInput = document.getElementById('photo-product');

  const contentArea = document.querySelector('.content-area');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';

  let profilePic = '';
  if (photoProfileInput.files.length > 0) {
    const file = photoProfileInput.files[0];
    profilePic = URL.createObjectURL(file);
  }

  let productPic = '';
  if (photoProductInput.files.length > 0) {
    const file = photoProductInput.files[0];
    productPic = URL.createObjectURL(file);
  }

  messageDiv.innerHTML = `
    <strong>${name}</strong>
    ${profilePic ? `<img src="${profilePic}" alt="Profile" style="width: 40px; height: 40px; border-radius: 50%;">` : ''}
    <p>${message}</p>
    ${productPic ? `<img src="${productPic}" alt="Product" style="max-width: 100%; margin-top: 5px;">` : ''}
    <small>${time}</small>
  `;
  contentArea.appendChild(messageDiv);

  // Clear inputs
  document.getElementById('message').value = '';
  document.getElementById('photo-profile').value = '';
  document.getElementById('photo-product').value = '';

  // Scroll to bottom
  contentArea.scrollTop = contentArea.scrollHeight;
}

function saveChat() {
  html2canvas(document.querySelector('.whatsapp-interface')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'whatsapp-chat.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
