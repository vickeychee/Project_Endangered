AFRAME.registerComponent('user-interface',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

       helpButton = document.getElementById('Button_Arctic_Instructions_ID');
       helpExitButton =document.getElementById('Help_Exit_Button_ID');

       settingsButton =document.getElementById('Button_Arctic_Settings_ID'); 
       settingsExitButton =  document.getElementById('Settings_Exit_Button_ID');

       musicToggle =  document.getElementById('Music-Toggle');

       pianoSound = document.querySelector('#piano_music');
       windSound = document.querySelector('#wind_sound');



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

    },

    tick: function(){

        console.log(pianoSound.sound);

        if(musicToggle == false){

            pianoSound.setAttribute('sound.volume',{to:0});

        }else{

        }


    }

});