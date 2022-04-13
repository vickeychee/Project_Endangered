AFRAME.registerComponent('pickup', {
    schema:{
        pickedup: {type:'bool', default: false},
    },
    
    init: function() {

        var context = this;
        context.player = document.querySelector('#player');
        context.selected = false;
        scene = document.querySelector('a-scene');
        var increment = 0;


        // if an object is picked up
        context.el.addEventListener('click', () => {

            increment++;

            if(context.data.pickedup === false){  //pickup

                context.data.pickedup = true;

                context.player.object3D.attach(context.el.object3D); //attach object to the player/camera
                context.el.setAttribute('position', {x:0.5, y:-0.16, z:-2});
                context.el.removeAttribute('body');
                context.el.removeAttribute('dynamic-body'); // removing physics properties

            }
            if (context.data.pickedup === true && increment === 2) { //drop

                context.el.sceneEl.object3D.attach(context.el.object3D); //attach object back to scene
                context.data.pickedup = false;
                context.el.setAttribute('dynamic-body', 'mass:5;'); // adding physics properties
                increment = 0;
                
            }
                   
        });
    
    }
});