function calcDistance () {
    var speed = document.getElementById('speed').value;
    var time = document.getElementById('time').value;
    var distance = document.getElementById('distance');

    if (speed == "" || time == "") {
        alert ('Enter Values');
    }

    /*
    here we are converting the speed which is
    in km/h to m/s
    we can multiply by 1000 and divide by 3600
    or multiply by 3.6 */

    /*speedValue = (speed*1000)/3600 */
    speedValue = speed / 3.6;

    /*multiply by 60 to convert to seconds */
    timeValue = time*60;

    totalDistance = Math.round(speedValue*timeValue);
    
    document.getElementById('miles').style.display='inline';
    distance.innerHTML = totalDistance;
};
document.getElementById('miles').style.display='none';