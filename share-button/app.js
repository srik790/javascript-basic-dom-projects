// Write Javascript code!
const userInput = document.getElementById('userInput');

const fb = document.getElementById('fb');
fb.addEventListener('click', shareOnFacebook);

const tweet = document.getElementById('twitter');
tweet.addEventListener('click', shareOnTwitter);

const insta = document.getElementById('insta');
insta.addEventListener('click', shareOnInstagram);

const whatsapp = document.getElementById('whatsapp');
whatsapp.addEventListener('click', shareOnWhatsApp);

function shareOnFacebook() {
  const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + userInput.value;
  window.open(navUrl, '_blank');
}

function shareOnTwitter() {
  const navUrl = 'https://twitter.com/intent/tweet?text=' +  userInput.value;
  window.open(navUrl, '_blank');
}

function shareOnInstagram() {
  const navUrl = 'https://www.instagram.com/share?url=' + userInput.value;
  window.open(navUrl, '_blank');

}

function shareOnWhatsApp() {
  window.open('whatsapp://send?text=' + userInput.value, '_blank');
}