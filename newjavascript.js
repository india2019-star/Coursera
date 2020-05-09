var arr = ["Subhas","Rashbehari","Jatindranath","janakinath","Khudiram","Jatin","Anubhav"];

for(var i = 0; i < arr.length;i++)
{
    
    if(arr[i].charAt(0) === 'j' || arr[i].charAt(0) === 'J')
    {
        console.log("Goodbye " + arr[i]);
    }
    else
    {
        console.log("Hello " + arr[i]);
    }
}