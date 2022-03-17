function scaleAnimation(){

    polarBear1.addEventListener('mouseenter', ()=>{
        if (present == true){
            polarBear1.setAttribute('animation', {property:'scale', to: {x:0.73, y:0.73, z:0.73}, dur: 200});
        }
    });

    polarBear1.addEventListener('mouseleave', ()=>{
        if (present == true){
            polarBear1.setAttribute('animation', {property:'scale',to:{x:0.7, y:0.7, z:0.7}, dur: 200});
        }
    });

    polarBear2.addEventListener('mouseenter', ()=>{
        if (present == true){

            //polarBear2.setAttribute("transform", "scale(1.03)");
          polarBear2.setAttribute('animation', {property:'scale', to: {x:1.03, y:1.03, z:1.03}, dur: 200});

        } else if (future == true){
           // polarBear2.setAttribute('scale', {x:2.03, y:2.03, z:2.03});

          // polarBear2.setAttribute('animation', {property:'scale', to: {x:2.1, y:2.1, z:2.1}, dur: 200});
        }
    });

    polarBear2.addEventListener('mouseleave', ()=>{
        if (present == true ){

           polarBear2.setAttribute('animation', {property:'scale', to: {x:1, y:1, z:1}, dur: 200});


        }  else if (future == true){
             //polarBear2.setAttribute('scale', {x:2, y:2, z:2});
            //polarBear2.setAttribute('animation', {property:'scale', to: {x:2, y:2, z:2}, dur: 200});
            }
    });

    polarBear3.addEventListener('mouseenter', ()=>{
        if (present == true){
            polarBear3.setAttribute('animation', {property:'scale', to: {x:1.03, y:1.03, z:1.03}, dur: 200});
        }
    });

    polarBear3.addEventListener('mouseleave', ()=>{
        if (present == true){
            polarBear3.setAttribute('animation', {property:'scale', to: {x:1, y:1, z:1}, dur: 200});
        }
    });


    seal5.addEventListener('mouseenter', ()=>{
        if (present == true && bool_sealtask == false){
            seal5.setAttribute('animation', {property:'scale', to: {x:1.9, y:1.9, z:1.9}, dur: 200});
        }
    });

    seal5.addEventListener('mouseleave', ()=>{
        if (present == true && bool_sealtask == false){
            seal5.setAttribute('animation', {property:'scale', to: {x:1.8, y:1.8, z:1.8}, dur: 200});
        }
    });

    seal6.addEventListener('mouseenter', ()=>{
        if (present == true && bool_sealtask == false){
            seal6.setAttribute('animation', {property:'scale', to: {x:1.9, y:1.9, z:1.9}, dur: 200});
        }
    });

    seal6.addEventListener('mouseleave', ()=>{
        if (present == true && bool_sealtask == false){
            seal6.setAttribute('animation', {property:'scale', to: {x:1.8, y:1.8, z:1.8}, dur: 200});
        }  
    });

}

