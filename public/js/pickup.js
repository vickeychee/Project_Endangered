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
        var bodyincrement = 0;


        context.el.addEventListener('click', () => {
            increment++;
            console.log(increment);
            console.log("body",bodyincrement);

            if(context.data.pickedup === false){  //pickup

                context.data.pickedup = true;

                context.player.object3D.attach(context.el.object3D);//attach object to the player/camera
                context.el.setAttribute('position', {x:0.5, y:-0.16, z:-2});
                context.el.removeAttribute('body');
                context.el.removeAttribute('dynamic-body');
          
                console.log("picked up");

            }
            if (context.data.pickedup === true && increment === 2) { //drop

                
                context.el.sceneEl.object3D.attach(context.el.object3D);
                context.data.pickedup = false;
                context.el.setAttribute('dynamic-body', 'mass:5;');
                //context.el.setAttribute('body', 'type:dynamic; shape:none;')
                console.log("dropped");
                increment = 0;
                
    
            }
                   
        });
    
    }
});