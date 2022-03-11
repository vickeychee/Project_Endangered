function PopupTimer() {
    document.getElementById("Voice_Popup_ID").style.display="none";
    console.log("cut");
  }


AFRAME.registerComponent('user-interface',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

       helpButton = document.getElementById('Button_Arctic_Instructions_ID');
       helpExitButton =document.getElementById('Help_Exit_Button_ID');

       settingsButton =document.getElementById('Button_Arctic_Settings_ID'); 
       settingsExitButton =  document.getElementById('Settings_Exit_Button_ID');


       sealsPopup = document.getElementById('Seals_Popup_ID');
       sealsButton = document.getElementById('Seals_Button_ID');
       sealsExit = document.getElementById('Seals_Exit_Button_ID');

       infoButton = document.getElementById('Info_Button_ID');

       musicToggle =  document.getElementById('Music-Toggle');
       soundToggle = document.getElementById('Sound-Toggle');
       voiceToggle =document.getElementById('Voice-Toggle'); 

       pianoSound = document.querySelector('#piano_music');
       windSound = document.querySelector('#wind_sound');

       river = document.querySelector('#river');

       infoTitle = document.getElementById('Info_Title_ID');
       infoText = document.getElementById('Info_Text_ID');
       infoButton = document.getElementById('Info_Button_ID');
       infoUI = document.getElementById('Info_Popup_ID');

       sealInfoButton = document.getElementById('Info_Seal_Button_ID');
    

       factTitle = document.getElementById('Fact_Title_ID');
       factText = document.getElementById('Fact_Text_ID');
       factExitButton = document.getElementById('Fact_Exit_Button_ID');
       factUI = document.getElementById('Fact_Popup_ID');

       voiceUI = document.getElementById('Voice_Popup_ID');
       voiceExitButton = document.getElementById('Voice_Exit_Button_ID');

       helpDesktopTextSound = document.querySelector('#menu_instruction_desktop');
       helpMobileTextSound = document.querySelector('#menu_instruction_mobile');
       settingTextSound = document.querySelector('#menu_settings');



       begin = false;
       exit = false;


       voiceExitButton.addEventListener('click', ()=>{

        voiceUI.style.display = "none";

      });

       factExitButton.addEventListener('click', ()=>{

        Screen_Overlay_ID.style.display = "none";
        factUI.style.display = "none";

            if(voiceToggle.checked == true){

                bigSound.pause();
                cubSound.pause();
                foodSound.pause();
                huntSound.pause();
                smellSound.pause();
                swimSound.pause();
                threatSound.pause();
                marineSound.pause();

            }

        });
       
       sealInfoButton.addEventListener('click', ()=>{

        Screen_Overlay_ID.style.display = "none";
        factUI.style.display = "none";
 
        });

       sealsExit.addEventListener('click', ()=>{

        sealsPopup.style.display = "none";
        Screen_Overlay_ID.style.display = "none";
        exit = true;
        exitSealTask();

        });

        sealsButton.addEventListener('click', ()=>{

            begin = true;
    
        });
       
       infoButton.addEventListener('click', ()=>{

        Screen_Overlay_ID.style.display = "none";
        infoUI.style.display = "none";

        

        
        });


        helpButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "block";
            Help_Popup_ID.style.display = "flex";
            click.play();

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
            click.play();

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
            click.play();

            if(voiceToggle.checked == true){

                settingTextSound.currentTime = 0;
                settingTextSound.play();
    
            }

        });

        
        settingsExitButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            Settings_Popup_ID.style.display = "none";

            if(voiceToggle.checked == true){

                settingTextSound.pause();
    
            }
            
        });

        setInterval(PopupTimer, 30000);

    },

    tick: function(){


        if(musicToggle.checked == false){

            pianoSound.setAttribute('sound', 'volume', 0)



        }else{

            pianoSound.setAttribute('sound', 'volume', 2)
        }

        if(soundToggle.checked == false){

            windSound.setAttribute('sound', 'volume', 0)
            river.setAttribute('sound', 'volume', 0)


        }else{

            windSound.setAttribute('sound', 'volume', 2)
            river.setAttribute('sound', 'volume', 2)
        }


        if(voiceToggle.checked == false){

            helpDesktopTextSound.volume = 0;
            helpMobileTextSound.volume = 0;
            settingTextSound.volume = 0;

            bigSound.volume = 0;
            cubSound.volume = 0;
            foodSound.volume = 0;
            huntSound.volume = 0;
            smellSound.volume = 0;
            swimSound.volume = 0;
            threatSound.volume = 0;
            marineSound.volume = 0;
                    

        }else{

            helpDesktopTextSound.volume = 0.3;
            helpMobileTextSound.volume = 0.3;
            settingTextSound.volume = 0.3;

            bigSound.volume = 0.3;
            cubSound.volume = 0.3;
            foodSound.volume = 0.3;
            huntSound.volume = 0.3;
            smellSound.volume = 0.3;
            swimSound.volume = 0.3;
            threatSound.volume = 0.3;
            marineSound.volume = 0.3;

        }


    }

});