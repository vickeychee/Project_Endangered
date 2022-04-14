AFRAME.registerComponent('start-experience',{
    init: function() {

      // show continue message
        document.querySelector('#continue-container').style.display = 'flex';
        document.querySelector('#loading-animation').style.display = 'none';
    }
  });

  const startExperience = function(){

      // hide user gesture overlay
      document.querySelector('#user-gesture-overlay').style.display = 'none';
    
      // start any/all ambient sounds
      const ambientSounds = document.querySelectorAll('.ambient-music');
      ambientSounds.forEach(function(soundEntity){
            soundEntity.components.sound.playSound();

      });

      // get device choice from ocean-device.html
      deviceChoice = (localStorage.getItem("device"));

      if (deviceChoice == 3 ){    // if device is headset, immediately enter VR fullscreen mode
        document.querySelector('a-scene').enterVR();

      }
  
  }
