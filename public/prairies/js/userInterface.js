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

       begin = false;
       exit = false;


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

        
        });

        helpExitButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            Help_Popup_ID.style.display = "none";
            clickSound.play();
            
        });


        settingsButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "block";
            Settings_Popup_ID.style.display = "flex";
            clickSound.play();

        });

        
        settingsExitButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            Settings_Popup_ID.style.display = "none";
            clickSound.play();
            
        });


        bucketExit.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            bucketPopup.style.display = "none";
            player.setAttribute('position', {x: -0.804, y:1.3, z: 1.57});
            checkDistance_Bool = true;
            clickSound.play();
            
        });

        bucketButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            bucketPopup.style.display = "none";
            bucketTask = true;
            clickSound.play();
            

            
        });


        infoButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            infoUI.style.display = "none";
            exitBucket();
            clickSound.play();
    
    
            
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


    }

});