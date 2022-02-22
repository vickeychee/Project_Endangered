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

      subs_completed += 1;
  
      $('.number').html(subs_completed + '/' + total_subs)

  
      reload = $('.reload')
      reload.data('completed', subs_completed)
      modulo = reload.data('modulo')
      toggle = reload.data('toggle')
      total = reload.data('total')
  
      updateSubtaskProgressBar(subs_completed, total, bar_transition, toggle, modulo, reload)
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

  function exitBucket(){

    resetButton.style.display = "none";
    exitButton.style.display = "none";
    progressCircle.style.display = "none";

    water.setAttribute('position', {x:1.521, y:-0.277, z: -13.578});
    lily.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});
    craneGroup.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});

    waterCounter = 0;
    subs_completed = 0;
    bucketTask = false;

    playerDetails.setAttribute('raycaster', 'far', 8);

    bucket.setAttribute('gltf-model', "/assets/bucket_empty.glb");
    
    bucketFull_Bool = false;

    checkDistance_Bool = true;
  }

  function resetBucketTask(){

    waterCounter = 0;
    subs_completed = 0;

    water.setAttribute('position', {x:1.521, y:-0.277, z: -13.578});
    lily.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});
    craneGroup.setAttribute('position', {x: 0.442, y:0.009, z: -4.969});

    bucket.setAttribute('gltf-model', "/assets/bucket_empty.glb");

    playerDetails.setAttribute('raycaster', 'far', 8);

    bucketFull_Bool = false;

    player.setAttribute('position', {x: -0.804, y:1.3, z: 1.57});
      
    $('.number').html(subs_completed + '/' + total_subs)

    updateSubtaskProgressBar(subs_completed, total, bar_transition, toggle, modulo, reload)

  }


AFRAME.registerComponent('bucket-task',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

    water = document.querySelector('#river');
    bucket = document.querySelector('#bucket');
    player = document.querySelector('#player');
    allCrops = document.querySelectorAll('.crop');
    circle = document.querySelector('#pad');
    lily = document.querySelector('#lily');
    craneGroup = document.querySelector('#crane_group');
    resetButton = document.getElementById('Button_Reset_ID');
    exitButton = document.getElementById('Button_Exit_ID');
    progressCircle = document.getElementById('Progress_Circle_ID');
    playerDetails = document.querySelector('#player-details');


    waterCounter = 0;

    bucketFull_Bool = false;
    checkDistance_Bool = true;
    bucketThreeTimes = false;
    bucketTask = false;
    


  $(document).ready(function () {
  
    subs_completed = 0
    total_subs = 4
  
    bar_transition = $('.circle .bar_transition .sub-progress')
    
    number = $('.number')
    number.html(subs_completed + '/' + total_subs)
  
    setSubtaskProgressBar(subs_completed, total_subs, bar_transition)
    
  });


    water.addEventListener('click', ()=>{

        if (bucketTask){
            if(objectSelectedID === "bucket"){

                if(bucketFull_Bool === false && bucketThreeTimes === false){
                     waterCounter +=1;
                     bucket.setAttribute('gltf-model', "/assets/bucket_full.glb");
                     splashSound.play();
                }
     
                bucketFull_Bool = true;
     
                if(waterCounter === 1){
                 water.setAttribute('position', {x:1.471, y:-0.611, z: -14.118});
                 lily.setAttribute('position', {x: 0.442, y:-0.349, z: -4.969});
                 craneGroup.setAttribute('position', {x: 0.442, y:-0.249, z: -4.969});
                }
                else if(waterCounter === 2){
                 water.setAttribute('position', {x:1.471, y:-1.386, z: -14.118});
                 lily.setAttribute('position', {x: 0.442, y:-1.110, z: -4.969});
                 craneGroup.setAttribute('position', {x: 0.442, y:-1.039, z: -4.969});
     
               }else if (waterCounter === 3){
                 water.setAttribute('position', {x:1.471, y:-2.400, z: -14.118});
                 lily.setAttribute('position', {x: 0.442, y:-4.378, z: -4.969});
                 craneGroup.setAttribute('position', {x: 0.442, y:-3.272, z: -4.969});
                 playerDetails.setAttribute('raycaster', 'far', 15);
     
               }
     
               if (bucketThreeTimes === true){
                   waterCounter +=1;
               }
     
               if (waterCounter > 4){
     
                   Screen_Overlay_ID.style.display = "block";
                   infoUI.style.display = "flex";
                   clickSound.play();
               }
               
     
                 
             }
        }
    

    });


    allCrops.forEach(function(allCropsElem){

        allCropsElem.addEventListener('click', ()=>{

            clickSound.play();

    
            if(objectSelectedID === "bucket" && bucketFull_Bool === true){
                bucket.setAttribute('gltf-model', "/assets/bucket_empty.glb");


                
                if(waterCounter <= 4){
                    addProgress();
                }


                if(waterCounter === 3){
                    bucketThreeTimes = true;
                }

                bucketFull_Bool = false;

    
            }

        });
    });



    },

    tick: function(){

        if(checkDistance_Bool){

            playerPos = player.getAttribute('position');
            playerRot = player.getAttribute('rotation');
            circlePos = circle.getAttribute('position');
    
            xPlayer = ((playerPos.x - circlePos.x)**2);
            yPlayer = ((playerPos.y - circlePos.y)**2);
            zPlayer = ((playerPos.z - circlePos.z)**2);
            playerSum = xPlayer + yPlayer + zPlayer;
            distance = Math.sqrt(playerSum);
    
            if (distance < 1.6){

                checkDistance_Bool = false;
                document.getElementById("Voice_Popup_ID").style.display="none";
                bucketPopup.style.display = "flex";
                Screen_Overlay_ID.style.display = "block";
                subs_completed = 0;
                $('.number').html(subs_completed + '/' + total_subs)

                reload = $('.reload')
                reload.data('completed', subs_completed)
                modulo = reload.data('modulo')
                toggle = reload.data('toggle')
                total = reload.data('total')

                updateSubtaskProgressBar(subs_completed, total, bar_transition, toggle, modulo, reload)
    
             }
        }

        if(bucketTask){
            

            bucket.classList.add('interactive');

            resetButton.style.display = "block";
            exitButton.style.display = "block";
            progressCircle.style.display = "block";


            
            
        }

    }

});

  
  
