function switchCase(val)
{
    switch(val)
    {
    case 1:
    case 2:
    case 3:
        console.log("low");
        break;
    case 4:
    case 5:
    case 6:
        console.log("mid");
        break;
    case 7:
    case 8:
    case 9:
        console.log("high");
        break;
    default:
        console.log("enter correct option");

        
    }
}

switchCase(10)
