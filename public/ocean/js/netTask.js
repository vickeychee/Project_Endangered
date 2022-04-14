AFRAME.registerComponent('net-task',{
    init: function() {


        // initialize net 
        net = document.querySelector('#net');

        // initialize water
        water =  document.querySelector('#river');

        // initialize tooltips
        netTooltip = document.querySelector('#tooltip1');
        waterTooltip = document.querySelector('#tooltip4');

        // initialize turtle boolean
        turtleFished = false;


        // if water is clicked
        water.addEventListener('click', ()=>{

            // if net is picked up
            if(objectSelectedID === "net"){

                voiceUI.style.display = "none";                                 // hide voice over popup
                net.setAttribute('gltf-model', "./assets/turtle_net.glb");      // change net model to turtle with net model
                waterTooltip.setAttribute("visible",false);                     // hide water tooltip

                infoTitle.innerHTML ="Overharvesting";                          // change fact popup text
                infoText.innerHTML = "All around the world, green sea turtles are being hunted at an unsustainable rate. They are hunted for food and also for the trade of their body parts. The green sea turtle’s eggs are also being overharvested. Both of these factors have made it difficult for the green sea turtle to grow, and this continues to put this animal at risk of extinction.";
            
                infoUI.style.display = "flex";                                  // display fact popup
                Screen_Overlay_ID.style.display = "block";

                clickSound.play();                                              // play click sound effect
                turtleFished = true;                                            // turtle boolean is set to true

            }
     });
    }
  });