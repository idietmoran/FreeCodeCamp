function chunk(arr, size) {
    var totalArray = [];
    
    for(var i = 0; i < arr.length; i += size){
        totalArray.push(arr.slice(i, i + size));
    };
    return totalArray;
    };

chunk(["a", "b", "c", "d"], 2);



