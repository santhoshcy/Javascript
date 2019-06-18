var outerWear="t shirt"; //global var

function outLook()
{
    var outerWear="jacket";   //local var
    return outerWear;         // return value

}


console.log(outLook());    //loacl var precedence over global var
console.log(outerWear);

