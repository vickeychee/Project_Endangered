AFRAME.registerComponent('control-panel',{
    init: function() {

        panel = document.querySelector('#panel');
        umbrella = document.querySelector('#umbrella');
        ferris = document.querySelector('#ferris_wheel');
        boardwalk = document.querySelector('#boardwalk');
        apartment = document.querySelector('#apartment');

        player = document.querySelector('#player');

        playerPos = player.getAttribute('position');

        button1 = document.querySelector('#button1');
        button2 = document.querySelector('#button2');
        button3 = document.querySelector('#button3');
        button1Counter = 0;
        button2Counter = 0;
        button3Counter = 0;

        coastalSound = document.querySelector('#panel_coastal');
        settlementSound = document.querySelector('#panel_settlement');
        tourismTextSound = document.querySelector('#panel_tourism');


        button1.addEventListener('click', ()=>{
            
            clickSound.play();

            button1Counter ++;

            if (button1Counter === 1){
                voiceUI.style.display = "none";
                apartment.setAttribute("visible",true);
                button1.setAttribute("material", "color:#fd5a4e");

                apartmentSound.play();

                infoTitle.innerHTML ="Human Settlements";
                infoText.innerHTML = "Human settlements, including beachfront houses and apartments, have impacted the ocean coast environment where green sea turtles live. This is because these buildings destroy the nesting beaches green sea turtles use. When these areas are ruined, it makes it more difficult for green sea turtles to find places to lay their eggs.";
            
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";

                if(voiceToggle.checked == true){

                    settlementSound.currentTime = 0;
                    settlementSound.play();
        
                }
            }

            else if (button1Counter === 2){
                apartment.setAttribute("visible",false);
                button1Counter = 0;
                button1.setAttribute("material", "color:#ff8880");
            }
    
        });

        button2.addEventListener('click', ()=>{

            clickSound.play();

            button2Counter ++;

            if (button2Counter === 1){

                boardwalkSound.play();

                voiceUI.style.display = "none";
                boardwalk.setAttribute("visible",true);
                button2.setAttribute("material", "color:#fd5a4e");

                infoTitle.innerHTML ="Coastal Developments";
                infoText.innerHTML = "Coastal developments, including beachfront factories, roads, and seawalls, are one of the greatest threats to green sea turtles. Not only do they cause habitat loss on the beaches where the turtles lay their eggs, but developments such as factories also pollute the ocean’s seagrass beds, where turtles live.";
            
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";

                
                if(voiceToggle.checked == true){

                    coastalSound.currentTime = 0;
                    coastalSound.play();
        
                }
            }

            else if (button2Counter === 2){
                boardwalk.setAttribute("visible",false);
                button2Counter = 0;
                button2.setAttribute("material", "color:#ff8880");
            }
    

        });

        button3.addEventListener('click', ()=>{

            clickSound.play();

            button3Counter ++;

            if (button3Counter === 1){

                tourismSound.play();

                voiceUI.style.display = "none";
                ferris.setAttribute("visible",true);
                umbrella.setAttribute("visible",true);

                button3.setAttribute("material", "color:#fd5a4e");


                infoTitle.innerHTML ="Tourism Industry";
                infoText.innerHTML = "The tourism industry has caused an increase in human activity on the nesting beaches of the green sea turtle. This has resulted in important beaches being destroyed, and also an increase in pollution in the ocean.";
            
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";

                
                if(voiceToggle.checked == true){

                    tourismTextSound.currentTime = 0;
                    tourismTextSound.play();
        
                }
                
            }

            else if (button3Counter === 2){
                ferris.setAttribute("visible",false);
                umbrella.setAttribute("visible",false);


                button3Counter = 0;
                button3.setAttribute("material", "color:#ff8880");
            }
    
    

        });


       
    }
  });