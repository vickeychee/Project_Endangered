AFRAME.registerComponent('control-panel',{
    init: function() {

        panel = document.querySelector('#panel');
        factory = document.querySelector('#factory');
        road = document.querySelector('#road');
        apartment = document.querySelector('#apartment');

        player = document.querySelector('#player');

        playerPos = player.getAttribute('position');

        button1 = document.querySelector('#button1');
        button2 = document.querySelector('#button2');
        button3 = document.querySelector('#button3');
        button1Counter = 0;
        button2Counter = 0;
        button3Counter = 0;


        settlementSound = document.querySelector('#panel_settlements');
        linearSound = document.querySelector('#panel_linear');
        industrySound = document.querySelector('#panel_industry');


        button1.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
            clickSound.play();


            button1Counter ++;

            if (button1Counter === 1){
                apartment.setAttribute("visible",true);
                apartmentSound.play();


                infoTitle.innerHTML ="Human Settlements";
                infoText.innerHTML = "Human settlements, including houses and apartments, have impacted the grasslands environment where elephants live. As a result, about 70% of Asian elephants are now living outside of protected areas.";
          
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";
                button1.setAttribute("material", "color:#f750e0");

                

                    
                if(voiceToggle.checked == true){

                    settlementSound.currentTime = 0;
                    settlementSound.play();
        
                }
        
            }

            else if (button1Counter === 2){
                apartment.setAttribute("visible",false);
                button1Counter = 0;
                button1.setAttribute("material", "color:#af64a4");

            }
    
        });

        button2.addEventListener('click', ()=>{
            voiceUI.style.display = "none";
            clickSound.play();


            button2Counter ++;

            if (button2Counter === 1){
                road.setAttribute("visible",true);
                carSound.play();

                infoTitle.innerHTML ="Linear Infrastructure";
                infoText.innerHTML = "Linear infrastructures, including roads, railways lines, and canals, have serious effects on the grasslands habitat, which effects the Asian elephant. These infrastructures damage the Asian elephant population by blocking important migration routes.";
          
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";
                button2.setAttribute("material", "color:#f750e0");


                if(voiceToggle.checked == true){

                    linearSound.currentTime = 0;
                    linearSound.play();
        
                }
            }

            else if (button2Counter === 2){
                road.setAttribute("visible",false);
                button2Counter = 0;
                button2.setAttribute("material", "color:#af64a4");
            }
    

        });

        button3.addEventListener('click', ()=>{
            voiceUI.style.display = "none";
            clickSound.play();

            button3Counter ++;

            if (button3Counter === 1){
                factory.setAttribute("visible",true);
                factorySound.play();

                infoTitle.innerHTML ="Industry Developments";
                infoText.innerHTML = "Industry developments, including factories, warehouses, and plantations, have had major effects on the Asian elephant’s ecosystem. These developments have helped create fragmentation in the Asian elephant population.  This means that the population is broken into smaller groups, becoming more isolated.";
          
                infoUI.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";
                button3.setAttribute("material", "color:#f750e0");


                if(voiceToggle.checked == true){

                    industrySound.currentTime = 0;
                    industrySound.play();
        
                }
                
            }

            else if (button3Counter === 2){
                factory.setAttribute("visible",false);
                button3Counter = 0;
                button3.setAttribute("material", "color:#af64a4");
            }
    
    

        });


       
    }
  });