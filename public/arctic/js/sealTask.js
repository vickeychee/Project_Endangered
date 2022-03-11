function checkSeals() {

    if (sealCounter == 60){



      playerDetails.setAttribute('raycaster', 'far', 10);

      factExitButton.style.display  = "none";
    
      sealInfoButton.style.display ="inline-flex";
      factUI.style.display = "inline-flex";
      Screen_Overlay_ID.style.display = "block";

      factTitle.innerHTML ="Good Job!";
      factText.innerHTML = "You were able to collect all of the seals! Did you notice how easy it was to move around because of all the icebergs? This is how easy it used to be for polar bears to get food in the past.";
      sealInfoButton.innerHTML ="CONTINUE";


      if(voiceToggle.checked == true){

        round1Sound.currentTime = 0;
        round1Sound.play();

    }

      
      sealInfoButton.addEventListener('click', ()=>{
        checkProgressBar();
        roundTitle.innerHTML = "Round 2";
        title.src="./css/imgs/arctic_title_present.png";
      });


        ice3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        player.setAttribute('position', {x:7, y:1.6, z:-12});
        player.setAttribute('rotation', {x:-2.635, y:40.42, z:0});




    } else if (sealCounter == 100){

      factUI.style.display = "inline-flex";
      Screen_Overlay_ID.style.display = "block";

      factTitle.innerHTML ="Good Job!";
      factText.innerHTML = "You were able to collect all of the seals again! But did you notice how it was a bit harder this time because there were less icebergs? This is how it is for polars today. It has become much more difficult for them to get food.";
      sealInfoButton.innerHTML ="CONTINUE";

      if(voiceToggle.checked == true){

        round2Sound.currentTime = 0;
        round2Sound.play();

    }

      sealInfoButton.addEventListener('click', ()=>{
        checkProgressBar();
        roundTitle.innerHTML = "Round 3";
        title.src="./css/imgs/arctic_title_future.png";

      });

        ice1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        player.setAttribute('position', {x:7, y:1.6, z:-12});
        player.setAttribute('rotation', {x:-2.635, y:40.42, z:0});

        player.setAttribute('movement-controls', {enabled:true});
        player2.setAttribute('wasd-controls', {enabled:true});
    


    } else if (sealCounter > 100){

        factUI.style.display = "inline-flex";
        Screen_Overlay_ID.style.display = "block";
        factTitle.innerHTML = "Oh No!";
        factText.innerHTML = "You weren’t able to collect all of the seals this time! Did you notice how it was impossible this time because there was no icebergs? This is how hard it will be for polar bears to get food in the future. If the polar bears cannot get food, they will eventually become extinct.";
        sealInfoButton.innerHTML ="END ACTIVITY";

        if(voiceToggle.checked == true){

          round3Sound.currentTime = 0;
          round3Sound.play();
  
      }
        

        sealInfoButton.addEventListener('click', ()=>{

          sealInfoButton.style.display ="none";
          factExitButton.style.display  = "inline-flex";
          

            bool_sealtask = false;

            sealCounter = 0;
            round1 = false;
            sealTaskCounter +=1;
            title.src="./css/imgs/arctic_title_present.png";

            playerDetails.setAttribute('raycaster', 'far', 20);

            seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

            seal1.setAttribute('position', {x:-13.760, y:-0.101, z:-30.780});
            seal1.setAttribute('rotation', {x:0, y:207.000, z:0});
            seal2.setAttribute('position', {x:6.012, y:-0.132, z:-24.854});
            seal2.setAttribute('rotation', {x:-13.280, y:127.800, z:0});
            seal3.setAttribute('position', {x:-21.809, y:0.007, z:-15.807});
            seal3.setAttribute('rotation', {x:-13.360, y:246.100, z:0});
            seal4.setAttribute('position', {x:10.730, y:0.080, z:-16.500});
            seal4.setAttribute('rotation', {x:-21.820, y:109.900, z:-12.790});
            seal5.setAttribute('position', {x:-0.890, y:-0.212, z:-9.668});
            seal5.setAttribute('rotation', {x:0, y:234.000, z:0});
            seal6.setAttribute('position', {x:1, y:-0.228, z:-10.400});
            seal6.setAttribute('rotation', {x:0, y:53.820, z:0});

      
          });

    }
}

