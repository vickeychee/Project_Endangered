  function updateSubtaskProgressBar(subs_completed, total_subs, progress_bar_transition, toggle, mod, reload_btn) {

    // function to update the animation on the progress bar
    // code for progress bar is referenced from this source: https://stackoverflow.com/questions/68256289/round-progress-bar-css-js 

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
  
    // function to reset the progress bar
    // code for progress bar is referenced from this source: https://stackoverflow.com/questions/68256289/round-progress-bar-css-js 

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

      // function to add the progress bar by 1
      subs_completed += 1;
  
      $('.number').html(subs_completed + '/' + total_subs)

  
      reload = $('.reload')
      reload.data('completed', subs_completed)
      modulo = reload.data('modulo')
      toggle = reload.data('toggle')
      total = reload.data('total')
  
      updateSubtaskProgressBar(subs_completed, total, bar_transition, toggle, modulo, reload) // update progress bar
  }
  
  function resetProgress(total_subs){

      // function to reset progress bar to 0

      subs_completed = 0
  
      fixed = Math.round(subs_completed.toFixed(1))
  
      $('.number').html(fixed + '/' + total_subs)
      bar_transition = $('.circle .bar_transition .sub-progress')
  
      reload = $('.reload')
      reload.data('completed', subs_completed)
      modulo = reload.data('modulo')
      toggle = reload.data('toggle')
      total = reload.data('total')
  
      setSubtaskProgressBar(subs_completed, total_subs, bar_transition) // call function to reintialize progress bar
      updateSubtaskProgressBar(fixed, total, bar_transition, toggle, modulo, reload)   // call function to update animation on progress bar
  }

  function exitBucket(){

    resetButton.style.display = "none";     // hide menu reset and exit buttons
    exitButton.style.display = "none";
    progressCircle.style.display = "none";    // hide progress indicator

    water.setAttribute('position', {x:1.521, y:-0.277, z: -13.578});      // reset water, lillies, and cranes position
    lily.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});
    craneGroup.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});

    waterCounter = 0;     // reseting counter and progress bars
    subs_completed = 0;
    bucketTask = false;
    bucketFull_Bool = false;
    checkDistance_Bool = true;

    playerDetails.setAttribute('raycaster', 'far', 8);    // reset raycaster

    bucket.setAttribute('gltf-model', "./assets/bucket_empty.glb");   // show empty bucket model
    
    bucketTooltip.setAttribute("visible",false);    // hide tooltips
    cropTooltip.setAttribute("visible",false);

    Round_Title_ID.style.display = "none";      // hide title and text 
    Round_Text_ID.style.display = "none";

    
  }

  function resetBucketTask(){

    waterCounter = 0;         // reseting counter and progress bars
    subs_completed = 0;
    bucketFull_Bool = false;

    water.setAttribute('position', {x:1.521, y:-0.277, z: -13.578});        // reset water, lillies, and cranes position
    lily.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});
    craneGroup.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});

    bucket.setAttribute('gltf-model', "./assets/bucket_empty.glb");       // show empty bucket model

    playerDetails.setAttribute('raycaster', 'far', 8);                    // reset raycaster

    player.setAttribute('position', {x: -0.804, y:1.3, z: 1.57});         // reset player position

    bucketTooltip.setAttribute("visible",false);                          // hide tooltips
    cropTooltip.setAttribute("visible",false);
      
    $('.number').html(subs_completed + '/' + total_subs)

    updateSubtaskProgressBar(subs_completed, total, bar_transition, toggle, modulo, reload)   // call function to update progress indicator

  }


