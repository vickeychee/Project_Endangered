AFRAME.registerComponent('fact-task',{
    init: function() {

    
        factTitle = document.getElementById('Fact_Title_ID');
        factText = document.getElementById('Fact_Text_ID');
        factExitButton = document.getElementById('Fact_Exit_Button_ID');
        factUI = document.getElementById('Fact_Popup_ID');

        elephant1 = document.querySelector('#elephant1');
        elephant2 = document.querySelector('#elephant2');
        elephant3 = document.querySelector('#elephant3');
        elephant4 = document.querySelector('#elephant4');


        communicationSound = document.querySelector('#fact_communication');
        herbivoreSound = document.querySelector('#fact_herbivores');
        lookSound = document.querySelector('#fact_look');
        tuskSound = document.querySelector('#fact_tusk');
       


        factExitButton.addEventListener('click', ()=>{
        
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "none";
            factUI.style.display = "none";
            clickSound.play();


            if(voiceToggle.checked == true){

                communicationSound.pause();
                herbivoreSound.pause();
                lookSound.pause();
                tuskSound.pause();
    
            }
      
        });



        elephant1.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Ivory Tusks";
            factText.innerHTML = "Asian elephants use their ivory tusks for many purposes. This includes digging, pulling trees out of the ground, and displaying.";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                tuskSound.currentTime = 0;
                tuskSound.play();
    
            }
        });

        elephant2.addEventListener('click', ()=>{
            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Communication";
            factText.innerHTML = "The Asian elephant communicates with other elephants using a low-frequency sound. They do this to communicate with other elephants in their herd or others outside of the herd. This sound is very strong and can travel up to 16 kilometers.";
      
            clickSound.play();

            
            if(voiceToggle.checked == true){

                communicationSound.currentTime = 0;
                communicationSound.play();
    
            }
        });

        elephant3.addEventListener('click', ()=>{
            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Unique Look";
            factText.innerHTML = "There are two species of elephants that exist on Earth, the African elephant and the Asian elephant. It is easy to tell them apart due to the Asian elephant’s unique look. Asian elephants have much smaller ears, compared to African elephants. The Asian elephant also has one more toenail on each foot, compared to the African elephant.";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                lookSound.currentTime = 0;
                lookSound.play();
    
            }
        });

        elephant4.addEventListener('click', ()=>{
            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Herbivores";
            factText.innerHTML = "The Asian elephant is a herbivore, meaning it only eats plants. They eat plants such as grass, fruits, vegetables, leaves, and bark. To collect their food, they use their trunks!";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                herbivoreSound.currentTime = 0;
                herbivoreSound.play();
    
            }
        });





       
    }
  });