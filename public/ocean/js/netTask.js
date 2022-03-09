AFRAME.registerComponent('net-task',{
    init: function() {

        net = document.querySelector('#net');
        water =  document.querySelector('#river');
        netTooltip = document.querySelector('#tooltip1');
        waterTooltip = document.querySelector('#tooltip4');


        water.addEventListener('click', ()=>{



            if(objectSelectedID === "net"){
                net.setAttribute('gltf-model', "/assets/turtle_net.glb");
                waterTooltip.setAttribute("visible",false);


                infoTitle.innerHTML ="Overharvesting";
                infoText.innerHTML = "All around the world, green sea turtles are being hunted at an unsustainable rate. They are hunted for food and also for the trade of their body parts. The green sea turtle’s eggs are also being overharvested. Both of these factors have made it difficult for the green sea turtle to grow, and this continues to put this animal at risk of extinction.";
            
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";
            }


        
     });

       
    }
  });