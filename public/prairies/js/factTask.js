AFRAME.registerComponent('fact-task',{
    init: function() {

        // intitalize fact UI popup
        factTitle = document.getElementById('Fact_Title_ID');
        factText = document.getElementById('Fact_Text_ID');
        factExitButton = document.getElementById('Fact_Exit_Button_ID');
        factUI = document.getElementById('Fact_Popup_ID');

        // intitalize cranes
        crane1 = document.querySelector('#crane1');
        crane2 = document.querySelector('#crane2');
        crane3 = document.querySelector('#crane3');

        // intitalize fact voice overs
        bigSound = document.querySelector('#fact_big');
        populationSound = document.querySelector('#fact_population');
        rareSound = document.querySelector('#fact_rare');
        gunFactSound = document.querySelector('#fact_gun');
       
        // if fact exit button is clicked
        factExitButton.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "none";   // hide fact popup
            factUI.style.display = "none";
            clickSound.play();                          // play click sound effect

            if(voiceToggle.checked == true){            // if voice overs is on

                bigSound.pause();                       // pause all voice overs
                populationSound.pause();
                rareSound.pause();
                gunFactSound.pause();
    
            }
      
        });

        // if crane1 is clicked
        crane1.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Big Bird!";               // change fact popup text
            factText.innerHTML = "The whooping crane is the tallest bird in North America. This bird can be up to 5 feet tall, with a wingspan of 7 feet.";
      
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                bigSound.currentTime = 0;                   // reset voice over time
                bigSound.play();                            // play voice over
    
            }
        });

        // if crane2 is clicked
        crane2.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Super Rare";              // change fact popup text
            factText.innerHTML = "The world has 15 crane species. Out of all of these cranes, the whooping crane is the rarest one! This is mainly due to how small the population is due to it being endangered.";
      
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                rareSound.currentTime = 0;                  // reset voice over time
                rareSound.play();                           // play voice over

            }
        });

        // if crane3 is clicked
        crane3.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "block";          // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Last Natural Population";     // change fact popup text
            factText.innerHTML = "The last natural population of whooping cranes migrates from western Canada to Texas. All other whooping crane populations have been reintroduced through conservation efforts.";
      
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                    // if voice overs is on

                populationSound.currentTime = 0;                // reset voice over time
                populationSound.play();                         // play voice over
    
            }
        });
    }
  });