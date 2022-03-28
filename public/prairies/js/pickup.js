AFRAME.registerComponent('pickup', {
    schema:{
        pickedup: {type:'bool', default: false},
    },
    
    init: function() {

        var context = this;
        context.player = document.querySelector('#player2');
        context.selected = false;
        scene = document.querySelector('a-scene');
        increment = 0;
        bodyincrement = 0;
        bucketTooltipCounter = 0;

        factExitButton.addEventListener('click', ()=>{
            context.el.sceneEl.object3D.attach(context.el.object3D);
            context.data.pickedup = false;

            context.el.setAttribute('body', 'type:dynamic; shape:none;')
            context.el.setAttribute('shape__newBox' + bodyincrement, 'shape: box; halfExtents: 0.58 0.1 0.06; offset: 0 0 0; orientation: 0 0 0 1')
            gunBool = false;
        
            increment = 0;
            objectSelectedID = null;
            pickupSound.play();

        });


        infoButton.addEventListener('click', ()=>{

            if (bucketEndActivity === true){

                context.el.sceneEl.object3D.attach(context.el.object3D);
                context.data.pickedup = false;

                context.el.setAttribute('dynamic-body', 'mass:5;');
                increment = 0;
                objectSelectedID = null;
                pickupSound.play();
                bucketEndActivity = false;

            }


        });

        context.el.addEventListener('click', () => {
            increment++;
            console.log(increment);
            console.log("body",bodyincrement);

            if(context.data.pickedup === false){  //pickup

                objectSelectedID = context.el.object3D.el.id;

                context.data.pickedup = true;

                context.player.object3D.attach(context.el.object3D);//attach object to the player/camera
                context.el.setAttribute('position', {x:0.5, y:-0.3, z:-0.75});
                //context.el.removeAttribute('dynamic-body');

                if(objectSelectedID === 'gun'){
                    context.el.removeAttribute('body');
                    bodyincrement++;
                    gunBool = true;
                }else{
                    context.el.removeAttribute('dynamic-body');
                }

                pickupSound.play();




                if (objectSelectedID === "bucket"){
                    bucketTooltip.setAttribute("visible",false);
                    bucketTooltipCounter ++;
                }  else if (objectSelectedID === "gun"){
                    gunTooltip.setAttribute("visible",false);
                    targetTooltip.setAttribute("visible",true);
                }

                



            }
            if (context.data.pickedup === true && increment === 2) { //drop
                
                context.el.sceneEl.object3D.attach(context.el.object3D);
                context.data.pickedup = false;

                if(objectSelectedID === 'gun'){
                    context.el.setAttribute('body', 'type:dynamic; shape:none;')
                    context.el.setAttribute('shape__newBox' + bodyincrement, 'shape: box; halfExtents: 0.58 0.1 0.06; offset: 0 0 0; orientation: 0 0 0 1')
                    gunBool = false;
                }else{
                    context.el.setAttribute('dynamic-body', 'mass:5;');
                }

                increment = 0;
                objectSelectedID = null;
                pickupSound.play();
                
    
            }
                   
        });
    
    }
});