function check(a,b)
{
    if( a == b)           // == equals operator
    {
        return "equal ";

    }
    return "not equal";

}

console.log("equal condition = "+check(1,"1"));   // first var is type int and second is string 



function Check(a,b)
{ 
    if( a === b)        //=== strictly equals operator    
    {
        return "equal ";

    }
    return "not equal";

}

console.log("strictly equal condition = "+Check(1,"1"));  // first var is type int and second is string 
