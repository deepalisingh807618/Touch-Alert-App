const startBtn = document.getElementById('startBtn');
const unlockBtn = document.getElementById('unlockBtn');
const statusText = document.getElementById('status');
const alarm = document.getElementById('alarm');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('errorMsg');

const mainScreen = document.getElementById('mainScreen');
const passwordScreen = document.getElementById('passwordScreen');

let alertActive = false;
const correctPassword = "1234"; // 🔐 You can change this password

// Activate Alert
startBtn.addEventListener('click', () => {
  alertActive = true;
  statusText.textContent = "Status: Alert Activated!";
  document.body.style.backgroundColor = "#ffe6e6";

  // Listen for interaction
  window.addEventListener('click', triggerAlert);
  window.addEventListener('touchstart', triggerAlert);
  window.addEventListener('mousemove', triggerAlert);
  window.addEventListener('deviceorientation', triggerAlert);
});

// Trigger Alarm
function triggerAlert() {
  if (alertActive) {
    alarm.play();
    if ("vibrate" in navigator) navigator.vibrate([500, 300, 500]);

    mainScreen.classList.add('hidden');
    passwordScreen.classList.remove('hidden');
    alertActive = false;
  }
}

// Unlock
unlockBtn.addEventListener('click', () => {
  const entered = passwordInput.value;
  if (entered === correctPassword) {
    statusText.textContent = "Status: Inactive";
    document.body.style.backgroundColor = "#f2f2f2";
    alarm.pause();
    alarm.currentTime = 0;
    passwordScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    passwordInput.value = "";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Incorrect Password!";
  }
});
