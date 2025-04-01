function updateHeader() {
  const profileUrl = document.getElementById('profile-url').value;
  const profileUpload = document.getElementById('profile-upload').files[0];
  const nameOrNumber = document.getElementById('name-or-number').value || '+1234567890';

  const profilePic = document.querySelector('.profile-pic');
  const nameNumber = document.querySelector('.name-number');

  if (profileUpload) {
    profilePic.src = URL.createObjectURL(profileUpload);
  } else if (profileUrl) {
    profilePic.src = profileUrl;
  } else {
    profilePic.src = 'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg';
  }

  nameNumber.textContent = nameOrNumber;
}

document.getElementById('live-typing').addEventListener('input', function () {
  const liveMessage = document.getElementById('live-message');
  liveMessage.textContent = this.value || 'Live Preview';
});

function addMessage() {
  const sender = document.getElementById('sender').value;
  const message = document.getElementById('message').value;
  const time = document.getElementById('time').value || '10:00';
  const productUrl = document.getElementById('product-url').value;
  const productUpload = document.getElementById('product-upload').files[0];

  if (!message) {
    alert('Please enter a message.');
    return;
  }

  const contentArea = document.querySelector('.content-area');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;

  let productPic = '';
  if (productUpload) {
    productPic = URL.createObjectURL(productUpload);
  } else if (productUrl) {
    productPic = productUrl;
  }

  messageDiv.innerHTML = `
    ${productPic ? `<img src="${productPic}" alt="Product">` : ''}
    <p>${message}</p>
    <small>${time}</small>
  `;
  contentArea.appendChild(messageDiv);

  // Clear inputs
  document.getElementById('message').value = '';
  document.getElementById('product-url').value = '';
  document.getElementById('product-upload').value = '';

  // Scroll to bottom
  contentArea.scrollTop = contentArea.scrollHeight;

  // Hide live preview
  document.querySelector('.live-preview').style.display = 'none';
}

function saveChat() {
  html2canvas(document.querySelector('.whatsapp-interface')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'whatsapp-chat.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
