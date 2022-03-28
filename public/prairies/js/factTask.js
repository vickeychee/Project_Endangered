AFRAME.registerComponent('fact-task',{
    init: function() {

    
        factTitle = document.getElementById('Fact_Title_ID');
        factText = document.getElementById('Fact_Text_ID');
        factExitButton = document.getElementById('Fact_Exit_Button_ID');
        factUI = document.getElementById('Fact_Popup_ID');

        crane1 = document.querySelector('#crane1');
        crane2 = document.querySelector('#crane2');
        crane3 = document.querySelector('#crane3');

        bigSound = document.querySelector('#fact_big');
        populationSound = document.querySelector('#fact_population');
        rareSound = document.querySelector('#fact_rare');
        gunFactSound = document.querySelector('#fact_gun');
       


        factExitButton.addEventListener('click', ()=>{
        
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "none";
            factUI.style.display = "none";
            clickSound.play();

            if(voiceToggle.checked == true){

                bigSound.pause();
                populationSound.pause();
                rareSound.pause();
                gunFactSound.pause();
    
            }
      
        });


        crane1.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Big Bird!";
            factText.innerHTML = "The whooping crane is the tallest bird in North America. This bird can be up to 5 feet tall, with a wingspan of 7 feet.";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                bigSound.currentTime = 0;
                bigSound.play();
    
            }
        });

        crane2.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Super Rare";
            factText.innerHTML = "The world has 15 crane species. Out of all of these cranes, the whooping crane is the rarest one! This is mainly due to how small the population is due to it being endangered.";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                rareSound.currentTime = 0;
                rareSound.play();
    
            }
        });

        crane3.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Last Natural Population";
            factText.innerHTML = "The last natural population of whooping cranes migrates from western Canada to Texas. All other whooping crane populations have been reintroduced through conservation efforts.";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                populationSound.currentTime = 0;
                populationSound.play();
    
            }
        });


       
    }
  });