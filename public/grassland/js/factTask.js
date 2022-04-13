AFRAME.registerComponent('fact-task',{
    init: function() {

        // intitalize fact UI popup
        factTitle = document.getElementById('Fact_Title_ID');
        factText = document.getElementById('Fact_Text_ID');
        factExitButton = document.getElementById('Fact_Exit_Button_ID');
        factUI = document.getElementById('Fact_Popup_ID');

        // intitalize elephants
        elephant1 = document.querySelector('#elephant1');
        elephant2 = document.querySelector('#elephant2');
        elephant3 = document.querySelector('#elephant3');
        elephant4 = document.querySelector('#elephant4');

        // intitalize fact voice overs
        communicationSound = document.querySelector('#fact_communication');
        herbivoreSound = document.querySelector('#fact_herbivores');
        lookSound = document.querySelector('#fact_look');
        tuskSound = document.querySelector('#fact_tusk');
       
        // if fact exit button is clicked
        factExitButton.addEventListener('click', ()=>{
                 
            Screen_Overlay_ID.style.display = "none";   // hide fact popup
            factUI.style.display = "none";
            clickSound.play();                  // play click sound effect

            if(voiceToggle.checked == true){        // if voice overs is on

                communicationSound.pause();     // pause all voice overs
                herbivoreSound.pause();
                lookSound.pause();
                tuskSound.pause();
    
            }
      
        });

        // if elephant1 is clicked
        elephant1.addEventListener('click', ()=>{

            voiceUI.style.display = "none";     // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Ivory Tusks";             // change fact popup text
            factText.innerHTML = "Asian elephants use their ivory tusks for many purposes. This includes digging, pulling trees out of the ground, and displaying.";
      
            clickSound.play();              // play click sound effect

            if(voiceToggle.checked == true){     // if voice overs is on

                tuskSound.currentTime = 0;      // reset voice over time
                tuskSound.play();               // play voice over
    
            }
        });

        // if elephant2 is clicked
        elephant2.addEventListener('click', ()=>{

            voiceUI.style.display = "none";             // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";  // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Communication";       // change fact popup text
            factText.innerHTML = "The Asian elephant communicates with other elephants using a low-frequency sound. They do this to communicate with other elephants in their herd or others outside of the herd. This sound is very strong and can travel up to 16 kilometers.";
      
            clickSound.play();          // play click sound effect

            if(voiceToggle.checked == true){        // if voice overs is on

                communicationSound.currentTime = 0;     // reset voice over time
                communicationSound.play();              // play voice over
    
            }
        });

        // if elephant3 is clicked
        elephant3.addEventListener('click', ()=>{

            voiceUI.style.display = "none";     // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Unique Look";             // change fact popup text
            factText.innerHTML = "There are two species of elephants that exist on Earth, the African elephant and the Asian elephant. It is easy to tell them apart due to the Asian elephant’s unique look. Asian elephants have much smaller ears, compared to African elephants. The Asian elephant also has one more toenail on each foot, compared to the African elephant.";
      
            clickSound.play();          // play click sound effect

            if(voiceToggle.checked == true){        // if voice overs is on

                lookSound.currentTime = 0;          // reset voice over time
                lookSound.play();                   // play voice over
    
            }
        });

        // if elephant4 is clicked
        elephant4.addEventListener('click', ()=>{

            voiceUI.style.display = "none";             // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Herbivores";              // change fact popup text
            factText.innerHTML = "The Asian elephant is a herbivore, meaning it only eats plants. They eat plants such as grass, fruits, vegetables, leaves, and bark. To collect their food, they use their trunks!";
      
            clickSound.play();                      // play click sound effect

            if(voiceToggle.checked == true){        // if voice overs is on

                herbivoreSound.currentTime = 0;     // reset voice over time
                herbivoreSound.play();               // play voice over
    
            }
        });
    }
  });