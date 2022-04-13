function checkSeals() {
  
  // function for checking the seal counter

    if (sealCounter == 60){ // if there are 6 seals collected 

      if(voiceToggle.checked == true){ // if voice overs is toggled

          if(deviceChoice == 1){ // if device choice is desktop

            sealDesktopSound.pause(); //  pause voice over

          }else if(deviceChoice == 2){ // if device is mobile

            sealMobileSound.pause(); // pause voice over
          }

      }

      playerDetails.setAttribute('raycaster', 'far', 10); // shorten raycaster 

      factExitButton.style.display  = "none"; // exit button on popups
    
      sealInfoButton.style.display ="inline-flex"; // display round popup
      factUI.style.display = "inline-flex";
      Screen_Overlay_ID.style.display = "block";

      factTitle.innerHTML ="Good Job!"; // change round popup text
      factText.innerHTML = "You were able to collect all of the seals! Did you notice how easy it was to move around because of all the icebergs? This is how easy it used to be for polar bears to get food in the past.";
      sealInfoButton.innerHTML ="CONTINUE";


      if(voiceToggle.checked == true){ // if voice overs is toggled 

        round1Sound.currentTime = 0; // reset voice over time
        round1Sound.play(); // play voice over

      }

      
      sealInfoButton.addEventListener('click', ()=>{ // if "contine" button is clicked
          checkProgressBar(); // call check progress bar function
          roundTitle.innerHTML = "Round 2"; // change round text to round 2
          title.src="./css/imgs/arctic_title_present.png"; // change time period/enviornment indicator to present
      });


      // hiding ice 3 and 4
      ice3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
      ice4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

      // showing 4 seals
      seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
      seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
      seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
      seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

      // reset player position to start
      player.setAttribute('position', {x:7, y:1.6, z:-12});
      player.setAttribute('rotation', {x:-2.635, y:40.42, z:0});

      // add interactivty of 4 seals
      seal1.classList.add('interactive');
      seal2.classList.add('interactive');
      seal3.classList.add('interactive');
      seal4.classList.add('interactive');

        

    } else if (sealCounter == 100){ // if there are 10 seals collected 

        factUI.style.display = "inline-flex";
        Screen_Overlay_ID.style.display = "block";  // display round popup

        factTitle.innerHTML ="Good Job!"; // change round popup text
        factText.innerHTML = "You were able to collect all of the seals again! But did you notice how it was a bit harder this time because there were less icebergs? This is how it is for polars today. It has become much more difficult for them to get food.";
        sealInfoButton.innerHTML ="CONTINUE";

        if(voiceToggle.checked == true){  // if voice overs is toggled 

            round2Sound.currentTime = 0;  // reset voice over time
            round2Sound.play();  // play voice over

        }

        sealInfoButton.addEventListener('click', ()=>{ // if "contine" button is clicked
          checkProgressBar(); // call check progress bar function
          roundTitle.innerHTML = "Round 3";  // change round text to round 3
          title.src="./css/imgs/arctic_title_future.png";  // change time period/enviornment indicator to future

        });

        // hide ice
        ice1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        // show 2 seals
        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        // reset player position
        player.setAttribute('position', {x:7, y:1.6, z:-12});
        player.setAttribute('rotation', {x:-2.635, y:40.42, z:0});

        // enable player movement
        player.setAttribute('movement-controls', {enabled:true});
        player2.setAttribute('wasd-controls', {enabled:true});


        // add interactivty of 2 seals
        seal1.classList.add('interactive');
        seal2.classList.add('interactive');
    


    } else if (sealCounter > 100){  // if there are more than 10 seals collected 

        factUI.style.display = "inline-flex";
        Screen_Overlay_ID.style.display = "block";  // display round popup

        factTitle.innerHTML = "Oh No!";  // change round popup text
        factText.innerHTML = "You weren’t able to collect all of the seals this time! Did you notice how it was impossible this time because there was no icebergs? This is how hard it will be for polar bears to get food in the future. If the polar bears cannot get food, they will eventually become extinct.";
        sealInfoButton.innerHTML ="END ACTIVITY";

        if(voiceToggle.checked == true){ // if voice over is toggled 

          round3Sound.currentTime = 0;  // reset voice over time
          round3Sound.play(); // play voice over
  
        }

        sealInfoButton.addEventListener('click', ()=>{  // if "contine" button is clicked

            sealInfoButton.style.display ="none"; 
            factExitButton.style.display  = "inline-flex";   // display round popup
          
            bool_sealtask = false; // turn off collect seal task bool

            sealCounter = 0;               // reset seal counter
            round1 = false;               // turn off round 1
            sealTaskCounter +=1;         // incrase collect seal task counter

            title.src="./css/imgs/arctic_title_present.png"; // change time period/environemnt indicator to present

            playerDetails.setAttribute('raycaster', 'far', 20); // reset raycaster

            // show all seals
            seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

            // move all seals
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

            // add interactivty to all seals
            seal1.classList.add('interactive');
            seal2.classList.add('interactive');
            seal3.classList.add('interactive');
            seal4.classList.add('interactive');
            seal5.classList.add('interactive');
            seal6.classList.add('interactive');

            // show tooltip2
            tooltip2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

      
          });

    }
}

