AFRAME.registerComponent('seal-task',{

    init:function(){

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

    bool_sealtask = false;

    
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

    sealCounter = 0;


    },

    tick: function(){

        player = document.querySelector('#player');   
        circle = document.querySelector('#cylinder_red');

        playerPos = player.getAttribute('position');
        circlePos = circle.getAttribute('position');

        xPlayer = ((playerPos.x - circlePos.x)**2);
        yPlayer = ((playerPos.y - circlePos.y)**2);
        zPlayer = ((playerPos.z - circlePos.z)**2);
        playerSum = xPlayer + yPlayer + zPlayer;
        distance = Math.sqrt(playerSum);

        //console.log(distance);

        if (distance < 1.8){


            bool_sealtask = true;


        }


        if (bool_sealtask == true && present == true){

            ice1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            ice2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            ice3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            ice4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            ice5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
            ice6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

            seal1.addEventListener('click', ()=>{
    
                seal1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                sealCounter++;
    
            });
    
            seal2.addEventListener('click', ()=>{
    
                seal2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                sealCounter++;
            });
    
            seal3.addEventListener('click', ()=>{
    
                seal3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                sealCounter++;
            });
    
            seal4.addEventListener('click', ()=>{
    
                seal4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                sealCounter++;
            });
    
            seal5.addEventListener('click', ()=>{
    
                seal5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                sealCounter++;
            });
    
            seal6.addEventListener('click', ()=>{
    
                seal6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
                sealCounter++;
            });
    
        }
 

    }



});