AFRAME.registerComponent('bucket-task',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

    // initalize water asset
    water = document.querySelector('#river');

    // initalize bucket
    bucket = document.querySelector('#bucket');

    // initalize player
    player = document.querySelector('#player');
    playerDetails = document.querySelector('#player-details');

    // initalize step to start pad
    circle = document.querySelector('#pad');

    // initalize lily
    lily = document.querySelector('#lily');

    // initalize crops
    allCrops = document.querySelectorAll('.crop');

    // initalize crane group 
    craneGroup = document.querySelector('#crane_group');

    // initialze html button
    resetButton = document.getElementById('Button_Reset_ID');
    exitButton = document.getElementById('Button_Exit_ID');

    // initialze progress indicator
    progressCircle = document.getElementById('Progress_Circle_ID');

    // initalize tooltips  
    bucketTooltip = document.querySelector('#tooltip3');
    cropTooltip = document.querySelector('#tooltip4');
    gunTooltip = document.querySelector('#tooltip2');

    // initialze voice overs
    bucketDesktopSound = document.querySelector('#bucket_desktop');
    bucketMobileSound = document.querySelector('#bucket_mobile');
    bucketEndSound = document.querySelector('#bucket_end');


    // initialze counters and bools
    waterCounter = 0;
    bucketFull_Bool = false;
    checkDistance_Bool = true;
    bucketThreeTimes = false;
    bucketTask = false;
    bucketEndActivity = false;
    

    $(document).ready(function () {

      // initializing progress bar
    
      subs_completed = 0
      total_subs = 4
    
      bar_transition = $('.circle .bar_transition .sub-progress')
      
      number = $('.number')
      number.html(subs_completed + '/' + total_subs)
    
      setSubtaskProgressBar(subs_completed, total_subs, bar_transition)
      
    });


    // if water is clicked
    water.addEventListener('click', ()=>{

        if (bucketTask){    // if bucket task has started 

            if(objectSelectedID === "bucket"){    // if bucket is picked up

                if(bucketFull_Bool === false && bucketThreeTimes === false){
                     waterCounter +=1;        // increase water counter 
                     bucket.setAttribute('gltf-model', "./assets/bucket_full.glb");   // change bucket model with water
                     splashSound.play();      // play water sound effect
                }
     
                bucketFull_Bool = true;   // set bucket full to true
     
                if(waterCounter === 1){   // if water counter is 1
                    water.setAttribute('position', {x:1.471, y:-0.611, z: -14.118});    // lower water, lilies, crane group position
                    lily.setAttribute('position', {x: 0.442, y:-0.349, z: -4.969});
                    craneGroup.setAttribute('position', {x: 0.442, y:-0.249, z: -4.969});
                    cropTooltip.setAttribute("visible",true);                           // show crop tooltip
                }
                else if(waterCounter === 2){    // if water counter is 2
                    water.setAttribute('position', {x:1.471, y:-1.386, z: -14.118});    // lower water, lilies, crane group position
                    lily.setAttribute('position', {x: 0.442, y:-1.110, z: -4.969});
                    craneGroup.setAttribute('position', {x: 0.442, y:-1.039, z: -4.969});
     
               }else if (waterCounter === 3){   // if water counter is 3
                    water.setAttribute('position', {x:1.471, y:-2.400, z: -14.118});      // lower water, lilies, crane group position
                    lily.setAttribute('position', {x: 0.442, y:-4.378, z: -4.969});
                    craneGroup.setAttribute('position', {x: 0.442, y:-3.272, z: -4.969});
                    playerDetails.setAttribute('raycaster', 'far', 15);                 // reset player raycaster
    
               }
     
               if (bucketThreeTimes === true){
                   waterCounter +=1;    // increase water counter to be over 4
               }
     
               if (waterCounter > 4){   // if water counter is greater than 4 ( task is done )
          
                   Screen_Overlay_ID.style.display = "block";   // display info popup
                   infoUI.style.display = "flex";
                   clickSound.play();                           // play click sound effect

                   bucketEndActivity = true;

                   if(voiceToggle.checked == true){           // if voice over is toggled 

                    bucketEndSound.currentTime = 0;           // reset voice over
                    bucketEndSound.play();                    // play voice over
                          
                }
               }        
             }
        }
    });


    allCrops.forEach(function(allCropsElem){    // for each crop

        allCropsElem.addEventListener('click', ()=>{    // if crops are clicked 

            clickSound.play();        // play click sound effect

            if(objectSelectedID === "bucket" && bucketFull_Bool === true){      // if water the crops task is on and bucket is picked up
                bucket.setAttribute('gltf-model', "./assets/bucket_empty.glb");   // change model to empty bucket 

                if(waterCounter <= 4){      // if water counter is less than 4
                    addProgress();          // increase progress indicator
                }

                if(waterCounter === 3){       // setting booleans
                    bucketThreeTimes = true;
                }

                bucketFull_Bool = false;
            }
        });
    });

    },

    tick: function(){ // a tick function to keep checking if user has stepped to start 

        if(checkDistance_Bool){

            // getting user position
            playerPos = player.getAttribute('position');
            playerRot = player.getAttribute('rotation');
            circlePos = circle.getAttribute('position');
    
            // calculating user distance to step to start
            xPlayer = ((playerPos.x - circlePos.x)**2);
            yPlayer = ((playerPos.y - circlePos.y)**2);
            zPlayer = ((playerPos.z - circlePos.z)**2);
            playerSum = xPlayer + yPlayer + zPlayer;
            distance = Math.sqrt(playerSum);
    
            // if user is on step to start
            if (distance < 1.6){

                checkDistance_Bool = false;
                document.getElementById("Voice_Popup_ID").style.display="none";     // hide voice popup
                bucketPopup.style.display = "flex";               // show water the crops instructions
                Screen_Overlay_ID.style.display = "block";

                if(voiceToggle.checked == true){          // if voice over is toggled on

                  if(deviceChoice == 1){                  // if device is desktop

                      bucketDesktopSound.currentTime = 0;   // reset desktop voice over 
                      bucketDesktopSound.play();            // play desktop voice over
  
                  }else if(deviceChoice == 2){            // if device is mobile
  
                      bucketMobileSound.currentTime = 0;    // reset mobile voice over 
                      bucketMobileSound.play();             // play mobile voice over

                  }
                }

                waterCounter = 0;         // restarting progress indicator
                subs_completed = 0;
                $('.number').html(subs_completed + '/' + total_subs)

                reload = $('.reload')
                reload.data('completed', subs_completed)
                modulo = reload.data('modulo')
                toggle = reload.data('toggle')
                total = reload.data('total')

                updateSubtaskProgressBar(subs_completed, total, bar_transition, toggle, modulo, reload)   // updating progress indicator


                if (bucketTooltipCounter == 0){
                  bucketTooltip.setAttribute("visible",true);     // show bucket tooltip
                }
    
             }
        }

        if(bucketTask){
            
            bucket.classList.add('interactive');    // adding interactiy to bucket

            resetButton.style.display = "block";      // show menu UI elements
            exitButton.style.display = "block";

            progressCircle.style.display = "block";   // show progress indicator

            Round_Title_ID.style.display = "block";     // show round title 
            Round_Text_ID.style.display = "block";      // show round text
            
        }
    }

});

  
  
