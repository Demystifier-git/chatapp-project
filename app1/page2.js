window.addEventListener("DOMContentLoaded", async function () {
  // avoid revisit
  const res = await fetch('server/check-cookie.php')
  const data = await res.text()
  if(!data) {
    window.location.href = `./index.html`
  }

  // rendering a message
  setInterval(async function () {
    const res = await fetch('server/get-messages.php')
    const data = await res.text()

    const h3 = document.querySelector('.row1 > h3')
    if (!data) {
      h3.innerHTML = 'No messages';

      if (document.querySelector('.message')) {
        const messagesBox = document.querySelector('.message').parentElement
        messagesBox.innerHTML = '';
      }
      return;
    }
    h3.innerHTML = '';

    const resJSON = JSON.parse(data)
    // resJSON.sort(function (a, b) {
    //   return (Date.parse(a.timestamp) - Date.parse(b.timestamp));
    // })

    var html = ``
    resJSON.forEach(function (message) {
      html +=
        `
      <div class="message">
        <h2>${message.username}</h2>
        <p>${message.message}</p>
        <h3>${message.timestamp}</h3>
      </div>
      `
    });

    const div = document.querySelector('.viewport .row2 .row1 > div')
    div.innerHTML = html
  }, 1500)

  // sending a message
  const textarea = document.querySelector('textarea')
  const sendButton = document.querySelector('button')

  textarea.addEventListener('input', function () {
    if (/^\s+/.test(textarea.value) || !textarea.value) {
      sendButton.setAttribute("disabled", 'true');
      return;
    }

    sendButton.removeAttribute('disabled');
  })

  sendButton.addEventListener("click", async function () {
    if (/^\s+/.test(textarea.value) || !textarea.value) {
      sendButton.setAttribute("disabled", 'true');
      return;
    }

    await fetch('server/send-message.php', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: textarea.value
    })

    textarea.value = '';
    sendButton.setAttribute("disabled", 'true');
  })
})