function checkProgressBar(){

  // function to check progress bar
  if(subs_completed == 0  && round1 == false){
    resetProgress(6);
    total_subs = 6; // setting total to 6
  }
  if (subs_completed >= 5.9){
      resetProgress(4);
      total_subs = 4; // setting total to 4
      round1 = true;
  }
  if(subs_completed >= 4 && round1 == true){
      resetProgress(2);
      total_subs = 2; // setting total to 2
  }
}

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
    subs_completed += Math.round(0.1 * 10) / 10

    fixed = Math.round(subs_completed.toFixed(1))

    $('.number').html(fixed + '/' + total_subs)

    reload = $('.reload')
    reload.data('completed', subs_completed)
    modulo = reload.data('modulo')
    toggle = reload.data('toggle')
    total = reload.data('total')

    updateSubtaskProgressBar(fixed, total, bar_transition, toggle, modulo, reload) // update progress bar
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
    updateSubtaskProgressBar(fixed, total, bar_transition, toggle, modulo, reload) // call function to update animation on progress bar
}

function resetSealTask(){

  // function to reset seal task

  // show all seals
  seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

  // show all ice
  ice1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  ice6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

  // position all seals
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

  // change round text to round 1
  roundTitle.innerHTML = "Round 1";

  // reset player position
  player.setAttribute('position', {x:7, y:1.6, z:-12});

  // round 1 boolean is set to false
  round1 = false;

  // reseting progress indicator values
  subs_completed = 0;
  sealCounter = 0;
  checkProgressBar();

  // reset raycaster
  playerDetails.setAttribute('raycaster', 'far', 12);

  // adding interacivty to all seals
  seal1.classList.add('interactive');
  seal2.classList.add('interactive');
  seal3.classList.add('interactive');
  seal4.classList.add('interactive');
  seal5.classList.add('interactive');
  seal6.classList.add('interactive');


}

function exitSealTask(){
  // function to exit the seal task
  
  // reset player position
  player.setAttribute('position', {x:7.77, y:1.6, z:-9.68});

  // changing time period/environemnt indicator to present
  title.src="./css/imgs/arctic_title_present.png";

  // hide all ice
  ice1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
  ice6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

  // show all seals
  seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
  seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

  // move seals
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

  // show tooltip2
  tooltip2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

  // enable player movement
  player.setAttribute('movement-controls', {enabled:true});
  player2.setAttribute('wasd-controls', {enabled:true});


  // reseting counter and progress bars
  bool_sealtask = false;
  sealCounter = 0;
  round1 = false;
  sealTaskCounter =0;
  roundTitle.innerHTML = "Round 1";
  subs_completed = 0;

  exit = false;
  begin =false;

  // hide popup
  sealInfoButton.style.display ="none";
  factExitButton.style.display  = "inline-flex";

  // reset raycaster
  playerDetails.setAttribute('raycaster', 'far', 20);

  // adding interacivty to all seals
  seal1.classList.add('interactive');
  seal2.classList.add('interactive');
  seal3.classList.add('interactive');
  seal4.classList.add('interactive');
  seal5.classList.add('interactive');
  seal6.classList.add('interactive');


}