function checkProgressBar(){
  if(subs_completed == 0  && round1 == false){
    resetProgress(6);
    total_subs = 6;
  }
  if (subs_completed >= 5.9){
      resetProgress(4);
      total_subs = 4;
      round1 = true;
  }
  if(subs_completed >= 4 && round1 == true){
      resetProgress(2);
      total_subs = 2;
  }
}


function updateSubtaskProgressBar(subs_completed, total_subs, progress_bar_transition, toggle, mod, reload_btn) {
  var left_side = $(".sub-progress-bar_transition .circle .left .sub-progress");
  var right_side = $(".sub-progress-bar_transition .circle .right .sub-progress");

  progress = subs_completed / total_subs * 360;
  transition = 500;
  delay = transition / 2;
  rot_reminder = 0;

  if (progress < 180) {
    
    rot_right = 0;

    right_side.css({
      'transform': 'rotate(' + rot_right + 'deg)'
    });

    rot_left = progress

    rot_reminder = 180 - rot_left
  
    if (rot_reminder != 0 && mod != 0 && toggle == 0) {

      progress_bar_transition.css({
        'transition': 'all ' + delay / 1000 + 's ease-in'
      });

      setTimeout(function () {
        progress_bar_transition.css({
          'transition': 'all ' + delay / 1000 + 's ease-out'
        });
        left_side.css({

          'transform': 'rotate(' + rot_left + 'deg)'
        });
      }, delay);

      toggle = 1 - toggle
      reload_btn.data('toggle', toggle)

    } else {
      progress_bar_transition.css({
        'transition': 'all ' + transition / 1000 + 's ease-in-out'
      });
      left_side.css({
        'transform': 'rotate(' + rot_left + 'deg)'
      });

    }

  } else {

    rot_left = 180;

    left_side.css({
      'transform': 'rotate(' + rot_left + 'deg)'
    });

    rot_right = progress - 180;

    rot_reminder = rot_right

    if (rot_reminder != 0 && mod != 0 && toggle == 1) {
      
      progress_bar_transition.css({
        'transition': 'all ' + delay / 1000 + 's ease-in'
      });

      setTimeout(function () {
        progress_bar_transition.css({
          'transition': 'all ' + delay / 1000 + 's ease-out'
        });
        right_side.css({

          'transform': 'rotate(' + rot_right + 'deg)'
        });
      }, delay);

      toggle = 1 - toggle
      reload_btn.data('toggle', toggle)

    } else {
      progress_bar_transition.css({
        'transition': 'all ' + transition / 1000 + 's ease-in-out'
      });
      right_side.css({
        'transform': 'rotate(' + rot_right + 'deg)'
      });
    }
  }
}

function setSubtaskProgressBar(subs_completed, total_subs, bar_transition) {

  modulo = 0;
  current_progress = 0;
  
  var left_side = $(".sub-progress-bar_transition .circle .left .sub-progress");
  var right_side = $(".sub-progress-bar_transition .circle .right .sub-progress");

  modulo = total_subs%2
  current_progress = subs_completed / total_subs * 360;

  var reload = $('.reload')
  reload.data('completed', subs_completed)
  reload.data('total', total_subs)
  reload.data('modulo', modulo)


  if (current_progress < 180) {

    rot_left = current_progress
    rot_right = 0

    left_side.css({
      'transform': 'rotate(' + rot_left + 'deg)'
    });

    reload.data('toggle', 1)

  } else {

    rot_left = 180
    rot_right = current_progress - 180

    left_side.css({
      'transform': 'rotate(' + rot_left + 'deg)'
    });

    right_side.css({
      'transform': 'rotate(' + rot_right + 'deg)'
    });

    reload.data('toggle', 0)

  }

  bar_transition.css({
    'transition': 'none'
  });
}

function addProgress(){
    subs_completed += Math.round(0.1 * 10) / 10

    fixed = Math.round(subs_completed.toFixed(1))

    $('.number').html(fixed + '/' + total_subs)

    reload = $('.reload')
    reload.data('completed', subs_completed)
    modulo = reload.data('modulo')
    toggle = reload.data('toggle')
    total = reload.data('total')

    updateSubtaskProgressBar(fixed, total, bar_transition, toggle, modulo, reload)
}


