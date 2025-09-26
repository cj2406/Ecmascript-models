    let nums=[11,12,14,13,15,17,18,19];

    //the map() method
    let doubleNums=nums.map(num=>(num*num*num));
    console.log(`the new array :${doubleNums}`);

    //the unshift() and shift() method
    let newnum=nums.unshift()
    console.log(`The output of the .ushift method is :${newnum}\n`);

    //the .filter() method that returns a new array  after certain conditions are met
    let filtered=nums.filter(num=>(num%2==0))
    console.log(`these are the filtered output ${filtered}`)

    //the splice() method which removes a value from an array it takes
    //  an index and the number of values to remove

    nums.splice(2,2);
    console.log(nums);

    //the .push() method
    nums.push(20);
    console.log(`the new array after the push method is : ${nums}`);

    //thye foreEach() method
    nums.forEach((number,index)=>{
        console.log(`the number at index ${index} number is : ${number}`);
    })

    