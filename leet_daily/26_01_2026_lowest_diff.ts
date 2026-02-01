function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a,b)=>a-b);
    var min_absolute_diff:number  =arr[arr.length -1]-arr[arr.length -2];
    for(var i:number = 0;i<arr.length;i++){
        var diff:number = arr[i+1] - arr[i];
        if( diff < min_absolute_diff){
            min_absolute_diff = diff;
        }
    }
    var hash = new Map<number, number>();
    for(var i:number=0;i<arr.length;i++){
        if( !hash.has(arr[i])){
            hash.set(arr[i], 1);
        }
    }
    var sol:number[][]=[];
    for(var i:number=0;i<arr.length;i++){
        if( hash.has(arr[i]+ min_absolute_diff)){
            sol.push([arr[i],arr[i]+ min_absolute_diff]);
        }
    }
    return sol;
};