function factPopup(){
    polarBear1.addEventListener('click', ()=>{

        if (present == true){
            click.play();
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";
            factTitle.innerHTML = "Marine Animals";
            factText.innerHTML ="The polar bear is the only bear classified as a marine animal. This is because they spend most of their time on sea ice, and depend on the ocean for food.";

            if(voiceToggle.checked == true){

                marineSound.currentTime = 0;
                marineSound.play();
    
            }

        
        } else if(past == true){
            click.play();
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";
            factTitle.innerHTML = "Cubs";
            factText.innerHTML ="Polar bears cubs are usually born in December. When they are born, they are blind, toothless, and covered in soft white fur. Because of this, they completely depend on their mothers.";

            if(voiceToggle.checked == true){

                cubSound.currentTime = 0;
                cubSound.play();
    
            }
        }
        
    });   

    polarBear2.addEventListener('click', ()=>{

        if (present == true){
            click.play();
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";
            factTitle.innerHTML = "Really Big!";
            factText.innerHTML ="The polar bear is the largest living carnivore on land. Adult males can weight more than 800 pounds and stand over 2.5 meters long.";

            if(voiceToggle.checked == true){

                bigSound.currentTime = 0;
                bigSound.play();
    
            }
        
        } else if(future == true){
            click.play();
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";
            factTitle.innerHTML = "Threats";
            factText.innerHTML ="The loss of sea ice due to climate change is the biggest threat to the polar bear population. Other threats to polar bears include human violence, pollution, and industrial development.";
          
            if(voiceToggle.checked == true){

                threatSound.currentTime = 0;
                threatSound.play();
    
            }
        }
    }); 

    polarBear3.addEventListener('click', ()=>{

        if (present == true){
            click.play();
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";
            factTitle.innerHTML = "Great Swimmers";
            factText.innerHTML ="Polar bears can swim non-stop for many days. They need to do this to travel between pieces of sea ice. They can also swim up to 10 kilometers an hour.";
       
            if(voiceToggle.checked == true){

                swimSound.currentTime = 0;
                swimSound.play();
    
            }
        }
        
    }); 


    polarBear7.addEventListener('click', ()=>{

        if (past == true){
            click.play();
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";
            factTitle.innerHTML = "Sense of Smell";
            factText.innerHTML ="Polar bears have a great sense of smell. They use smell to find their favourite foods, like seals. Their noses are so strong that they can smell food up to 16 kilometers away.";
        
            if(voiceToggle.checked == true){

                smellSound.currentTime = 0;
                smellSound.play();
    
            }
        }
    }); 

    seal5.addEventListener('click', ()=>{

        if (present == true && bool_sealtask == false){
            click.play();
            factUI.style.display = "flex";
            Screen_Overlay_ID.style.display = "block";
            factTitle.innerHTML = "Hunting";
            factText.innerHTML ="Although polar bears are strong swimmers, they are not quick enough to catch seals in the water. Instead, polar bears catch seals from sea ice platform.";
       
            if(voiceToggle.checked == true){

                huntSound.currentTime = 0;
                huntSound.play();
    
            }
        }
    }); 

    seal6.addEventListener('click', ()=>{

        if (present == true && bool_sealtask == false){
        click.play(); 
        factUI.style.display = "flex";
        Screen_Overlay_ID.style.display = "block";
        factTitle.innerHTML = "Favourite Food";
        factText.innerHTML ="Seals are the polar bear’s favourite food. This is because polar bears rely on the high-fat content that seals have.";
      
            if(voiceToggle.checked == true){

                foodSound.currentTime = 0;
                foodSound.play();

            }

         }
    }); 

}

