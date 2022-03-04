AFRAME.registerComponent('gun-task',{
    init: function() {

        gun = document.querySelector('#gun');

        targetTooltip = document.querySelector('#tooltip5');
        
        target = document.querySelector('#target');



        target.addEventListener('click', ()=>{

            if (objectSelectedID === "gun"){

                Screen_Overlay_ID.style.display = "block";
                factUI.style.display = "flex";
    
                factTitle.innerHTML ="Hunting Dangers";
                factText.innerHTML = "One of the major threats to whooping cranes is hunting. In the past, the whooping crane was hunted for its meat and feathers, which were used as decorations on hats and clothing. Now that the whooping crane is protected, they can no longer be hunted. However, accidental shootings are still a huge issue.";

                targetTooltip.setAttribute("visible",false);

                target.setAttribute('gltf-model', "/assets/target_shot.glb");
          
                clickSound.play();
                gunSound.play();
            }
        

        });

       
    }
  });