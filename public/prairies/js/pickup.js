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
        bucketTooltipCounter = 0;

        context.el.addEventListener('click', () => {
            increment++;
            //console.log(increment);
           // console.log("body",bodyincrement);

            if(context.data.pickedup === false){  //pickup

                objectSelectedID = context.el.object3D.el.id;

                context.data.pickedup = true;

                context.player.object3D.attach(context.el.object3D);//attach object to the player/camera
                context.el.setAttribute('position', {x:0.5, y:-0.3, z:-0.75});
                context.el.removeAttribute('dynamic-body');

                pickupSound.play();



                if (objectSelectedID === "bucket"){
                    bucketTooltip.setAttribute("visible",false);
                    bucketTooltipCounter ++;
                }



            }
            if (context.data.pickedup === true && increment === 2) { //drop
                
                context.el.sceneEl.object3D.attach(context.el.object3D);
                context.data.pickedup = false;
                context.el.setAttribute('dynamic-body', 'mass:5;');
                increment = 0;
                objectSelectedID = null;
                pickupSound.play();
                
    
            }
                   
        });
    
    }
});