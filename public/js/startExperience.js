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

    
      document.querySelector('#rotate_portrait_ID2').style.display = 'block';


      //start any/all ambient sounds
      const ambientSounds = document.querySelectorAll('.ambient-music');
      ambientSounds.forEach(function(soundEntity){
            soundEntity.components.sound.playSound();

      });

    

  }
