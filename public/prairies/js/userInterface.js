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

       // initialize voice over buttons
       voiceUI = document.getElementById('Voice_Popup_ID');
       voiceExitButton = document.getElementById('Voice_Exit_Button_ID');

       // initialize water the crops UI elements
       bucketPopup = document.getElementById('Bucket_Popup_ID');
       bucketButton = document.getElementById('Bucket_Button_ID');
       bucketExit = document.getElementById('Bucket_Exit_Button_ID');

       // initialize info popups
       infoButton = document.getElementById('Info_Button_ID');
       infoUI = document.getElementById('Info_Popup_ID');

       // initialize menu reset and exit buttons 
       resetButton = document.getElementById('Button_Reset_ID');
       exitButton = document.getElementById('Button_Exit_ID');

       // initialize settings toggle
       musicToggle =  document.getElementById('Music-Toggle');
       soundToggle = document.getElementById('Sound-Toggle');
       voiceToggle =document.getElementById('Voice-Toggle'); 

       // initialize ambient sounds
       marshSound = document.querySelector('#marsh');
       riverSound = document.querySelector('#river');
       musicSound = document.querySelector('#music');
       
       // initialize sound effects
       clickSound = document.querySelector('#click_sound');
       splashSound = document.querySelector('#splash_sound');
       gunSound = document.querySelector('#gun_sound');
       pickupSound = document.querySelector('#pickup_sound');

       // initialize sound effect volume levels
       pickupSound.volume = 0.3;
       splashSound.volume = 0.3;
       gunSound.volume = 0.8;
       clickSound.volume = 1;

       // initialize menu voice over sounds
       helpDesktopTextSound = document.querySelector('#menu_instruction_desktop');
       helpMobileTextSound = document.querySelector('#menu_instruction_mobile');
       settingTextSound = document.querySelector('#menu_settings');


        // if reset button is clicked
        resetButton.addEventListener('click', ()=>{
            
            resetBucketTask();      // call reset water the crops function
            clickSound.play();      // play click sound effect
    
        });

        // if exit button is clicked
        exitButton.addEventListener('click', ()=>{
                
            exitBucket();           // call exit water the crops function
            player.setAttribute('position', {x: -0.804, y:1.3, z: 1.57});   // reset player position
            clickSound.play();      // play click sound effect
    
        });


        // if voice exit button is clicked 
        voiceExitButton.addEventListener('click', ()=>{ 

            voiceUI.style.display = "none";     // hide voice popup
            clickSound.play();                  // play click sound effect

        });


        helpButton.addEventListener('click', ()=>{              // if help button is clicked

            Screen_Overlay_ID.style.display = "block";          // display help popup
            Help_Popup_ID.style.display = "flex";
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                    // if voice over is toggled

                if(deviceChoice == 1){                          // if device is desktop

                    helpDesktopTextSound.currentTime = 0;       // restart desktop voice over
                    helpDesktopTextSound.play();                // play desktop voice over

                }else if(deviceChoice == 2){                    // if device is mobile

                    helpMobileTextSound.currentTime = 0;        // restart mobile voice over
                    helpMobileTextSound.play();                 // play mobile voice over

                }
            }
        });

        helpExitButton.addEventListener('click', ()=>{          // if help button is exited 

            Screen_Overlay_ID.style.display = "none";           // hide help popup
            Help_Popup_ID.style.display = "none";
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                    // if voice over is toggled

                if(deviceChoice == 1){                          // if device is desktop

                    helpDesktopTextSound.pause();               // pause desktop voice over

                }else if(deviceChoice == 2){                    // if device is mobile

                    helpMobileTextSound.pause();                // play mobile voice over
                }
            }  
        });


        settingsButton.addEventListener('click', ()=>{          // if settings button is clicked

            Screen_Overlay_ID.style.display = "block";          // show settings popup
            Settings_Popup_ID.style.display = "flex";
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                    // if voice over is toggled

                settingTextSound.currentTime = 0;                // restart voice over
                settingTextSound.play();                         // play voice over

            }
        });

        
        settingsExitButton.addEventListener('click', ()=>{      // if settings exit button is clicked 

            Screen_Overlay_ID.style.display = "none";           // hide settings popup
            Settings_Popup_ID.style.display = "none";
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                    // if voice over is toggled

                settingTextSound.pause();                       // pause voice over text
    
            }
        });


        bucketExit.addEventListener('click', ()=>{                  // if water the crops exit button is clicked

            Screen_Overlay_ID.style.display = "none";               // hide water the crops insturction popup
            bucketPopup.style.display = "none";
            player.setAttribute('position', {x: -0.804, y:1.3, z: 1.57});       // reset player position
            checkDistance_Bool = true;
            clickSound.play();                      // play click sound effect

            if(voiceToggle.checked == true){        // if voice over is toggled

                if(deviceChoice == 1){                  // if device choice is desktop

                    bucketDesktopSound.pause();         // pause voice over

                }else if(deviceChoice == 2){            // if device choice is mobile

                    bucketMobileSound.pause();          // pause voice over
                }   
            }
            
        });


        bucketButton.addEventListener('click', ()=>{        // if water the crops started 

            Screen_Overlay_ID.style.display = "none";       // hide bucket instructions popup
            bucketPopup.style.display = "none";
            bucketTask = true;
            clickSound.play();                       // play click sound effect

            if(voiceToggle.checked == true){        // if voice over is toggled

                if(deviceChoice == 1){              // if device choice is desktop

                    bucketDesktopSound.pause();     // pause voice over

                }else if(deviceChoice == 2){        // if device choice is mobile

                    bucketMobileSound.pause();      // pause voice over
                }
            }
        });

        infoButton.addEventListener('click', ()=>{          // if info button is clicked

            Screen_Overlay_ID.style.display = "none";        // hide popup
            infoUI.style.display = "none";

            Round_Title_ID.style.display = "none";              // hide round title
            Round_Text_ID.style.display = "none";               // hide round text

            cropTooltip.setAttribute("visible",false);          // hide tooltip

            exitBucket();                                       // call function to exit water the crops activity
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                // if voice over is toggled

                bucketEndSound.pause();                 // pause voice over
    
            }
            
        });

        setInterval(PopupTimer, 30000);         // call function to show voice over text with a timer of 30 seconds

    },

    tick: function(){
        // tick function to keep checking if settings toggles are on or off

        if(musicToggle.checked == false){                       // if music toggle is off

            musicSound.setAttribute('sound', 'volume', 0)       // turn music off

        }else{

            musicSound.setAttribute('sound', 'volume', 2)       // turn music on
        }

        if(soundToggle.checked == false){                       // if sound effect toggle is on

            marshSound.setAttribute('sound', 'volume', 0)       // turn sound effects off
            riverSound.setAttribute('sound', 'volume', 0)

            pickupSound.volume = 0;
            splashSound.volume = 0;
            gunSound.volume = 0;
            clickSound.volume = 0;

        }else{

            marshSound.setAttribute('sound', 'volume', 2)       // turn sound effects on
            riverSound.setAttribute('sound', 'volume', 2)

            pickupSound.volume = 0.3;
            splashSound.volume = 0.3;
            gunSound.volume = 0.8;
            clickSound.volume = 1;
        }

        if(voiceToggle.checked == false){           // if voice over is off

            helpDesktopTextSound.volume = 0;        // turn off all voice overs    
            helpMobileTextSound.volume = 0;
            settingTextSound.volume = 0;

            bigSound.volume = 0;
            populationSound.volume = 0;
            rareSound.volume = 0;
            gunFactSound.volume = 0;

            bucketDesktopSound.volume = 0;
            bucketMobileSound.volume = 0;
            bucketEndSound.volume = 0;
            
        }else{

            helpDesktopTextSound.volume = 0.3;      // turn on all voice overs
            helpMobileTextSound.volume = 0.3;
            settingTextSound.volume = 0.3;

            bigSound.volume = 0.3;
            populationSound.volume = 0.3;
            rareSound.volume = 0.3;
            gunFactSound.volume = 0.3;

            bucketDesktopSound.volume = 0.3;
            bucketMobileSound.volume = 0.3;
            bucketEndSound.volume = 0.3;

        }
    }
});