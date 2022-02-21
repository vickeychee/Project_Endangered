desktopBtn = document.getElementById('desktop-btn');
mobileBtn = document.getElementById('mobile-btn');
headsetBtn = document.getElementById('headset-btn');


desktopBtn.onclick= function(){

    deviceChoice = 1;
    localStorage.setItem("device", deviceChoice);
}

mobileBtn.onclick= function(){

    deviceChoice = 2;
    localStorage.setItem("device", deviceChoice);
}

headsetBtn.onclick= function(){

    deviceChoice = 3;
    localStorage.setItem("device", deviceChoice);
}

