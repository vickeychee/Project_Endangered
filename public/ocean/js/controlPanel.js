AFRAME.registerComponent('control-panel',{
    init: function() {

        // initialize control panel building assets
        panel = document.querySelector('#panel');
        umbrella = document.querySelector('#umbrella');
        ferris = document.querySelector('#ferris_wheel');
        boardwalk = document.querySelector('#boardwalk');
        apartment = document.querySelector('#apartment');

        // initialize player
        player = document.querySelector('#player');
        playerPos = player.getAttribute('position');

        // initialize control panel buttons
        button1 = document.querySelector('#button1');
        button2 = document.querySelector('#button2');
        button3 = document.querySelector('#button3');
        button1Counter = 0;
        button2Counter = 0;
        button3Counter = 0;

        // initialize sound effects
        coastalSound = document.querySelector('#panel_coastal');
        settlementSound = document.querySelector('#panel_settlement');
        tourismTextSound = document.querySelector('#panel_tourism');

        // if control panel button 1 is pressed 
        button1.addEventListener('click', ()=>{
            
            clickSound.play();      // play click sound effect
            button1Counter ++;      // increment button1 counter 

            if (button1Counter === 1){                              // if button1 pressed the first time
                voiceUI.style.display = "none";                     // hide voice popup
                apartment.setAttribute("visible",true);             // show apartment model
                button1.setAttribute("material", "color:#fd5a4e");  // change button color to on

                apartmentSound.play();                              // play apartment sound effect

                infoTitle.innerHTML ="Human Settlements";           // change info popup text
                infoText.innerHTML = "Human settlements, including beachfront houses and apartments, have impacted the ocean coast environment where green sea turtles live. This is because these buildings destroy the nesting beaches green sea turtles use. When these areas are ruined, it makes it more difficult for green sea turtles to find places to lay their eggs.";
            
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";          // display info popup

                if(voiceToggle.checked == true){                    // if voice overs is on

                    settlementSound.currentTime = 0;                // restart voice over
                    settlementSound.play();                         // play voice over
        
                }
            }

            else if (button1Counter === 2){                         // if button1 pressed the second time
                apartment.setAttribute("visible",false);            // hide appartment model
                button1Counter = 0;                                 // restart button1 counter
                button1.setAttribute("material", "color:#ff8880");  // change button color to off
            }
    
        });

        // if control panel button 2 is pressed 
        button2.addEventListener('click', ()=>{

            clickSound.play();          // play click sound effect
            button2Counter ++;          // increment button2 counter 

            if (button2Counter === 1){                                      // if button2 pressed the first time

                boardwalkSound.play();                                      // play boardwalk sound effect

                voiceUI.style.display = "none";                             // hide voice popup
                boardwalk.setAttribute("visible",true);                     // show boardwalk model    
                button2.setAttribute("material", "color:#fd5a4e");          // change button color to on

                infoTitle.innerHTML ="Coastal Developments";                // change info popup text
                infoText.innerHTML = "Coastal developments, including beachfront factories, roads, and seawalls, are one of the greatest threats to green sea turtles. Not only do they cause habitat loss on the beaches where the turtles lay their eggs, but developments such as factories also pollute the ocean’s seagrass beds, where turtles live.";
            
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";                  //  display info popup
     
                if(voiceToggle.checked == true){                            // if voice overs is on

                    coastalSound.currentTime = 0;                            // restart voice over
                    coastalSound.play();                                    // play voice over   
        
                }
            }

            else if (button2Counter === 2){                                 // if button2 pressed the second time
                boardwalk.setAttribute("visible",false);                    // hide boardwalk model
                button2Counter = 0;                                         // restart button2 counter
                button2.setAttribute("material", "color:#ff8880")           // change button color to off
            }
    

        });

        // if control panel button 3 is pressed 
        button3.addEventListener('click', ()=>{

            clickSound.play();                              // play click sound effect
            button3Counter ++;                              // increment button3 counter 

            if (button3Counter === 1){                      // if button3 pressed the first time

                tourismSound.play();                        // play tourism sound effect

                voiceUI.style.display = "none";             // hide voice popup
                ferris.setAttribute("visible",true);        // show ferris wheel model
                umbrella.setAttribute("visible",true);      // show umbrella model

                button3.setAttribute("material", "color:#fd5a4e");      // change button color to on


                infoTitle.innerHTML ="Tourism Industry";        // change info popup text
                infoText.innerHTML = "The tourism industry has caused an increase in human activity on the nesting beaches of the green sea turtle. This has resulted in important beaches being destroyed, and also an increase in pollution in the ocean.";
            
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";      // display info popup

                if(voiceToggle.checked == true){                // if voice overs is on

                    tourismTextSound.currentTime = 0;           // restart voice over
                    tourismTextSound.play();                    // play voice over
                    
                }
                
            }

            else if (button3Counter === 2){
                ferris.setAttribute("visible",false);                   // hide ferris wheel model
                umbrella.setAttribute("visible",false);                 // hide umbrella model
                button3Counter = 0;                                     // restart button3 counter
                button3.setAttribute("material", "color:#ff8880");      // change button color to off
            }
        });
    }
  });