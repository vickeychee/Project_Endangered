const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));


document.addEventListener('DOMContentLoaded', () =>
  wait(1500).then(() => {

    usergesture = document.querySelector('#user-gesture-overlay');
    loadingAnimation = document.querySelector('#loading-animation');

    loadingAnimation.style.display = "none";
    usergesture.style.display = "none";

  }));