function resetProgress(total_subs){
    subs_completed = 0

    fixed = Math.round(subs_completed.toFixed(1))

    $('.number').html(fixed + '/' + total_subs)
    bar_transition = $('.circle .bar_transition .sub-progress')

    reload = $('.reload')
    reload.data('completed', subs_completed)
    modulo = reload.data('modulo')
    toggle = reload.data('toggle')
    total = reload.data('total')

    setSubtaskProgressBar(subs_completed, total_subs, bar_transition)
    updateSubtaskProgressBar(fixed, total, bar_transition, toggle, modulo, reload)
}

function resetSealTask(){

  seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

  seal1.setAttribute('position', {x:-13.111, y:-1.370, z:-18.840});
  seal1.setAttribute('rotation', {x:13.140, y:301.950, z:0});
  seal2.setAttribute('position', {x:-7.588, y:-1.164, z:-24.854});
  seal2.setAttribute('rotation', {x:13.140, y:197.950, z:0});
  seal3.setAttribute('position', {x:-2.869, y:-1.293, z:-21.171});
  seal3.setAttribute('rotation', {x:13, y:300.060, z:0});
  seal4.setAttribute('position', {x:4.226, y:-1.303, z:-21.171});
  seal4.setAttribute('rotation', {x:13.350, y:30.800, z:0});
  seal5.setAttribute('position', {x:-0.054, y:-1.113, z:-15.820});
  seal5.setAttribute('rotation', {x:13.570, y:216.610, z:0});
  seal6.setAttribute('position', {x:-13.011, y:-1.244, z:-11.887});
  seal6.setAttribute('rotation', {x:13.000, y:35.140, z:0});

  roundTitle.innerHTML = "Round 1";
  player.setAttribute('position', {x:7, y:1.6, z:-12});

  round1 = false;

  subs_completed = 0;
  sealCounter = 0;

  checkProgressBar();

  playerDetails.setAttribute('raycaster', 'far', 12);


}

function exitSealTask(){
  player.setAttribute('position', {x:7.77, y:1.6, z:-9.68});
  title.src="./css/imgs/arctic_title_present.png";

  ice1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

  seal1.setAttribute('position', {x:-13.760, y:-0.101, z:-30.780});
  seal1.setAttribute('rotation', {x:0, y:207.000, z:0});
  seal2.setAttribute('position', {x:6.012, y:-0.132, z:-24.854});
  seal2.setAttribute('rotation', {x:-13.280, y:127.800, z:0});
  seal3.setAttribute('position', {x:-21.809, y:0.007, z:-15.807});
  seal3.setAttribute('rotation', {x:-13.360, y:246.100, z:0});
  seal4.setAttribute('position', {x:10.730, y:0.080, z:-16.500});
  seal4.setAttribute('rotation', {x:-21.820, y:109.900, z:-12.790});
  seal5.setAttribute('position', {x:-0.890, y:-0.212, z:-9.668});
  seal5.setAttribute('rotation', {x:0, y:234.000, z:0});
  seal6.setAttribute('position', {x:1, y:-0.228, z:-10.400});
  seal6.setAttribute('rotation', {x:0, y:53.820, z:0});

  player.setAttribute('movement-controls', {enabled:true});
  player2.setAttribute('wasd-controls', {enabled:true});

  bool_sealtask = false;

  sealCounter = 0;
  round1 = false;
  sealTaskCounter =0;
  roundTitle.innerHTML = "Round 1";
  subs_completed = 0;

  exit = false;
  begin =false;

  
  sealInfoButton.style.display ="none";
  factExitButton.style.display  = "inline-flex";

  playerDetails.setAttribute('raycaster', 'far', 20);

}
/*
function scaleSeals(){

seal1.addEventListener('mouseenter', ()=>{
    if (present == true && bool_sealtask == true ){
        seal1.setAttribute('animation', {property:'scale', to: {x:2.4, y:2.4, z:2.4}, dur: 200});
    }
});

seal1.addEventListener('mouseleave', ()=>{
  if (present == true && bool_sealtask == true ){
        seal1.setAttribute('animation', {property:'scale', to: {x:2.3, y:2.3, z:2.3}, dur: 200});
    }
});

seal2.addEventListener('mouseenter', ()=>{
  if (present == true && bool_sealtask == true ){
      seal2.setAttribute('animation', {property:'scale', to: {x:1.9, y:1.9, z:1.9}, dur: 200});
  }
});

seal2.addEventListener('mouseleave', ()=>{
  if (present == true && bool_sealtask == true ){
      seal2.setAttribute('animation', {property:'scale', to: {x:1.8, y:1.8, z:1.8}, dur: 200});
  }
});

seal3.addEventListener('mouseenter', ()=>{
  if (present == true && bool_sealtask == true ){
        seal3.setAttribute('animation', {property:'scale', to: {x:2.1, y:2.1, z:2.1}, dur: 200});
    }
});

seal3.addEventListener('mouseleave', ()=>{
  if (present == true && bool_sealtask == true ){
        seal3.setAttribute('animation', {property:'scale', to: {x:2.0, y:2.0, z:2.0}, dur: 200});
    }  
});

seal4.addEventListener('mouseenter', ()=>{
  if (present == true && bool_sealtask == true ){
      seal4.setAttribute('animation', {property:'scale', to: {x:1.9, y:1.9, z:1.9}, dur: 200});
  }
});

seal4.addEventListener('mouseleave', ()=>{
  if (present == true && bool_sealtask == true ){
      seal4.setAttribute('animation', {property:'scale', to: {x:1.8, y:1.8, z:1.8}, dur: 200});
  }
});

}
*/





