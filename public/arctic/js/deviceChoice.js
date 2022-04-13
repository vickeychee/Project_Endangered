// getting different device buttons
desktopBtn = document.getElementById('desktop-btn');
mobileBtn = document.getElementById('mobile-btn');
headsetBtn = document.getElementById('headset-btn');


desktopBtn.onclick= function(){

    deviceChoice = 1;
    localStorage.setItem("device", deviceChoice);
    // storing device choice 1 (desktop)

}

mobileBtn.onclick= function(){

    deviceChoice = 2;
    localStorage.setItem("device", deviceChoice);
    // storing device choice 2 (mobile)
}

headsetBtn.onclick= function(){

    deviceChoice = 3;
    localStorage.setItem("device", deviceChoice);
    // storing device choice 1 (headset)    
}
