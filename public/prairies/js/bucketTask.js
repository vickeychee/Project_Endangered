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


    waterCounter = 0;
    bucketFull_Bool = false;

    checkDistance_Bool = true;


    water.addEventListener('click', ()=>{

        console.log("water clicked");

        if(objectSelectedID === "bucket"){

           bucket.setAttribute('gltf-model', "/assets/bucket_full.glb");

           if(bucketFull_Bool === false){
               
                waterCounter +=1;
           }

           bucketFull_Bool = true;
           console.log(waterCounter);

           if(waterCounter === 1){
            water.setAttribute('position', {x:1.521, y:-0.611, z: -13.578});
            lily.setAttribute('position', {x: 0.442, y:-0.349, z: -4.969});
            craneGroup.setAttribute('position', {x: 0.442, y:-0.249, z: -4.969});
           }
           else if(waterCounter === 2){
            water.setAttribute('position', {x:1.521, y:-1.386, z: -13.578});
            lily.setAttribute('position', {x: 0.442, y:-1.110, z: -4.969});
            craneGroup.setAttribute('position', {x: 0.442, y:-1.039, z: -4.969});
          }else if (waterCounter === 3){
            water.setAttribute('position', {x:1.521, y:-2.040, z: -13.578});
            lily.setAttribute('position', {x: 0.442, y:-4.378, z: -4.969});
            craneGroup.setAttribute('position', {x: 0.442, y:-3.272, z: -4.969});
          }
            
        }

    });


    allCrops.forEach(function(allCropsElem){

        allCropsElem.addEventListener('click', ()=>{

    
            if(objectSelectedID === "bucket" && bucketFull_Bool === true){
                bucket.setAttribute('gltf-model', "/assets/bucket_empty.glb");

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

                console.log("collided");
                bucket.classList.add('interactive');
                checkDistance_Bool = false;
    
             }
        }

    }

});

  
  
