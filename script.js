function myFunction()
{
    let a = Number(document.getElementById("mathsone").value);
    let b = Number(document.getElementById("mathstwo").value);
    let c = Number(document.getElementById("mathsthree").value);


    if( a>=40 && b>=40 && c>=40)
    {
        var totalMark = a + b + c;
        alert("Total Mark "+totalMark)
        console.log(totalMark);
        var avg = totalMark/3;
        console.log(avg);
        alert("Average is "+avg)
        if(avg>90)
        {
            alert("Congrats! You got S grade")
        }
        else if(avg>=80 && avg<=90)
        {
            alert("Congrats! You got A grade")
        }
        else if(avg>=70 && avg<=80)
        {
            alert("Congrats! You got B grade")
        }
        else if(avg>=60 && avg<=70)
        {
            alert("Congrats! You got C grade")
        }
        else if(avg>=50 && avg<=60)
        {
            alert("Congrats! You got D grade")
        }
        else
        {
            alert("Congrats! You got E grade")
        }  
    }
    else
    {
       alert("Sorry! Better luck next time")
    }
}