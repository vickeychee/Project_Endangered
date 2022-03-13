AFRAME.registerComponent('start-experience',{
    init: function() {
        console.log('scene loaded');

        document.querySelector('#continue-container').style.display = 'flex';
        document.querySelector('#loading-animation').style.display = 'none';
    }
  });

  const startExperience = function(){
      //hide user gesture overlay
      document.querySelector('#user-gesture-overlay').style.display = 'none';

    
      //start any/all ambient sounds
      const ambientSounds = document.querySelectorAll('.ambient-music');
      ambientSounds.forEach(function(soundEntity){
            soundEntity.components.sound.playSound();

      });


      deviceChoice = (localStorage.getItem("device"));

      if (deviceChoice == 3 ){
        document.querySelector('a-scene').enterVR();

      }

  }
