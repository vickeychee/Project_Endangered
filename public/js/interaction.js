AFRAME.registerComponent('interactions',{

    init:function(){

    box = document.querySelector('#box_clear');
    cylinder = document.querySelector('#cylinder_clear');
    sphere = document.querySelector('#sphere_clear');
    button = document.querySelector('#buttons');
    plane = document.querySelector('#plane');



    box.addEventListener('click', ()=>{

        box.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

    });

    cylinder.addEventListener('click', ()=>{

        cylinder.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

    });

    sphere.addEventListener('click', ()=>{

        sphere.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

    });

    button.addEventListener('click', ()=>{

        plane.setAttribute('animation', {property:'color', from:'#7BC8A4', to:'#ff9afb', loop:false, dur:1500, easing:'easeInOutQuad', enabled:true});

    });


    }



});
