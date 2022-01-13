function checkSeals() {

    if (sealCounter == 60){

        roundTitle.innerHTML = "Round 2";
        ice3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        player.setAttribute('position', {x:7, y:1.6, z:-12});
        player.setAttribute('rotation', {x:-2.635, y:40.42, z:0});


    } else if (sealCounter == 100){

        roundTitle.innerHTML = "Round 3";
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
        //popup here
        bool_sealtask = false;
    }
}

    
                    




AFRAME.registerComponent('seal-task',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

    bool_sealtask = false;


    
$(document).ready(function () {
  
    subs_completed = 0;
    total_subs = 6;
  
    bar_transition = $('.circle .bar_transition .sub-progress')
    
    number = $('.number')
    number.html(subs_completed + '/' + total_subs)
  
    setSubtaskProgressBar(subs_completed, total_subs, bar_transition)
  
  
    $(document).on('click', '.add', function () {

      subs_completed += 1/10

      $('.number').html(subs_completed + '/' + total_subs)
  
      reload = $('.reload')
      reload.data('completed', subs_completed)
      modulo = reload.data('modulo')
      toggle = reload.data('toggle')
      total = reload.data('total')
  
      updateSubtaskProgressBar(subs_completed, total, bar_transition, toggle, modulo, reload)
    })
  
    

  
  });
       
  
      
      

    

    
    //setting this to false for now to reduce memory usage
   
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

    click = document.querySelector('#click_sound');

    roundTitle = document.getElementById('Round_Title_ID');


    sealCounter = 0;
        
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
            } 
            sealCounter+=1;
            checkSeals();
        }

    });

    seal3.addEventListener('click', ()=>{
        if (bool_sealtask == true){

            seal3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    seal4.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    seal5.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    seal6.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            sealCounter+=1;
            checkSeals();
            click.play();
        }
    });

    },

    tick: function(){

        playerPos = player.getAttribute('position');
        playerRot = player.getAttribute('rotation');
        circlePos = circle.getAttribute('position');

        xPlayer = ((playerPos.x - circlePos.x)**2);
        yPlayer = ((playerPos.y - circlePos.y)**2);
        zPlayer = ((playerPos.z - circlePos.z)**2);
        playerSum = xPlayer + yPlayer + zPlayer;
        distance = Math.sqrt(playerSum);

            
        //console.log(bool_sealtask);
        //console.log(sealCounter);



        //console.log(playerPos);
        //console.log(playerRot);

        if (distance < 1.8){

            bool_sealtask = true;

        }

        if (bool_sealtask == true && present == true){

            Button_Arctic_Settings_ID.style.left = "1640px";
            Button_Arctic_Instructions_ID.style.left = "1560px";
            Button_Arctic_Reset_ID.style.display = "block";
            Button_Arctic_Exit_ID.style.display = "block";
            Round_Title_ID.style.display = "block";
            Round_Text_ID.style.display = "block";

            if (sealCounter < 60){

                player.setAttribute('movement-controls', {enabled:false});
                player2.setAttribute('wasd-controls', {enabled:false});
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

            Button_Arctic_Settings_ID.style.left = "1800px";
            Button_Arctic_Instructions_ID.style.left = "1720px";
            Button_Arctic_Reset_ID.style.display = "none";
            Round_Title_ID.style.display = "none";
            Round_Text_ID.style.display = "none";
        }
    
 

    }



});


  
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
  
  
