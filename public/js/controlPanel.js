AFRAME.registerComponent('control-panel',{

    init:function(){

    buttonPast = document.querySelector('#button1');
    buttonPresent = document.querySelector('#button2');
    buttonFuture = document.querySelector('#button3');
    enviroModel = document.querySelector('#environment_model'); 

    past = false;
    present = false;
    future = false;

    

   
    buttonPast.addEventListener('click', ()=>{

        console.log("Past Pressed");
    });

    buttonPresent.addEventListener('click', ()=>{

        
        enviroModel.setAttribute('gltf-model', "/assets/environment-present.glb");
        
        console.log("Present Pressed");
    });

    buttonFuture.addEventListener('click', ()=>{

        enviroModel.setAttribute('gltf-model', "/assets/environment-future.glb");
        
        console.log("Future Pressed");
    });
    
}




});
