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



       infoButton = document.getElementById('Info_Button_ID');

       musicToggle =  document.getElementById('Music-Toggle');
       soundToggle = document.getElementById('Sound-Toggle');

      // pianoSound = document.querySelector('#piano_music');
      // windSound = document.querySelector('#wind_sound');


      console.log("user");


       begin = false;
       exit = false;


       
       voiceExitButton.addEventListener('click', ()=>{

        voiceUI.style.display = "none";

        });

       helpButton.addEventListener('click', ()=>{

        Screen_Overlay_ID.style.display = "block";
        Help_Popup_ID.style.display = "flex";

        
        });

        helpExitButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            Help_Popup_ID.style.display = "none";
            
        });


        settingsButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "block";
            Settings_Popup_ID.style.display = "flex";

        });

        
        settingsExitButton.addEventListener('click', ()=>{

            Screen_Overlay_ID.style.display = "none";
            Settings_Popup_ID.style.display = "none";
            
        });

        
        setInterval(PopupTimer, 30000);


       /*voiceExitButton.addEventListener('click', ()=>{

        voiceUI .style.display = "none";

        });

       factExitButton.addEventListener('click', ()=>{

        Screen_Overlay_ID.style.display = "none";
        factUI.style.display = "none";

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

        
        present_sound.pause();

        
        });

*/

    },

    tick: function(){



    }

});