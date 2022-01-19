var countDownDate = new Date("4 4 , 2022 00:00:00").getTime();
let countDownFunction = setInterval(function(){
    var now = new Date().getTime();
    var dis = countDownDate - now;


    var days = Math.floor(dis / (1000 * 60 * 60 * 24 ));
    var hours = Math.floor((dis % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    var mints = Math.floor((dis % (1000 * 60 * 60 )) / (1000 * 60 ));
    var sec = Math.floor((dis % (1000 * 60 )) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours ;
    document.getElementById('mints').innerHTML = mints ;
    document.getElementById('sec').innerHTML = sec;
    if(days == 0){
        document.getElementById('days').innerHTML = '';
    }
})