AFRAME.registerComponent('control-panel',{

    init:function(){

    buttonPast = document.querySelector('#button1');
    buttonPresent = document.querySelector('#button2');
    buttonFuture = document.querySelector('#button3');
    enviroModel = document.querySelector('#environment_model'); 
    navMesh = document.querySelector('#nav_mesh'); 
    water = document.querySelector('#river'); 
    player = document.querySelector('#player'); 
    light = document.querySelector('#light_spot'); 

    scene = document.querySelector('#scene'); 
    controlPanel = document.querySelector('#control_panel'); 
    circle = document.querySelector('#cylinder_red');
    title = document.getElementById('Title_Arctic_ID');

    startText1 = document.querySelector('#start_text1');
    startText2 = document.querySelector('#start_text2');

    tooltip1 = document.querySelector('#tooltip1');
    tooltip2 = document.querySelector('#tooltip2');
    tooltip3 = document.querySelector('#tooltip3');
    tooltip4 = document.querySelector('#tooltip4');
    tooltip5 = document.querySelector('#tooltip5');



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


    bigSound = document.querySelector('#fact_big');
    cubSound = document.querySelector('#fact_cubs');
    foodSound = document.querySelector('#fact_food');
    huntSound = document.querySelector('#fact_hunting');
    smellSound = document.querySelector('#fact_smell');
    swimSound = document.querySelector('#fact_swim');
    threatSound = document.querySelector('#fact_threat');
    marineSound = document.querySelector('#fact_marine');

    pastSound = document.querySelector('#past_voice');
    presentSound = document.querySelector('#present_voice');
    futureSound = document.querySelector('#future_voice');



    past = false;
    present = true;
    future = false;


    scaleAnimation();
    factPopup();

   
    buttonPast.addEventListener('click', ()=>{


        buttonPast.setAttribute("material", "color:#ff8b52");
        buttonPresent.setAttribute("material", "color:#e29f7e");
        buttonFuture.setAttribute("material", "color:#e29f7e");

        
        click.play();

        present = false;
        future = false;
        past = true;

        title.src="./css/imgs/arctic_title_past.png";

        enviroModel.setAttribute('gltf-model', "./assets/environment-past.glb");
        navMesh.setAttribute('gltf-model', "./assets/nav-past/nav-past.gltf");
        navMesh.setAttribute('position',  {x:-2.806, y:1.3, z:-9});

        scene.setAttribute('animation', {property:'rain.count', from:0, to:150, dur: 100, enabled:true});
        river.setAttribute('position', {x:-9.2, y: -0.534, z:-15});
        player.setAttribute('position', {x:-2, y:1.6, z:0});
        light.setAttribute('position', {x:-1.246, y:16.753, z:3.015});

        sign1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

        sign2.setAttribute('position', {x:3.771, y: 0, z:-2.502});
        sign2.setAttribute('rotation', {x:0, y:-32.040, z:0});

        startText1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        startText2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});


        
        tooltip1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        tooltip2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});          
        tooltip3.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        tooltip4.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});           
        tooltip5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});


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

        circle.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

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

        infoUI.style.display = "flex";
        Screen_Overlay_ID.style.display = "block";

        infoTitle.innerHTML ="The Past";
        infoText.innerHTML ="In the past, the Arctic environment was thriving, with a large number of polar bears and Arctic seals living there. Because of the large number of seals, polar bears were able to easily get their food, making them strong and healthy!";
        infoButton.innerHTML ="EXPLORE";

        if(voiceToggle.checked == true){

            pastSound.currentTime = 0;
            pastSound.play();

        }




    });

    buttonPresent.addEventListener('click', ()=>{

        buttonPast.setAttribute("material", "color:#e29f7e");
        buttonPresent.setAttribute("material", "color:#ff8b52");
        buttonFuture.setAttribute("material", "color:#e29f7e");

        
        click.play();

        present = true;
        future = false;
        past = false;
        
        title.src="./css/imgs/arctic_title_present.png";

        sign1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        sign2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        sign2.setAttribute('position', {x:-4.925, y: 0, z:-8.198});
        sign2.setAttribute('rotation', {x:0, y:35.020, z:0});

        startText1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        startText2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        
        tooltip1.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        tooltip2.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});
        tooltip3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        tooltip4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});           
        tooltip5.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        
        enviroModel.setAttribute('gltf-model', "./assets/environment-present.glb");
        navMesh.setAttribute('gltf-model', "./assets/nav-present/nav-present.gltf");
        navMesh.setAttribute('position',  {x:-2.567, y:1.3, z:-8.683});
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

        circle.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

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

        infoUI.style.display = "flex";
        Screen_Overlay_ID.style.display = "block";

        infoTitle.innerHTML ="The Present";
        infoText.innerHTML ="The present-day Arctic environment is at risk. Climate change has caused the Arctic to heat up at twice the spead, causing the ice to melt. This makes it harder for polar bears and other animals to get food, because they rely on the ice to move around. Because of this, the Arctic has begun changing. There are less polar bears, arctic seals, and ice in the Arctic now.";
        infoButton.innerHTML ="EXPLORE";
        
        if(voiceToggle.checked == true){

            presentSound.currentTime = 0;
            presentSound.play();

        }


    
        
    });

    buttonFuture.addEventListener('click', ()=>{

        buttonPast.setAttribute("material", "color:#e29f7e");
        buttonPresent.setAttribute("material", "color:#e29f7e");
        buttonFuture.setAttribute("material", "color:#ff8b52");
        
        click.play();

        present = false;
        future = true;
        past = false;

        title.src="./css/imgs/arctic_title_future.png";
        sign1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        sign2.setAttribute('position', {x:8.792, y:0.112, z:5.477});
        sign2.setAttribute('rotation', {x:0, y:-38.800, z:0});

        startText1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        startText2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        
        tooltip1.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        tooltip2.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        tooltip3.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});
        tooltip4.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});           
        tooltip5.setAttribute('animation', {property:'visible', from: false, to: true, dur: 100, enabled:true});

        enviroModel.setAttribute('gltf-model', "./assets/environment-future.glb");
        navMesh.setAttribute('gltf-model', "./assets/nav-future/nav-future.gltf");
        navMesh.setAttribute('position',  {x:0.365, y:-3, z:-5.543});

        scene.setAttribute('animation', {property:'rain.count', from:0, to:0, dur: 100, enabled:true});
        river.setAttribute('position', {x:-9.2, y: -1.14, z:-15});
        player.setAttribute('position', {x:2.8, y:1.6, z:8});

        controlPanel.setAttribute('position', {x:6.39, y:0.615, z:3.9});
        controlPanel.setAttribute('rotation', {x:-30, y:-26, z:0});


        circle.setAttribute('animation', {property:'visible', from: true, to: false, dur: 100, enabled:true});

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

        infoUI.style.display = "flex";
        Screen_Overlay_ID.style.display = "block";

        infoTitle.innerHTML ="The Future";
        infoText.innerHTML ="The future Arctic environment will be very different than it is today. If climate change continues, the ice will continue to melt and polar bears and other animals will not be able to get food. This would mean an empty, iceless land. Unless we change our ways and save the polar bear population, the polar bear will become extinct in the future.";
        infoButton.innerHTML ="EXPLORE";


        if(voiceToggle.checked == true){

            futureSound.currentTime = 0;
            futureSound.play();

        }

    
    });
    
}




});