AFRAME.registerComponent('seal-task',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

    bool_sealtask = false;
    round1 = false;
    sealTick = false;
    sealTaskCounter = 0;

    
    playerDetails = document.querySelector('#player-details');



  $(document).ready(function () {
  
    subs_completed = 0
    total_subs = 6
  
    bar_transition = $('.circle .bar_transition .sub-progress')
    
    number = $('.number')
    number.html(subs_completed + '/' + total_subs)
  
    setSubtaskProgressBar(subs_completed, total_subs, bar_transition)


  });


   
    seal1 = document.querySelector('#seal1');
    seal2 = document.querySelector('#seal2');
    seal3 = document.querySelector('#seal3');
    seal4 = document.querySelector('#seal4');
    seal5 = document.querySelector('#seal5');
    seal6 = document.querySelector('#seal6');

    ice1 = document.querySelector('#ice1');
    ice2 = document.querySelector('#ice2');
    ice3 = document.querySelector('#ice3');
    ice4 = document.querySelector('#ice4');
    ice5 = document.querySelector('#ice5');
    ice6 = document.querySelector('#ice6');

    player = document.querySelector('#player');
    player2 =  document.querySelector('#player2');   
    circle = document.querySelector('#cylinder_red');
    sign1 = document.querySelector('#sign1');
    sign2 = document.querySelector('#sign2');

    click = document.querySelector('#click_sound');
    roundTitle = document.getElementById('Round_Title_ID');
    progressCircle = document.getElementById('Progress_Circle_ID');
    resetButton = document.getElementById('Button_Arctic_Reset_ID');
    exitButton = document.getElementById('Button_Arctic_Exit_ID');

    round1Sound = document.querySelector('#seal_round1');
    round2Sound = document.querySelector('#seal_round2');
    round3Sound = document.querySelector('#seal_round3');

    sealDesktopSound = document.querySelector('#seal_instruction_desktop');
    sealMobileSound = document.querySelector('#seal_instruction_mobile');


    sealCounter = 0;


    resetButton.addEventListener('click', ()=>{
        
      resetSealTask();

    });

    exitButton.addEventListener('click', ()=>{
        exitSealTask();
        Button_Arctic_Reset_ID.style.display = "none";
        Button_Arctic_Exit_ID.style.display = "none";
        Round_Title_ID.style.display = "none";
        Round_Text_ID.style.display = "none";
        progressCircle.style.display = "none";
        sealTick = false;

    });
        
    ice1.addEventListener('click', ()=>{
        
        player.setAttribute('position', {x:-5.6, y:1.6, z:-17.52});

    });

    ice2.addEventListener('click', ()=>{
        
        player.setAttribute('position', {x:5, y:1.6, z:-16});

    });

    ice3.addEventListener('click', ()=>{
        
        player.setAttribute('position', {x:-11.2, y:1.6, z:-23.72});

    });

    
    ice4.addEventListener('click', ()=>{
        player.setAttribute('position', {x:0.7, y:1.6, z:-20.2});

    });

    ice5.addEventListener('click', ()=>{
        
        player.setAttribute('position', {x:-17.78, y:1.6, z:-13});

    });

    ice6.addEventListener('click', ()=>{
        
        player.setAttribute('position', {x:1.16, y:1.6, z:-27.8});


    });

    seal1.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            click.play();

            if (sealCounter <100){
                seal1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                addProgress();
            } 
            sealCounter+=1;
            checkSeals();
    
        }


    });

    seal2.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            click.play();
            
            if (sealCounter <100){
                seal2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                addProgress();
            } 
            sealCounter+=1;
            checkSeals();
        }

    });

    seal3.addEventListener('click', ()=>{
        if (bool_sealtask == true){

            seal3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    seal4.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    seal5.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    seal6.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    },

    tick: function(){


      if (sealTaskCounter < 1){

      playerPos = player.getAttribute('position');
      playerRot = player.getAttribute('rotation');
      circlePos = circle.getAttribute('position');

      xPlayer = ((playerPos.x - circlePos.x)**2);
      yPlayer = ((playerPos.y - circlePos.y)**2);
      zPlayer = ((playerPos.z - circlePos.z)**2);
      playerSum = xPlayer + yPlayer + zPlayer;
      distance = Math.sqrt(playerSum);

      if (distance < 1.8){

        bool_sealtask = true;
        sealTick = true;


     }

    }

      if(sealTick){

        if (bool_sealtask == true && present == true){


          if (begin == false && exit == false){
            sealsPopup.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";

            if(voiceToggle.checked == true){

              if(deviceChoice == 1){

                sealDesktopSound.currentTime = 0;
                sealDesktopSound.play();

              }else if(deviceChoice == 2){

                sealMobileSound.currentTime = 0;
                sealMobileSound.play();
              }
  
          }

          }else if (begin == true && sealCounter < 60 ){
            sealsPopup.style.display = "none";
            Screen_Overlay_ID.style.display = "none";
            Button_Arctic_Reset_ID.style.display = "block";
            Button_Arctic_Exit_ID.style.display = "block";
            Round_Title_ID.style.display = "block";
            Round_Text_ID.style.display = "block";
            progressCircle.style.display = "block";
            document.getElementById("Voice_Popup_ID").style.display="none";

            
          }

      
            if (sealCounter < 60){


              playerDetails.setAttribute('raycaster', 'far', 12);

                player.setAttribute('movement-controls', {enabled:false});
                player2.setAttribute('wasd-controls', {enabled:false});

                title.src="./css/imgs/arctic_title_past.png";

                ice1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        
                seal1.setAttribute('position', {x:-13.111, y:-1.370, z:-18.840});
                seal1.setAttribute('rotation', {x:13.140, y:301.950, z:0});
        
                seal2.setAttribute('position', {x:-7.588, y:-1.164, z:-24.854});
                seal2.setAttribute('rotation', {x:13.140, y:197.950, z:0});
        
                seal3.setAttribute('position', {x:-2.869, y:-1.293, z:-21.171});
                seal3.setAttribute('rotation', {x:13, y:300.060, z:0});
        
                seal4.setAttribute('position', {x:4.226, y:-1.303, z:-21.171});
                seal4.setAttribute('rotation', {x:13.350, y:30.800, z:0});
        
                seal5.setAttribute('position', {x:-0.054, y:-1.113, z:-15.820});
                seal5.setAttribute('rotation', {x:13.570, y:216.610, z:0});
        
                seal6.setAttribute('position', {x:-13.011, y:-1.244, z:-11.887});
                seal6.setAttribute('rotation', {x:13.000, y:35.140, z:0});



            }


        }

        if (bool_sealtask == false && present == true){

            Button_Arctic_Reset_ID.style.display = "none";
            Button_Arctic_Exit_ID.style.display = "none";
            Round_Title_ID.style.display = "none";
            Round_Text_ID.style.display = "none";
            progressCircle.style.display = "none";
            sealTick = false;
        }
    
 

    }

  }



});

  
  