AFRAME.registerComponent('seal-task',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

    bool_sealtask = false;
    round1 = false;
    sealTick = false;
    sealTaskCounter = 0;
    sealCounter = 0;


  $(document).ready(function () {

    // initializing progress bar
  
    subs_completed = 0
    total_subs = 6
  
    bar_transition = $('.circle .bar_transition .sub-progress')
    
    number = $('.number')
    number.html(subs_completed + '/' + total_subs)
  
    setSubtaskProgressBar(subs_completed, total_subs, bar_transition)


  });

    // initialze seals
    seal1 = document.querySelector('#seal1');
    seal2 = document.querySelector('#seal2');
    seal3 = document.querySelector('#seal3');
    seal4 = document.querySelector('#seal4');
    seal5 = document.querySelector('#seal5');
    seal6 = document.querySelector('#seal6');

    // initialze ice
    ice1 = document.querySelector('#ice1');
    ice2 = document.querySelector('#ice2');
    ice3 = document.querySelector('#ice3');
    ice4 = document.querySelector('#ice4');
    ice5 = document.querySelector('#ice5');
    ice6 = document.querySelector('#ice6');

    // initialze player
    player = document.querySelector('#player');
    player2 =  document.querySelector('#player2');   
    playerDetails = document.querySelector('#player-details');

    // initialze step to start
    circle = document.querySelector('#cylinder_red');

    // initialze avtivity signs   
    sign1 = document.querySelector('#sign1');
    sign2 = document.querySelector('#sign2');

    // initialze round title
    roundTitle = document.getElementById('Round_Title_ID');

    // initialze progress indicator
    progressCircle = document.getElementById('Progress_Circle_ID');

    // initialze html button
    resetButton = document.getElementById('Button_Arctic_Reset_ID');
    exitButton = document.getElementById('Button_Arctic_Exit_ID');

    // initialze sound effects  
    click = document.querySelector('#click_sound'); 
    round1Sound = document.querySelector('#seal_round1');
    round2Sound = document.querySelector('#seal_round2');
    round3Sound = document.querySelector('#seal_round3');

    // initialze voice overs
    sealDesktopSound = document.querySelector('#seal_instruction_desktop');
    sealMobileSound = document.querySelector('#seal_instruction_mobile');


    resetButton.addEventListener('click', ()=>{
       // click listener for reset button  
      resetSealTask();
    });


    exitButton.addEventListener('click', ()=>{

       // click listener for exit button        
        exitSealTask();

        // hide seal task html ui elements
        Button_Arctic_Reset_ID.style.display = "none";
        Button_Arctic_Exit_ID.style.display = "none";
        Round_Title_ID.style.display = "none";
        Round_Text_ID.style.display = "none";
        progressCircle.style.display = "none";

        // turn off collect the seal tick function
        sealTick = false;

    });
    
    ice1.addEventListener('click', ()=>{
        // click listener for ice 1 and move player ontop
        player.setAttribute('position', {x:-5.6, y:1.6, z:-17.52});

    });

    ice2.addEventListener('click', ()=>{
        // click listener for ice 2 and move player ontop
        player.setAttribute('position', {x:5, y:1.6, z:-16});

    });

    ice3.addEventListener('click', ()=>{
        // click listener for ice 3 and move player ontop
        player.setAttribute('position', {x:-11.2, y:1.6, z:-23.72});

    });

    
    ice4.addEventListener('click', ()=>{
        // click listener for ice 4 and move player ontop
        player.setAttribute('position', {x:0.7, y:1.6, z:-20.2});

    });

    ice5.addEventListener('click', ()=>{
        // click listener for ice 5 and move player ontop
        player.setAttribute('position', {x:-17.78, y:1.6, z:-13});

    });

    ice6.addEventListener('click', ()=>{
        // click listener for ice 6 and move player ontop
        player.setAttribute('position', {x:1.16, y:1.6, z:-27.8});

    });

    seal1.addEventListener('click', ()=>{     // if seal is clicked

        if (bool_sealtask == true){   // if collect the seal task is on 

            click.play(); // play click sound effect 

            if (sealCounter <100){ // if seal counter is less then 10
                seal1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true}); // hide seal 
                addProgress(); // add progress to progress indicator
            } 
            sealCounter+=1; // increment seal counter 
            checkSeals(); // check seals counter function 

            seal1.classList.remove('interactive'); // remove seal interactivty
    
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
            seal2.classList.remove('interactive');
        }

    });

    seal3.addEventListener('click', ()=>{
        if (bool_sealtask == true){

            seal3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
            seal3.classList.remove('interactive');
        }
    });

    seal4.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
            seal4.classList.remove('interactive');
        }
    });

    seal5.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
            seal5.classList.remove('interactive');
        }
    });

    seal6.addEventListener('click', ()=>{

        if (bool_sealtask == true){

            seal6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
            addProgress();
            sealCounter+=1;
            checkSeals();
            click.play();
            seal6.classList.remove('interactive');
        }
    });

    },

    tick: function(){ // a tick function to keep checking if user has stepped to start


      if (sealTaskCounter < 1){

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
        if (distance < 1.8){

          // seal task boolean on
          bool_sealtask = true;
          sealTick = true;


      }

    }

      if(sealTick){

        if (bool_sealtask == true && present == true){

          if (begin == false && exit == false){
            sealsPopup.style.display = "flex";
            Screen_Overlay_ID.style.display = "block"; // display collect the seals instruction


          }else if (begin == true && sealCounter < 60 ){
            sealsPopup.style.display = "none";
            Screen_Overlay_ID.style.display = "none";
            Button_Arctic_Reset_ID.style.display = "block";
            Button_Arctic_Exit_ID.style.display = "block";
            Round_Title_ID.style.display = "block";
            Round_Text_ID.style.display = "block";
            progressCircle.style.display = "block";   // display collect the seals UI elements
            document.getElementById("Voice_Popup_ID").style.display="none";

          }


            if (sealCounter < 60){ 

                // shorten player raycaster
                playerDetails.setAttribute('raycaster', 'far', 12);

                // disable player movement
                player.setAttribute('movement-controls', {enabled:false});
                player2.setAttribute('wasd-controls', {enabled:false});

                // change time period/enviornment indicator to past
                title.src="./css/imgs/arctic_title_past.png";

                // hide tool tip
                tooltip2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

                // show all ice
                ice1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
                ice6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        
                // position on seals
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


          // collect the seals is exited before started
          Button_Arctic_Reset_ID.style.display = "none";
          Button_Arctic_Exit_ID.style.display = "none";
          Round_Title_ID.style.display = "none";
          Round_Text_ID.style.display = "none";
          progressCircle.style.display = "none";    // turn off all UI elements
          sealTick = false;
      }
    
 
    }

  }


});

  
  
