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

        infoButton.addEventListener('click', ()=>{          // if info button is clicked

            if (bucketEndActivity === true){                // check if bucket activity has ended

                context.el.sceneEl.object3D.attach(context.el.object3D);        // drop bucket back to scene
                context.data.pickedup = false;

                context.el.setAttribute('dynamic-body', 'mass:5;');             // add physics property back to bucket
                increment = 0;                                                  // reset increment
                objectSelectedID = null;                                        // set object selected to null
                pickupSound.play();                                             // play pickup sound effect
                bucketEndActivity = false;

            }
        });

        // if an object is picked up
        context.el.addEventListener('click', () => {
            increment++;
            console.log(increment);
            console.log("body",bodyincrement);

            if(context.data.pickedup === false){  //pickup

                objectSelectedID = context.el.object3D.el.id;

                context.data.pickedup = true;

                context.player.object3D.attach(context.el.object3D);    // attach object to the player/camera
                context.el.setAttribute('position', {x:0.5, y:-0.3, z:-0.75});

                if(objectSelectedID === 'gun'){                 // if object picked up is gun
                    context.el.removeAttribute('body');         // remove physics properties
                    bodyincrement++;                            // increment body 
                    gunBool = true;
                }else{
                    context.el.removeAttribute('dynamic-body'); // for all other objects, remove dynamic body physics properties
                }

                pickupSound.play();                             // play pickup sound effect

                if (objectSelectedID === "bucket"){                 // if bucket is picked up
                    bucketTooltip.setAttribute("visible",false);    // show tooltip
                    bucketTooltipCounter ++;
                }  else if (objectSelectedID === "gun"){            // if gun is picked up
                    gunTooltip.setAttribute("visible",false);       // hide gun tooltip
                    targetTooltip.setAttribute("visible",true);     // show target tooltip
                }

            }
            if (context.data.pickedup === true && increment === 2) { // drop
                
                context.el.sceneEl.object3D.attach(context.el.object3D);        // attach object back to scene
                context.data.pickedup = false;

                if(objectSelectedID === 'gun'){                                     // if object picked up is gun
                    context.el.setAttribute('body', 'type:dynamic; shape:none;')    // set custom physics bounding box
                    context.el.setAttribute('shape__newBox' + bodyincrement, 'shape: box; halfExtents: 0.58 0.1 0.06; offset: 0 0 0; orientation: 0 0 0 1')
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