function checkSeals() {


    if (sealCounter == 60){

        ice3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        player.setAttribute('position', {x:7, y:1.6, z:-12});
        player.setAttribute('rotation', {x:-2.635, y:40.42, z:0});


    } else if (sealCounter == 100){

        
        ice1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        ice6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        player.setAttribute('position', {x:7, y:1.6, z:-12});
        player.setAttribute('rotation', {x:-2.635, y:40.42, z:0});

    }
                    

}


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

    player = document.querySelector('#player');   
    circle = document.querySelector('#cylinder_red');

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

        seal1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter+=1;
        checkSeals();

    });

    seal2.addEventListener('click', ()=>{

        seal2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter+=1;
        checkSeals();
    });

    seal3.addEventListener('click', ()=>{

        seal3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter+=1;
        checkSeals();
    });

    seal4.addEventListener('click', ()=>{

        seal4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter+=1;
        checkSeals();
    });

    seal5.addEventListener('click', ()=>{

        seal5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter+=1;
        checkSeals();
    });

    seal6.addEventListener('click', ()=>{

        seal6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter+=1;
        checkSeals();
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

        console.log(playerPos);
        //console.log(playerRot);

        if (distance < 1.8){

            bool_sealtask = true;

        }

        if (bool_sealtask == true && present == true){

            if (sealCounter < 60){

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
    


       

 

    }



});
