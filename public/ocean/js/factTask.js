AFRAME.registerComponent('fact-task',{
    init: function() {

        turtle1 = document.querySelector('#turtle1');
        turtle2 = document.querySelector('#turtle2');
        turtle3 = document.querySelector('#turtle3');

        babyTurtle = document.querySelector('#babyTurtle');
        eggs = document.querySelector('#eggs');

        factTitle = document.getElementById('Fact_Title_ID');
        factText = document.getElementById('Fact_Text_ID');
        factExitButton = document.getElementById('Fact_Exit_Button_ID');
        factUI = document.getElementById('Fact_Popup_ID');

        babySound = document.querySelector('#fact_baby');
        bigSound = document.querySelector('#fact_big');
        eggSound = document.querySelector('#fact_eggs');
        greenSound = document.querySelector('#fact_green');
        homeSound = document.querySelector('#fact_home');
        harvestSound = document.querySelector('#fact_overharvest');

        
        factExitButton.addEventListener('click', ()=>{
        
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "none";
            factUI.style.display = "none";
            clickSound.play();

            if(voiceToggle.checked == true){

                babySound.pause();
                bigSound.pause();
                eggSound.pause();
                greenSound.pause();
                homeSound.pause();
                harvestSound.pause();
    
            }
      
        });



        turtle1.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Really Big!";
            factText.innerHTML = "The green sea turtle is the second largest sea turtle. They can grow to be about one meter long and can weigh 300 to 350 pounds.";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                bigSound.currentTime = 0;
                bigSound.play();
    
            }

        });

        turtle2.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Way Back Home";
            factText.innerHTML = "No matter how far across the ocean it is, female green sea turtles will always return back home to the beach where they were born to lay their own eggs.";
            clickSound.play();

            if(voiceToggle.checked == true){

                homeSound.currentTime = 0;
                homeSound.play();
    
            }

        });


        turtle3.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Green Skin";
            factText.innerHTML = "The green sea turtle got its name from the green-coloured shin it has. Their skin turns this colour due to their plant-based diet, which consists of seagrass and algae.";
            clickSound.play();

            if(voiceToggle.checked == true){

                greenSound.currentTime = 0;
                greenSound.play();
    
            }

        });


        babyTurtle.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Baby Turtles!";
            factText.innerHTML = "After two months of an egg being laid, baby green sea turtles use a special “egg tooth” that allows them to break their shell. Once they break their shell they are fully hatched and can begin their journey to the ocean!";
            clickSound.play();

            if(voiceToggle.checked == true){

                babySound.currentTime = 0;
                babySound.play();
    
            }

        });

        
        eggs.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
        
            Screen_Overlay_ID.style.display = "block";
            factUI.style.display = "flex";

            factTitle.innerHTML ="Green Sea Turtle Eggs";
            factText.innerHTML = "One of the greatest risks green sea turtles face is the overharvesting of their eggs. Over time, this has made it difficult for the population to reproduce. Unfortunately, egg harvesting is still legal in some countries, which makes conservation efforts difficult.";
      
            clickSound.play();

            if(voiceToggle.checked == true){

                eggSound.currentTime = 0;
                eggSound.play();
    
            }
        });

       
    }
  });