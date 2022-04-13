function PopupTimer() {
    // timer function to hide voice over popup
    document.getElementById("Voice_Popup_ID").style.display="none";
    
  }

AFRAME.registerComponent('user-interface',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

        // initialize help buttons
        helpButton = document.getElementById('Button_Instructions_ID');
        helpExitButton =document.getElementById('Help_Exit_Button_ID');

        // initialize settings buttons
        settingsButton =document.getElementById('Button_Settings_ID'); 
        settingsExitButton =  document.getElementById('Settings_Exit_Button_ID');

        // initialize info buttons
        infoButton = document.getElementById('Info_Button_ID');
        infoUI = document.getElementById('Info_Popup_ID');

        // initialize round text
        infoTitle = document.getElementById('Info_Title_ID');
        infoText = document.getElementById('Info_Text_ID');

        // initialize voice over buttons
        voiceUI = document.getElementById('Voice_Popup_ID');
        voiceExitButton = document.getElementById('Voice_Exit_Button_ID');

        // initialize settings toggle
        musicToggle =  document.getElementById('Music-Toggle');
        soundToggle = document.getElementById('Sound-Toggle');
        voiceToggle =document.getElementById('Voice-Toggle'); 

        // initialize ambient sounds
        musicSound = document.querySelector('#music');
        windSound = document.querySelector('#wind');
        birdSound = document.querySelector('#bird');

        // initialize sound effects 
        clickSound = document.querySelector('#click_sound');
        apartmentSound = document.querySelector('#apartment_sound');
        carSound = document.querySelector('#car_sound');
        factorySound = document.querySelector('#factory_sound');

        // initialize menu voice over sounds
        helpDesktopTextSound = document.querySelector('#menu_instruction_desktop');
        helpMobileTextSound = document.querySelector('#menu_instruction_mobile');
        settingTextSound = document.querySelector('#menu_settings');
       

        helpButton.addEventListener('click', ()=>{           // if help button is clicked

            Screen_Overlay_ID.style.display = "block";          // display help popup
            Help_Popup_ID.style.display = "flex";
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice over is toggled

                if(deviceChoice == 1){                      // if device is desktop

                    helpDesktopTextSound.currentTime = 0;       // restart desktop voice over
                    helpDesktopTextSound.play();                // play desktop voice over

                }else if(deviceChoice == 2){                 // if device is mobile

                    helpMobileTextSound.currentTime = 0;    // restart mobile voice over
                    helpMobileTextSound.play();             // play mobile voice over

                }
            }
        });

        helpExitButton.addEventListener('click', ()=>{      // if help button is exited 

            Screen_Overlay_ID.style.display = "none";       // hide help popup
            Help_Popup_ID.style.display = "none";
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice over is toggled

                if(deviceChoice == 1){                      // if device is desktop

                    helpDesktopTextSound.pause();           // pause desktop voice over

                }else if(deviceChoice == 2){                // if device is mobile

                    helpMobileTextSound.pause();            // play mobile voice over
                }
            }      
        });


        settingsButton.addEventListener('click', ()=>{      // if settings button is clicked

            Screen_Overlay_ID.style.display = "block";
            Settings_Popup_ID.style.display = "flex";       // show settings popup
            clickSound.play();                              // play click sound effect

            if(voiceToggle.checked == true){                // if voice over is toggled

                settingTextSound.currentTime = 0;           // restart voice over
                settingTextSound.play();                    // play voice over
                
            }

        });

        
        settingsExitButton.addEventListener('click', ()=>{       // if settings exit button is clicked 

            Screen_Overlay_ID.style.display = "none";           // hide settings popup
            Settings_Popup_ID.style.display = "none";
            clickSound.play();

            if(voiceToggle.checked == true){            // if voice over is toggled

                settingTextSound.pause();               // pause voice over text
    
            }
   
        });


        infoButton.addEventListener('click', ()=>{      // if info button continnue is clicked

            Screen_Overlay_ID.style.display = "none";   // hide popup
            infoUI.style.display = "none";
            clickSound.play();

            if(voiceToggle.checked == true){        // if voice overs is toggled

                settlementSound.pause();             // pause voice overs
                linearSound.pause();
                industrySound.pause();
    
            }
            
        });


        voiceExitButton.addEventListener('click', ()=>{     // if voice exit button is clicked

            voiceUI.style.display = "none";                 // hide voice popup
            clickSound.play();                              // play click sound effect

        });

                
        setInterval(PopupTimer, 30000);   // call function to show voice over text with a timer of 30 seconds


    },

    tick: function(){

        // tuck function to keep checking if settings toggles are on or off

        if(musicToggle.checked == false){    // if music toggle is off

            musicSound.setAttribute('sound', 'volume', 0)   // turn music off

        }else{

            musicSound.setAttribute('sound', 'volume', 3)   // turn music on
        }

        if(soundToggle.checked == false){                   // if sound effect toggle is on

            windSound.setAttribute('sound', 'volume', 0)    // turn sound effects off
            birdSound.setAttribute('sound', 'volume', 0)

            carSound.volume = 0;
            apartmentSound.volume = 0;
            factorySound.volume = 0;
            clickSound.volume = 0;
            

        }else{

            windSound.setAttribute('sound', 'volume', 2)          // turn sound effects on
            birdSound.setAttribute('sound', 'volume', 0.1)

            carSound.volume = 1;
            apartmentSound.volume = 1;
            factorySound.volume = 1;
            clickSound.volume = 1;

        }

        
        if(voiceToggle.checked == false){       // if voice over is off

            helpDesktopTextSound.volume = 0;    // turn off all voice overs
            helpMobileTextSound.volume = 0;
            settingTextSound.volume = 0;

            communicationSound.volume = 0;
            herbivoreSound.volume = 0;
            lookSound.volume = 0;
            tuskSound.volume = 0;

            settlementSound.volume = 0;
            linearSound.volume = 0;
            industrySound.volume = 0;
            

        }else{

            helpDesktopTextSound.volume = 0.3;      // turn on all voice overs
            helpMobileTextSound.volume = 0.3;
            settingTextSound.volume = 0.3;

            communicationSound.volume = 0.3;
            herbivoreSound.volume = 0.3;
            lookSound.volume = 0.3;
            tuskSound.volume = 0.3;

            settlementSound.volume = 0.3;
            linearSound.volume = 0.3;
            industrySound.volume = 0.3;
    

        }
    }
});