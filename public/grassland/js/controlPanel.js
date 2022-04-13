AFRAME.registerComponent('control-panel',{
    init: function() {

        // initialize control panel building assets
        panel = document.querySelector('#panel');
        factory = document.querySelector('#factory');
        road = document.querySelector('#road');
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
        settlementSound = document.querySelector('#panel_settlements');
        linearSound = document.querySelector('#panel_linear');
        industrySound = document.querySelector('#panel_industry');


        // if control panel button 1 is pressed 
        button1.addEventListener('click', ()=>{

            voiceUI.style.display = "none";     // hide voice popup
            clickSound.play();                  // play click sound effect

            button1Counter ++;                  // increment button1 counter 

            if (button1Counter === 1){                      // if button1 pressed the first time

                apartment.setAttribute("visible",true);     // show apartment model
                apartmentSound.play();                      // play apartment sound effect

                infoTitle.innerHTML ="Human Settlements";           // change info popup text
                infoText.innerHTML = "Human settlements, including houses and apartments, have impacted the grasslands environment where elephants live. As a result, about 70% of Asian elephants are now living outside of protected areas.";
          
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";          //  display info popup
                button1.setAttribute("material", "color:#f750e0");  //  change button color to on
                    
                if(voiceToggle.checked == true){            // if voice overs is on

                    settlementSound.currentTime = 0;        // restart voice over
                    settlementSound.play();                 // play voice over
    
                }
            }

            else if (button1Counter === 2){                         // if button1 pressed the second time

                apartment.setAttribute("visible",false);            // hide appartment model
                button1Counter = 0;                                 // restart  button1 counter
                button1.setAttribute("material", "color:#af64a4");  // change button color to off

            }
    
        });

        // if control panel button 2 is pressed 
        button2.addEventListener('click', ()=>{     

            voiceUI.style.display = "none";         // hide voice popup
            clickSound.play();                      // play click sound effect

            button2Counter ++;                  // increment button2 counter

            if (button2Counter === 1){                  // if button2 pressed the first time
                road.setAttribute("visible",true);      // show road model
                carSound.play();                        // play car sound effect

                infoTitle.innerHTML ="Linear Infrastructure";       // change info popup text
                infoText.innerHTML = "Linear infrastructures, including roads, railways lines, and canals, have serious effects on the grasslands habitat, which effects the Asian elephant. These infrastructures damage the Asian elephant population by blocking important migration routes.";
          
                infoUI.style.display = "flex";                          //  display info popup
                Screen_Overlay_ID.style.display = "block";
                button2.setAttribute("material", "color:#f750e0");      //  change button color to on

                if(voiceToggle.checked == true){        // if voice overs is on

                    linearSound.currentTime = 0;        // restart voice over
                    linearSound.play();                 // play voice over
        
                }
            }

            else if (button2Counter === 2){                         // if button2 pressed the second time

                road.setAttribute("visible",false);                 // hide appartment model
                button2Counter = 0;                                 // restart button2 counter
                button2.setAttribute("material", "color:#af64a4");  // change button color to off
            }
    

        });

        // if control panel button 2 is pressed 
        button3.addEventListener('click', ()=>{         

            voiceUI.style.display = "none";             // hide voice popup
            clickSound.play();                          // play click sound effect

            button3Counter ++;                          // increment button3 counter

            if (button3Counter === 1){                      // if button3 pressed the first time

                factory.setAttribute("visible",true);       // show factory model
                factorySound.play();                        // play factory sound effect

                infoTitle.innerHTML ="Industry Developments";           // change info popup text
                infoText.innerHTML = "Industry developments, including factories, warehouses, and plantations, have had major effects on the Asian elephant’s ecosystem. These developments have helped create fragmentation in the Asian elephant population.  This means that the population is broken into smaller groups, becoming more isolated.";
          
                infoUI.style.display = "flex";                       //  display info popup
                Screen_Overlay_ID.style.display = "block";
                button3.setAttribute("material", "color:#f750e0");   //  change button color to on

                if(voiceToggle.checked == true){            // if voice overs is on

                    industrySound.currentTime = 0;          // restart voice over
                    industrySound.play();                   // play voice over
        
                }
                
            }

            else if (button3Counter === 2){                         // if button3 pressed the second time

                factory.setAttribute("visible",false);              // hide factory model
                button3Counter = 0;                                 // restart button3 counter
                button3.setAttribute("material", "color:#af64a4");  // change button color to off 
            }

        });

    }
  });