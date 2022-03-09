AFRAME.registerComponent('pickup', {
    schema:{
        pickedup: {type:'bool', default: false},
    },
    
    init: function() {

        var context = this;
        context.player = document.querySelector('#player2');
        context.selected = false;
        scene = document.querySelector('a-scene');
        var increment = 0;
        var bodyincrement = 0;
        waterTooltipCounter = 0;


        context.el.addEventListener('click', () => {
            increment++;
            console.log(increment);
            console.log("body",bodyincrement);

            if(context.data.pickedup === false){  //pickup

                objectSelectedID = context.el.object3D.el.id;

                context.data.pickedup = true;

                context.player.object3D.attach(context.el.object3D);//attach object to the player/camera
                context.el.setAttribute('position', {x:0.5, y:-0.3, z:-0.75});


                if(objectSelectedID === 'net'){
                    context.el.removeAttribute('body');
                    bodyincrement++;
                }else{
                    context.el.removeAttribute('dynamic-body');
                }

                pickupSound.play();


                if (objectSelectedID === "net"){
                    netTooltip.setAttribute("visible",false);

                    if(waterTooltipCounter == 0){
                        waterTooltip.setAttribute("visible",true);
                        waterTooltipCounter++;
                        console.log(waterTooltipCounter);
                    }
                    
                }





            }
            if (context.data.pickedup === true && increment === 2) { //drop
                
                context.el.sceneEl.object3D.attach(context.el.object3D);
                context.data.pickedup = false;

                if(objectSelectedID === 'net'){
                    context.el.setAttribute('body', 'type:dynamic; shape:none;')
                    context.el.setAttribute('shape__newBox' + bodyincrement, 'shape: box; halfExtents: 0.9 0.1 0.7; offset: 0 0.2 0; orientation: 0 0 0 1')
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