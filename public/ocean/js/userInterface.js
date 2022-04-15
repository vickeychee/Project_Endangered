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

       // initialize voice over buttons
       voiceUI = document.getElementById('Voice_Popup_ID');
       voiceExitButton = document.getElementById('Voice_Exit_Button_ID');

       // initialize settings toggle
       musicToggle =  document.getElementById('Music-Toggle');
       soundToggle = document.getElementById('Sound-Toggle');
       voiceToggle =document.getElementById('Voice-Toggle');

       // initialize ambient sounds
       musicSound = document.querySelector('#music');
       waterSound = document.querySelector('#water');
       birdSound = document.querySelector('#bird');

       // initialize sound effects
       apartmentSound = document.querySelector('#apartment_sound');
       boardwalkSound = document.querySelector('#boardwalk_sound');
       tourismSound = document.querySelector('#tourism_sound');
       clickSound = document.querySelector('#click_sound');
       pickupSound = document.querySelector('#pickup_sound');

       // initialize menu voice over sounds
       helpDesktopTextSound = document.querySelector('#menu_instruction_desktop');
       helpMobileTextSound = document.querySelector('#menu_instruction_mobile');
       settingTextSound = document.querySelector('#menu_settings');
       

       helpButton.addEventListener('click', ()=>{               // if help button is clicked

            Screen_Overlay_ID.style.display = "block";          // display help popup
            Help_Popup_ID.style.display = "flex"
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


        settingsButton.addEventListener('click', ()=>{           // if settings button is clicked

            Screen_Overlay_ID.style.display = "block";          // show settings popup
            Settings_Popup_ID.style.display = "flex";
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                    // if voice over is toggled

                settingTextSound.currentTime = 0;               // restart voice over
                settingTextSound.play();                        // play voice over
    
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

        infoButton.addEventListener('click', ()=>{              // if info button continue is clicked

            Screen_Overlay_ID.style.display = "none";           // hide popup
            infoUI.style.display = "none";
            clickSound.play();                                  // play click sound effect

            if(voiceToggle.checked == true){                    // if voice overs is toggled

                coastalSound.pause();                           // pause voice overs
                settlementSound.pause();
                tourismTextSound.pause();
    
            }

            if (turtleFished === true){                         // if turtle is fished

                context.el.sceneEl.object3D.attach(context.el.object3D);        // attached turtle with net back to scene
                context.data.pickedup = false;

                context.el.setAttribute('body', 'type:dynamic; shape:none;')        // create new physics bounding box and properties 
                context.el.setAttribute('shape__newBox' + bodyincrement, 'shape: box; halfExtents: 0.9 0.1 0.7; offset: 0 0.2 0; orientation: 0 0 0 1')
           
                increment = 0;                                   // reset increment
                objectSelectedID = null;                         // reset object selected to null
                pickupSound.play();                             // play pick up sound effect

                turtleFished = false;                           // set turtle fished to false
            }
        });

        voiceExitButton.addEventListener('click', ()=>{         // if voice exit button is clicked 

            voiceUI.style.display = "none";                     // hide voice popup
            clickSound.play();                                  // play click sound effect

        });

        setInterval(PopupTimer, 30000);                         // call function to show voice over text with a timer of 30 seconds

    },

    tick: function(){
        // tick function to keep checking if settings toggles are on or off

        if(musicToggle.checked == false){                       // if music toggle is off

            musicSound.setAttribute('sound', 'volume', 0)       // turn music off

        }else{

            musicSound.setAttribute('sound', 'volume', 8)       // turn music on
        }

        if(soundToggle.checked == false){                       // if sound effect toggle is on

            waterSound.setAttribute('sound', 'volume', 0)       // turn sound effects off
            birdSound.setAttribute('sound', 'volume', 0)

            apartmentSound.volume = 0;
            boardwalkSound.volume = 0;
            tourismSound.volume = 0;
            clickSound.volume = 0;
            pickupSound.volume = 0;

        }else{

            waterSound.setAttribute('sound', 'volume', 8)       // turn sound effects on
            birdSound.setAttribute('sound', 'volume', 8)

            apartmentSound.volume = 1;
            boardwalkSound.volume = 1;
            tourismSound.volume = 1;
            clickSound.volume = 1;
            pickupSound.volume = 1;

        }

        if(voiceToggle.checked == false){                   // if voice over is off

            helpDesktopTextSound.volume = 0;                // turn off all voice overs
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

            helpDesktopTextSound.volume = 0.4;          // turn on all voice overs
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