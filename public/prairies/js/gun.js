AFRAME.registerComponent('gun-task',{
    init: function() {

        // initalize gun
        gun = document.querySelector('#gun');

        // initalize tooltip
        targetTooltip = document.querySelector('#tooltip5');
        
        // initalize target
        target = document.querySelector('#target');

        // if target is clicked
        target.addEventListener('click', ()=>{

            if (objectSelectedID === "gun"){         // if gun is picked up

                Screen_Overlay_ID.style.display = "block";      // display fact popup
                factUI.style.display = "flex";
    
                factTitle.innerHTML ="Hunting Dangers";         // change fact popup text
                factText.innerHTML = "One of the major threats to whooping cranes is hunting. In the past, the whooping crane was hunted for its meat and feathers, which were used as decorations on hats and clothing. Now that the whooping crane is protected, they can no longer be hunted. However, accidental shootings are still a huge issue.";

                targetTooltip.setAttribute("visible",false);        // hide tooltip

                target.setAttribute('gltf-model', "./assets/target_shot.glb");      // change model to shot target
          
                clickSound.play();      // play click sound effect
                gunSound.play();        // play gun sound effect

                if(voiceToggle.checked == true){        // if voice overs is on

                    gunFactSound.currentTime = 0;       // reset voice over time
                    gunFactSound.play();                // play voice over
        
                }
            }
        });
    }
  });