function check(a,b)
{
    if( a != b)     // != in equal operator
    {
        return "not equal ";

    }
    return "equal";

}

console.log("equal condition = "+check(1,"1"));



function Check(a,b)
{
    if( a !== b)      //!==   strictly inequal operator
    {
        return "not equal ";

    }
    return "equal";

}

console.log("strictly equal condition = "+Check(1,"1"));
