AFRAME.registerComponent('seal-task',{

    init:function(){

   
    console.log("seals");
   
    seal1 = document.querySelector('#seal1');
    seal2 = document.querySelector('#seal2');
    seal3 = document.querySelector('#seal3');
    seal4 = document.querySelector('#seal4');
    seal5 = document.querySelector('#seal5');
    seal6 = document.querySelector('#seal6');

    sealCounter = 0;
    seal1.addEventListener('click', ()=>{

        seal1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter++;

    });

    seal2.addEventListener('click', ()=>{

        seal2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter++;
    });

    seal3.addEventListener('click', ()=>{

        seal3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter++;
    });

    seal4.addEventListener('click', ()=>{

        seal4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter++;
    });

    seal5.addEventListener('click', ()=>{

        seal5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter++;
    });

    seal6.addEventListener('click', ()=>{

        seal6.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sealCounter++;
    });

    }



});
