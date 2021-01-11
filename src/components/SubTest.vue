<template>

<form id="newsletter" class="subscribe" action="/.netlify/functions/form-handler" method="post">
  <input type="email" id="inputEmail" name='email' placeholder="Enter email to subscribe for FREE" class="email" required autofocus>
  <button class="button" type="submit">Subscribe</button>
  <div id="message"></div>
</form>

</template>

<script>
  function submitEmail(email) {
    fetch('/.netlify/functions/form-handler', {
        method: 'post',
        body: JSON.stringify({
          email: email
        })
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        messageDiv = document.getElementById('message');
        messageDiv.innerText = 'Confirmation email has been sent!'
      });
  };

  export default {
  name: "SubTest",

  data() {
    return {
      isActive: true
    };
  },

};
</script>
