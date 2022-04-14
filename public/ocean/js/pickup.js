AFRAME.registerComponent('pickup', {
    schema:{
        pickedup: {type:'bool', default: false},
    },
    
    init: function() {

        context = this;
        context.player = document.querySelector('#player2');
        context.selected = false;
        scene = document.querySelector('a-scene');
        increment = 0;
        bodyincrement = 0;
        waterTooltipCounter = 0;

        // if an object is picked up
        context.el.addEventListener('click', () => {

            increment++;

            if(context.data.pickedup === false){  // pickup

                objectSelectedID = context.el.object3D.el.id;

                context.data.pickedup = true;

                context.player.object3D.attach(context.el.object3D);            // attach object to the player/camera
                context.el.setAttribute('position', {x:0.5, y:-0.3, z:-0.75});

                if(objectSelectedID === 'net'){                                 // if object picked up is net
                    context.el.removeAttribute('body');                         // remove physics properties
                    bodyincrement++;                                            // increment body 
                }else{
                    context.el.removeAttribute('dynamic-body');                 // for all other objects, remove dynamic body physics properties
                }

                pickupSound.play();                                             // play pickup sound effect

                if (objectSelectedID === "net"){                                // if object picked up is net
                    netTooltip.setAttribute("visible",false);                   // show net tooltips

                    if(waterTooltipCounter == 0){                               // if water tooltip counter is 0
                        waterTooltip.setAttribute("visible",true);              // show water tooltip
                        waterTooltipCounter++;                                  // increment water counter
                    }     
                }
            }
            if (context.data.pickedup === true && increment === 2) { // drop
                
                context.el.sceneEl.object3D.attach(context.el.object3D);        //attach object back to scene
                context.data.pickedup = false;

                if(objectSelectedID === 'net'){                                     // if object picked up is net
                    context.el.setAttribute('body', 'type:dynamic; shape:none;')    // set custom physics bounding box
                    context.el.setAttribute('shape__newBox' + bodyincrement, 'shape: box; halfExtents: 0.9 0.1 0.7; offset: 0 0.2 0; orientation: 0 0 0 1')
                }else{
                    context.el.setAttribute('dynamic-body', 'mass:5;');             // for all other objects, add regular physics properites
                }

                increment = 0;                  // reset increment
                objectSelectedID = null;        // set object selected to null
                pickupSound.play();             // play pickup sound effect
                
            }           
        });
    }
});