AFRAME.registerComponent('fact-task',{
    init: function() {

        // intitalize turtles
        turtle1 = document.querySelector('#turtle1');
        turtle2 = document.querySelector('#turtle2');
        turtle3 = document.querySelector('#turtle3');

        // intitalize baby turtles
        babyTurtle = document.querySelector('#babyTurtle');

        // intitalize eggs
        eggs = document.querySelector('#eggs');

        // intitalize fact UI popup
        factTitle = document.getElementById('Fact_Title_ID');
        factText = document.getElementById('Fact_Text_ID');
        factExitButton = document.getElementById('Fact_Exit_Button_ID');
        factUI = document.getElementById('Fact_Popup_ID');

        // intitalize fact voice overs
        babySound = document.querySelector('#fact_baby');
        bigSound = document.querySelector('#fact_big');
        eggSound = document.querySelector('#fact_eggs');
        greenSound = document.querySelector('#fact_green');
        homeSound = document.querySelector('#fact_home');
        harvestSound = document.querySelector('#fact_overharvest');

        // if fact exit button is clicked
        factExitButton.addEventListener('click', ()=>{
        
            Screen_Overlay_ID.style.display = "none";       // hide fact popup
            factUI.style.display = "none";      
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                babySound.pause();                          // pause all voice overs
                bigSound.pause();
                eggSound.pause();
                greenSound.pause();
                homeSound.pause();
                harvestSound.pause();
    
            }
      
        });

        // if turtle1 is clicked
        turtle1.addEventListener('click', ()=>{

            voiceUI.style.display = "none";                 // hide voice over popup

            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Really Big!";             // change fact popup text
            factText.innerHTML = "The green sea turtle is the second largest sea turtle. They can grow to be about one meter long and can weigh 300 to 350 pounds.";
      
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                bigSound.currentTime = 0;                   // reset voice over time
                bigSound.play();                            // play voice over
    
            }
        });

        // if turtle2 is clicked
        turtle2.addEventListener('click', ()=>{

            voiceUI.style.display = "none";                 // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Way Back Home";           // change fact popup text
            factText.innerHTML = "No matter how far across the ocean it is, female green sea turtles will always return back home to the beach where they were born to lay their own eggs.";
           
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                homeSound.currentTime = 0;                  // reset voice over time
                homeSound.play();                           // play voice over
    
            }
        });

        // if turtle3 is clicked
        turtle3.addEventListener('click', ()=>{

            voiceUI.style.display = "none";                 // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Green Skin";              // change fact popup text
            factText.innerHTML = "The green sea turtle got its name from the green-coloured shin it has. Their skin turns this colour due to their plant-based diet, which consists of seagrass and algae.";
           
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                greenSound.currentTime = 0;                 // reset voice over time
                greenSound.play();                          // play voice over
    
            }

        });


        // if baby turtles is clicked
        babyTurtle.addEventListener('click', ()=>{

            voiceUI.style.display = "none";                 // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";

            factTitle.innerHTML ="Baby Turtles!";           // change fact popup text
            factText.innerHTML = "After two months of an egg being laid, baby green sea turtles use a special “egg tooth” that allows them to break their shell. Once they break their shell they are fully hatched and can begin their journey to the ocean!";
            
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                babySound.currentTime = 0;                  // reset voice over time
                babySound.play();                           // play voice over
                
            }
        });

        
        // if eggs are clicked
        eggs.addEventListener('click', ()=>{

            voiceUI.style.display = "none";                 // hide voice over popup
        
            Screen_Overlay_ID.style.display = "block";      // display fact popup
            factUI.style.display = "flex";  

            factTitle.innerHTML ="Green Sea Turtle Eggs";   // change fact popup text
            factText.innerHTML = "One of the greatest risks green sea turtles face is the overharvesting of their eggs. Over time, this has made it difficult for the population to reproduce. Unfortunately, egg harvesting is still legal in some countries, which makes conservation efforts difficult.";
      
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice overs is on

                eggSound.currentTime = 0;                   // reset voice over time
                eggSound.play();                            // play voice over
    
            }
        });
    }
  });