function PopupTimer() {
    document.getElementById("Voice_Popup_ID").style.display="none";
    console.log("voice popup timer ended");
  }

AFRAME.registerComponent('user-interface',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

       helpButton = document.getElementById('Button_Instructions_ID');
       helpExitButton =document.getElementById('Help_Exit_Button_ID');

       settingsButton =document.getElementById('Button_Settings_ID'); 
       settingsExitButton =  document.getElementById('Settings_Exit_Button_ID');

       infoButton = document.getElementById('Info_Button_ID');
       infoUI = document.getElementById('Info_Popup_ID');

       infoTitle = document.getElementById('Info_Title_ID');
       infoText = document.getElementById('Info_Text_ID');


       voiceUI = document.getElementById('Voice_Popup_ID');
       voiceExitButton = document.getElementById('Voice_Exit_Button_ID');

       musicToggle =  document.getElementById('Music-Toggle');
       soundToggle = document.getElementById('Sound-Toggle');
       voiceToggle =document.getElementById('Voice-Toggle');

       musicSound = document.querySelector('#music');
       waterSound = document.querySelector('#water');
       birdSound = document.querySelector('#bird');

       apartmentSound = document.querySelector('#apartment_sound');
       boardwalkSound = document.querySelector('#boardwalk_sound');
       tourismSound = document.querySelector('#tourism_sound');
       clickSound = document.querySelector('#click_sound');
       pickupSound = document.querySelector('#pickup_sound');

       
       helpDesktopTextSound = document.querySelector('#menu_instruction_desktop');
       helpMobileTextSound = document.querySelector('#menu_instruction_mobile');
       settingTextSound = document.querySelector('#menu_settings');
       




       helpButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "block";
            Help_Popup_ID.style.display = "flex"
            clickSound.play();


            if(voiceToggle.checked == true){

                if(deviceChoice == 1){

                    helpDesktopTextSound.currentTime = 0;
                    helpDesktopTextSound.play();

                }else if(deviceChoice == 2){

                    helpMobileTextSound.currentTime = 0;
                    helpMobileTextSound.play();

                }

            }

        
        });

        helpExitButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            Help_Popup_ID.style.display = "none";
            clickSound.play();

            if(voiceToggle.checked == true){

                if(deviceChoice == 1){

                    helpDesktopTextSound.pause();

                }else if(deviceChoice == 2){


                    helpMobileTextSound.pause();
                }
    
            }

            
        });


        settingsButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "block";
            Settings_Popup_ID.style.display = "flex";
            clickSound.play();

            if(voiceToggle.checked == true){

                settingTextSound.currentTime = 0;
                settingTextSound.play();
    
            }


        });

        
        settingsExitButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            Settings_Popup_ID.style.display = "none";
            clickSound.play();

                        
            if(voiceToggle.checked == true){

                settingTextSound.pause();
    
            }

            
        });

        infoButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            infoUI.style.display = "none";
            clickSound.play();


            if(voiceToggle.checked == true){

                coastalSound.pause();
                settlementSound.pause();
                tourismTextSound.pause();
    
            }

    
            
        });

        voiceExitButton.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
            clickSound.play();

        });


                
        setInterval(PopupTimer, 30000);


    },

    tick: function(){


        apartmentSound = document.querySelector('#apartment_sound');
        boardwalkSound = document.querySelector('#boardwalk_sound');
        tourismSound = document.querySelector('#tourism_sound');
        clickSound = document.querySelector('#click_sound');
        pickupSound = document.querySelector('#pickup_sound');

        if(musicToggle.checked == false){

            musicSound.setAttribute('sound', 'volume', 0)



        }else{

            musicSound.setAttribute('sound', 'volume', 8)
        }

        if(soundToggle.checked == false){

            waterSound.setAttribute('sound', 'volume', 0)
            birdSound.setAttribute('sound', 'volume', 0)

            apartmentSound.volume = 0;
            boardwalkSound.volume = 0;
            tourismSound.volume = 0;
            clickSound.volume = 0;
            pickupSound.volume = 0;


                    
   


        }else{

            waterSound.setAttribute('sound', 'volume', 8)
            birdSound.setAttribute('sound', 'volume', 8)

            apartmentSound.volume = 1;
            boardwalkSound.volume = 1;
            tourismSound.volume = 1;
            clickSound.volume = 1;
            pickupSound.volume = 1;

        }


        if(voiceToggle.checked == false){


            helpDesktopTextSound.volume = 0;
            helpMobileTextSound.volume = 0;
            settingTextSound.volume = 0;

            babySound.volume = 0;
            bigSound.volume = 0;
            eggSound.volume = 0;
            greenSound.volume = 0;
            homeSound.volume = 0;
            harvestSound.volume = 0;

            coastalSound.volume = 0;
            settlementSound.volume = 0;
            tourismTextSound.volume = 0;
            

        }else{

            helpDesktopTextSound.volume = 0.4;
            helpMobileTextSound.volume = 0.4;
            settingTextSound.volume = 0.4;

            babySound.volume = 0.4;
            bigSound.volume = 0.4;
            eggSound.volume = 0.4;
            greenSound.volume = 0.4;
            homeSound.volume = 0.4;
            harvestSound.volume = 0.4;

            coastalSound.volume = 0.4;
            settlementSound.volume = 0.4;
            tourismTextSound.volume = 0.4;
    

        }


    }

});