AFRAME.registerComponent('control-panel',{

    init:function(){

    buttonPast = document.querySelector('#button1');
    buttonPresent = document.querySelector('#button2');
    buttonFuture = document.querySelector('#button3');
    enviroModel = document.querySelector('#environment_model'); 
    water = document.querySelector('#river'); 
    player = document.querySelector('#player'); 
    light = document.querySelector('#light_spot'); 

    scene = document.querySelector('#scene'); 
    controlPanel = document.querySelector('#control_panel'); 


    seal1 = document.querySelector('#seal1');
    seal2 = document.querySelector('#seal2');
    seal3 = document.querySelector('#seal3');
    seal4 = document.querySelector('#seal4');
    seal5 = document.querySelector('#seal5');
    seal6 = document.querySelector('#seal6');
    seal7 = document.querySelector('#seal7');
    seal8 = document.querySelector('#seal8');
    seal9 = document.querySelector('#seal9');

    polarBear1 = document.querySelector('#polarBear1');
    polarBear2 = document.querySelector('#polarBear2');
    polarBear3 = document.querySelector('#polarBear3');
    polarBear4 = document.querySelector('#polarBear4');
    polarBear5 = document.querySelector('#polarBear5');
    polarBear6 = document.querySelector('#polarBear6');
    polarBear7 = document.querySelector('#polarBear7');
    polarBear8 = document.querySelector('#polarBear8');


    past = false;
    present = false;
    future = false;

    

   
    buttonPast.addEventListener('click', ()=>{

        enviroModel.setAttribute('gltf-model', "/assets/environment-past.glb");
        scene.setAttribute('animation', {property:'rain.count', from:0, to:150, dur: 100, enabled:true});
        river.setAttribute('position', {x:-9.2, y: -0.534, z:-15});
        player.setAttribute('position', {x:-2, y:1.6, z:0});
        light.setAttribute('position', {x:-1.246, y:16.753, z:3.015});

        polarBear1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear7.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear8.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal7.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal8.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal9.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        controlPanel.setAttribute('position', {x:1.149, y: 0.66, z:-3.7});
        controlPanel.setAttribute('rotation', {x:-30, y:-18, z:0});


        polarBear1.setAttribute('position', {x:-1.1, y:0, z:-7.675});
        polarBear1.setAttribute('scale', {x:0.7, y:0.7, z:0.7});
        polarBear1.setAttribute('rotation', {x:0, y:25, z:0});

        polarBear2.setAttribute('position', {x:-2.623, y:0, z:-8.454});
        polarBear2.setAttribute('scale', {x:1, y:1, z:1});
        polarBear2.setAttribute('rotation', {x:0, y:25, z:0});

        polarBear3.setAttribute('position', {x:2.591, y:0, z:-15.142});
        polarBear3.setAttribute('scale', {x:1, y:1, z:1});
        polarBear3.setAttribute('rotation', {x:0, y:2.460, z:0});


        seal1.setAttribute('position', {x:-13.900, y:-0.282, z:-28.626});
        seal1.setAttribute('rotation', {x:0, y:169.890, z:0});

        seal2.setAttribute('position', {x:-9.994, y:0.096, z:-15.571});
        seal2.setAttribute('rotation', {x:-32.930, y:194.380, z:13.240});

        seal3.setAttribute('position', {x:-21.809, y:-0.025, z:-15.807});

        seal4.setAttribute('position', {x:-17.020, y:-0.005, z:-12.820});
        seal4.setAttribute('rotation', {x:16.860, y:-70.950, z:0});

        seal5.setAttribute('position', {x:-17.421, y:-1.147, z:-15.934});
        seal5.setAttribute('rotation', {x:11.870, y:233.990, z:0});

        seal6.setAttribute('position', {x:-12.899, y:-1.147, z:-13.374});
        seal6.setAttribute('rotation', {x:11.870, y:87.200, z:0});

        seal7.setAttribute('position', {x:-7.879, y:-1.297, z:-19.537});
        seal7.setAttribute('rotation', {x:11.870, y:320.690, z:0});

        seal8.setAttribute('position', {x:-5.899, y:-0.367, z:-11.903});
        seal8.setAttribute('rotation', {x:-2.690, y:110.980, z:0});

        seal9.setAttribute('position', {x:-17.436, y:-0.276, z:-7.149});
        seal9.setAttribute('rotation', {x:0, y:303.100, z:0});


    });

    buttonPresent.addEventListener('click', ()=>{

        
        enviroModel.setAttribute('gltf-model', "/assets/environment-present.glb");

        scene.setAttribute('animation', {property:'rain.count', from:0, to:0, dur: 100, enabled:true});

        river.setAttribute('position', {x:-9.2, y: -0.534, z:-15});
        player.setAttribute('position', {x:0, y:1.6, z:0});

        controlPanel.setAttribute('position', {x:-7.132, y: 0.66, z:-6});
        controlPanel.setAttribute('rotation', {x:-30, y:42.000, z:0});

        polarBear1.setAttribute('position', {x:2.97, y:0, z:-3.31});
        polarBear1.setAttribute('scale', {x:0.7, y:0.7, z:0.7});
        polarBear1.setAttribute('rotation', {x:0, y:25, z:0});
    
        polarBear2.setAttribute('position', {x:2.4, y:0, z:-4.2});
        polarBear2.setAttribute('scale', {x:1, y:1, z:1});
        polarBear2.setAttribute('rotation', {x:0, y:25, z:0});
        
        polarBear3.setAttribute('position', {x:-2.09, y:0, z:-4.182});
        polarBear3.setAttribute('scale', {x:1, y:1, z:1});
        polarBear3.setAttribute('rotation', {x:0, y:-119.740, z:0});

        seal1.setAttribute('position', {x:-13.760, y:-0.101, z:-30.780});
        seal1.setAttribute('rotation', {x:0, y:207.000, z:0});

        seal2.setAttribute('position', {x:6.012, y:-0.132, z:-24.854});
        seal2.setAttribute('rotation', {x:-13.280, y:127.800, z:0});

        seal3.setAttribute('position', {x:-21.809, y:0.007, z:-15.807});
        seal3.setAttribute('rotation', {x:-13.360, y:246.100, z:0});

        seal4.setAttribute('position', {x:10.730, y:0.080, z:-16.500});
        seal4.setAttribute('rotation', {x:-21.820, y:109.900, z:-12.790});

        seal5.setAttribute('position', {x:-0.890, y:-0.212, z:-9.668});
        seal5.setAttribute('rotation', {x:0, y:234.000, z:0});

        seal6.setAttribute('position', {x:1, y:-0.228, z:-10.400});
        seal6.setAttribute('rotation', {x:0, y:53.820, z:0});

        polarBear1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear7.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear8.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        seal1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal6.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        seal7.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal8.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal9.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        light.setAttribute('position', {x:-1.246, y:16.753, z:-4.678});

        
    });

    buttonFuture.addEventListener('click', ()=>{

        enviroModel.setAttribute('gltf-model', "/assets/environment-future.glb");
        scene.setAttribute('animation', {property:'rain.count', from:0, to:0, dur: 100, enabled:true});
        river.setAttribute('position', {x:-9.2, y: -1.14, z:-15});
        player.setAttribute('position', {x:2.8, y:1.6, z:8});
        controlPanel.setAttribute('position', {x:6.39, y:0.615, z:3.9});
        controlPanel.setAttribute('rotation', {x:-30, y:-26, z:0});

        polarBear2.setAttribute('position', {x:-3, y:-0.7, z:-12.53});
        polarBear2.setAttribute('scale', {x:2, y:2, z:2});
        polarBear2.setAttribute('rotation', {x:0, y:50, z:0});

        polarBear1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        polarBear3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear7.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        polarBear8.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});


        seal1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal7.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal8.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        seal9.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        light.setAttribute('position', {x:-1.425, y:16.753, z:1.711});

    
    });
    
}




});
