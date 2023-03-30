function arrangeArrayNumbers(numbers){
    let result = [];
    numbers.sort((a, b) => a - b);

    let first = numbers[0],
        last = numbers[0];
    
    for (let i = 1; i < numbers.length; i++){
        if ( numbers[i] === (last+1)){
            last = numbers[i];
        } else if (numbers[i] !== last){
            if (first === last){ result.push(last);
            } else {result.push(`${first}-${last}`);}
            first = last = numbers[i];
        }
        if (i === numbers.length-1){
            if (first === last){ result.push(last);
            } else {result.push(`${first}-${last}`);}
        }        
    }

    console.log(result);
}


arrangeArrayNumbers([10,5,100,6,3,11,2,4,3,3,3,89,1,7,5]);
arrangeArrayNumbers([10,5,100,6,3,89]);

arrangeArrayNumbers([1,2,3,4,6,10,11,12,15]);
arrangeArrayNumbers([1,3,4,6,7,8,10,11,12]);
arrangeArrayNumbers([1,2,3,5,6,7]);
