function PopupTimer() {
    // timer function to hide voice over popup
    document.getElementById("Voice_Popup_ID").style.display="none";

  }

AFRAME.registerComponent('user-interface',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

       // initialize help buttons
       helpButton = document.getElementById('Button_Arctic_Instructions_ID');
       helpExitButton =document.getElementById('Help_Exit_Button_ID');

       // initialize settings buttons
       settingsButton =document.getElementById('Button_Arctic_Settings_ID'); 
       settingsExitButton =  document.getElementById('Settings_Exit_Button_ID');

       // initialize collect the seals buttons
       sealsPopup = document.getElementById('Seals_Popup_ID');
       sealsButton = document.getElementById('Seals_Button_ID');
       sealsExit = document.getElementById('Seals_Exit_Button_ID');
       sealInfoButton = document.getElementById('Info_Seal_Button_ID');

       // initialize settings toggle
       musicToggle =  document.getElementById('Music-Toggle');
       soundToggle = document.getElementById('Sound-Toggle');
       voiceToggle =document.getElementById('Voice-Toggle');

       // initialize ambient sounds
       pianoSound = document.querySelector('#piano_music');
       windSound = document.querySelector('#wind_sound');
       river = document.querySelector('#river');

       // initialize round text
       infoTitle = document.getElementById('Info_Title_ID');
       infoText = document.getElementById('Info_Text_ID');

       // initialize info buttons
       infoButton = document.getElementById('Info_Button_ID');
       infoUI = document.getElementById('Info_Popup_ID');
        
       // initialize fact buttons 
       factTitle = document.getElementById('Fact_Title_ID');
       factText = document.getElementById('Fact_Text_ID');
       factExitButton = document.getElementById('Fact_Exit_Button_ID');
       factUI = document.getElementById('Fact_Popup_ID');
       
       // initialize voice over buttons
       voiceUI = document.getElementById('Voice_Popup_ID');
       voiceExitButton = document.getElementById('Voice_Exit_Button_ID');

       // initialize menu voice over sounds
       helpDesktopTextSound = document.querySelector('#menu_instruction_desktop');
       helpMobileTextSound = document.querySelector('#menu_instruction_mobile');
       settingTextSound = document.querySelector('#menu_settings');

       begin = false;
       exit = false;

       voiceExitButton.addEventListener('click', ()=>{  // if voice exit button is clicked 

        voiceUI.style.display = "none"; // hide voice popup

      });

       factExitButton.addEventListener('click', ()=>{   // if fact exit button is clicked

        Screen_Overlay_ID.style.display = "none";   // hide screen overlay
        factUI.style.display = "none";              // hide fact popup

            if(voiceToggle.checked == true){    // if voice over is toggled 

                bigSound.pause();   // pause all sound effects
                cubSound.pause();
                foodSound.pause();
                huntSound.pause();
                smellSound.pause();
                swimSound.pause();
                threatSound.pause();
                marineSound.pause();

            }

        });
       
       sealInfoButton.addEventListener('click', ()=>{   // if collect the seals info button is clicked 

            Screen_Overlay_ID.style.display = "none";   // hide screen overlay
            factUI.style.display = "none";              // hide info popup

            if(voiceToggle.checked == true){        // if voice over is toggled 

                round1Sound.pause();    // pause all voice over
                round2Sound.pause();
                round3Sound.pause();
        
            }
 
        });

       sealsExit.addEventListener('click', ()=>{    // if collect the seals is exited

            sealsPopup.style.display = "none";          // hide seal popup
            Screen_Overlay_ID.style.display = "none";
            exit = true;
            exitSealTask();      // call exit seal function 

            if(voiceToggle.checked == true){    // if voice overs is toggled 

                if(deviceChoice == 1){      // if desktop is device

                    sealDesktopSound.pause();   // pause desktop menu voice over

                }else if(deviceChoice == 2){    // if mobile is device

                    sealMobileSound.pause();    // pause mobile menu voice over
                }

            }

        });

        sealsButton.addEventListener('click', ()=>{    // if collect the seals is started 

            begin = true;

            if(voiceToggle.checked == true){    // if voice over is toggled

                if(deviceChoice == 1){              // if desktop is device
  
                  sealDesktopSound.currentTime = 0;     // restart voice over
                  sealDesktopSound.play();              // play voice over
  
                }else if(deviceChoice == 2){        // if mobile is device
  
                  sealMobileSound.currentTime = 0;  // restart voice over
                  sealMobileSound.play();           // play voice over
                }
    
            }
    
        });
       
       infoButton.addEventListener('click', ()=>{   // if info button continnue is clicked

        Screen_Overlay_ID.style.display = "none";   // hide popup
        infoUI.style.display = "none";

        if(voiceToggle.checked == true){    // if voice overs is toggled

            pastSound.pause();      // pause voice overs
            presentSound.pause();
            futureSound.pause();

        }

        
        });


        helpButton.addEventListener('click', ()=>{      // if help button is clicked

            Screen_Overlay_ID.style.display = "block";      // display help popup
            Help_Popup_ID.style.display = "flex";
            click.play();                            // play click sound effect

            if(voiceToggle.checked == true){        // if voice over is toggled

                if(deviceChoice == 1){                      // if device is desktop

                    helpDesktopTextSound.currentTime = 0;   // restart desktop voice over
                    helpDesktopTextSound.play();            // play desktop voice over

                }else if(deviceChoice == 2){            // if device is mobile

                    helpMobileTextSound.currentTime = 0;    // restart mobile voice over
                    helpMobileTextSound.play();             // play mobile voice over

                }

            }
            
        });

        helpExitButton.addEventListener('click', ()=>{      // if help button is exited 

            Screen_Overlay_ID.style.display = "none";       // hide help popup
            Help_Popup_ID.style.display = "none";
            click.play();                           // play click sound effect

            if(voiceToggle.checked == true){        // if voice over is toggled

                if(deviceChoice == 1){              // if device is desktop

                    helpDesktopTextSound.pause();       // pause desktop voice over

                }else if(deviceChoice == 2){        // if device is mobile

                    helpMobileTextSound.pause();        // play mobile voice over
                }
    
            }

            
        });

        settingsButton.addEventListener('click', ()=>{      // if settings button is clicked

            Screen_Overlay_ID.style.display = "block";
            Settings_Popup_ID.style.display = "flex";       // show settings popup
            click.play();                                   // play click sound effect

            if(voiceToggle.checked == true){                // if voice over is toggled

                settingTextSound.currentTime = 0;           // restart voice over
                settingTextSound.play();                    // play voice over
    
            }

        });

        
        settingsExitButton.addEventListener('click', ()=>{      // if settings exit button is clicked 

            Screen_Overlay_ID.style.display = "none";       // hide settings popup
            Settings_Popup_ID.style.display = "none";

            if(voiceToggle.checked == true){        // if voice over is toggled

                settingTextSound.pause();           // pause voice over text
                
            }
            
        });

        setInterval(PopupTimer, 30000); // call function to show voice over text with a timer of 30 seconds

    },

    tick: function(){
        // tuck function to keep checking if settings toggles are on or off

        if(musicToggle.checked == false){   // if music toggle is off

            pianoSound.setAttribute('sound', 'volume', 0)   // turn music off

        }else{

            pianoSound.setAttribute('sound', 'volume', 2) // turn music on
        }

        if(soundToggle.checked == false){       // if sound effect toggle is on

            windSound.setAttribute('sound', 'volume', 0)    // turn sound effects off
            river.setAttribute('sound', 'volume', 0)


        }else{

            windSound.setAttribute('sound', 'volume', 2)    // turn sound effects on
            river.setAttribute('sound', 'volume', 2)
        }


        if(voiceToggle.checked == false){       // if voice over is off

            helpDesktopTextSound.volume = 0;        // turn off all voice overs
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

            pastSound.volume = 0;
            presentSound.volume = 0;
            futureSound.volume = 0;
                    
            round1Sound.volume = 0;
            round2Sound.volume = 0;
            round3Sound.volume = 0;
        
            sealDesktopSound.volume = 0;
            sealMobileSound.volume = 0;

        }else{

            helpDesktopTextSound.volume = 0.3;  // turn on all voice overs
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

            
            pastSound.volume = 0.3;
            presentSound.volume = 0.3;
            futureSound.volume = 0.3;

            round1Sound.volume = 0.3;
            round2Sound.volume = 0.3;
            round3Sound.volume = 0.3;
        
            sealDesktopSound.volume = 0.3;
            sealMobileSound.volume = 0.3;

        }


    }

});