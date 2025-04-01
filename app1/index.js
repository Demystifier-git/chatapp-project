window.addEventListener('DOMContentLoaded', async function () {
  // avoid revisit
  const res = await fetch('server/check-cookie.php')
  const data = await res.text()
  if(data) {
    window.location.href = `./${data}`
  }
  

  const info = document.querySelector('.info')

  const chatButton = document.querySelector('button')

  chatButton.addEventListener('click', async function () {
    if (usernameInput.value != '') {
      // extra security
      if (/[^a-zA-Z_0-9]/.test(usernameInput.value) ||
        /^\d+|\s+/.test(usernameInput.value) ||
        !/[a-zA-Z0-9_]{5,10}/.test(usernameInput.value)) {
        return;
      }

      const formData = new FormData()
      formData.append('username', usernameInput.value)

      const res = await fetch('server/login2.php', {
        method: 'POST',
        body: formData
      })
      const data  = await res.text()

      if(/^\{.*\}$/.test(data)){
        const resJSON = JSON.parse(data);
        window.location.href = `./${resJSON.redirect}`;
      }
      
      console.log(data)
    }
  })

  const usernameInput = document.querySelector('input')

  usernameInput.addEventListener('input', async function () {
    if (usernameInput.value != '') {
      const formData = new FormData()
      formData.append('username', usernameInput.value)

      const res = await fetch('server/login.php', {
        method: 'POST',
        body: formData
      })

      const data = await res.text()


      if (data == 'Username is available') {
        info.innerHTML = '<img src=\"icons/check.png\" >' + data
        info.style.color = '#02f72b'
        chatButton.removeAttribute('disabled')
      } else {
        info.innerHTML = '<img src=\"icons/invalid.png\" >' + data
        info.style.color = '#ea3323'
        chatButton.setAttribute('disabled', 'true')
      }

      return;
    }
    info.innerText = ''
    chatButton.setAttribute('disabled', 'true')
  })
}) 