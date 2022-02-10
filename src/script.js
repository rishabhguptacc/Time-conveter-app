var hours ;


function convert(){
    hours = document.getElementById('input').value;
    console.log(hours);

    if ( document.getElementById('hrs2mins').checked == true)
        {
            document.getElementById('factPara').innerHTML = 
                "<p>"+ hours + " hour(s) = "+
                hoursToMinutes(hours) + " mins"
        }



    else if ( document.getElementById('hrs2secs').checked == true){
        document.getElementById('factPara').innerHTML = 
                "<p>"+ hours + " hour(s) = "+
                hoursToSeconds(hours) + " seconds"
    }

}


function hoursToMinutes(Hours){
    parseInt(Hours);

    return 60*Hours;
}
function hoursToSeconds(Hours){
    parseInt(Hours);

    return 60*60*Hours;
}