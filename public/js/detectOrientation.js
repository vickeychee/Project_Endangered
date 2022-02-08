AFRAME.registerComponent('detect-orientation',{ 


    init: function() {

    this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

    
},


tick: function(){

    console.log(window.screen.orientation.angle);
    console.log(navigator.maxTouchPoints);


    if (window.screen.orientation.angle === 0 && navigator.maxTouchPoints === 1){

       // infoUI.style.display = "none";


    }

}




});




