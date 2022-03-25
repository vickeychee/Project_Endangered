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

       voiceUI = document.getElementById('Voice_Popup_ID');
       voiceExitButton = document.getElementById('Voice_Exit_Button_ID');

       bucketPopup = document.getElementById('Bucket_Popup_ID');
       bucketButton = document.getElementById('Bucket_Button_ID');
       bucketExit = document.getElementById('Bucket_Exit_Button_ID');

       infoButton = document.getElementById('Info_Button_ID');
       infoUI = document.getElementById('Info_Popup_ID');


       resetButton = document.getElementById('Button_Reset_ID');
       exitButton = document.getElementById('Button_Exit_ID');

       musicToggle =  document.getElementById('Music-Toggle');
       soundToggle = document.getElementById('Sound-Toggle');
       voiceToggle =document.getElementById('Voice-Toggle'); 

       marshSound = document.querySelector('#marsh');
       riverSound = document.querySelector('#river');
       musicSound = document.querySelector('#music');
       clickSound = document.querySelector('#click_sound');

       splashSound = document.querySelector('#splash_sound');
       gunSound = document.querySelector('#gun_sound');
       pickupSound = document.querySelector('#pickup_sound');

       pickupSound.volume = 0.3;
       splashSound.volume = 0.3;
       gunSound.volume = 0.8;
       clickSound.volume = 1;

       helpDesktopTextSound = document.querySelector('#menu_instruction_desktop');
       helpMobileTextSound = document.querySelector('#menu_instruction_mobile');
       settingTextSound = document.querySelector('#menu_settings');


        resetButton.addEventListener('click', ()=>{
            
                resetBucketTask();
                clickSound.play();
    
        });

        exitButton.addEventListener('click', ()=>{
                
                exitBucket();
                player.setAttribute('position', {x: -0.804, y:1.3, z: 1.57});
                clickSound.play();
    
        });


       
        voiceExitButton.addEventListener('click', ()=>{

            voiceUI.style.display = "none";
            clickSound.play();

        });

        helpButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "block";
            Help_Popup_ID.style.display = "flex";
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


        bucketExit.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            bucketPopup.style.display = "none";
            player.setAttribute('position', {x: -0.804, y:1.3, z: 1.57});
            checkDistance_Bool = true;
            clickSound.play();

            if(voiceToggle.checked == true){

                if(deviceChoice == 1){

                    bucketDesktopSound.pause();

                }else if(deviceChoice == 2){

                    bucketMobileSound.pause();
                }
    
            }



            
        });

        bucketButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            bucketPopup.style.display = "none";
            bucketTask = true;
            clickSound.play();

            if(voiceToggle.checked == true){

                if(deviceChoice == 1){

                    bucketDesktopSound.pause();

                }else if(deviceChoice == 2){

                    bucketMobileSound.pause();
                }
    
            }
            

            
        });


        infoButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            infoUI.style.display = "none";

            Round_Title_ID.style.display = "none";
            Round_Text_ID.style.display = "none";

            cropTooltip.setAttribute("visible",false);

            exitBucket();
            clickSound.play();


            if(voiceToggle.checked == true){

                bucketEndSound.pause();
    
            }

    
    
            
        });

        
        setInterval(PopupTimer, 30000);


    },

    tick: function(){


        if(musicToggle.checked == false){

            musicSound.setAttribute('sound', 'volume', 0)



        }else{

            musicSound.setAttribute('sound', 'volume', 2)
        }

        if(soundToggle.checked == false){

            marshSound.setAttribute('sound', 'volume', 0)
            riverSound.setAttribute('sound', 'volume', 0)

                    
            pickupSound.volume = 0;
            splashSound.volume = 0;
            gunSound.volume = 0;
            clickSound.volume = 0;


        }else{

            marshSound.setAttribute('sound', 'volume', 2)
            riverSound.setAttribute('sound', 'volume', 2)

            
            pickupSound.volume = 0.3;
            splashSound.volume = 0.3;
            gunSound.volume = 0.8;
            clickSound.volume = 1;
        }

        if(voiceToggle.checked == false){


            helpDesktopTextSound.volume = 0;
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

            helpDesktopTextSound.volume = 0.3;
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