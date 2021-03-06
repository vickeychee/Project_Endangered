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



       begin = false;
       exit = false;


       voiceExitButton.addEventListener('click', ()=>{

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


    }

});