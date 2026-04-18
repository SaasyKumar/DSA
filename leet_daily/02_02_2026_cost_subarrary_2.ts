function minimumCost(nums: number[], k: number, dist: number): number {
    var sum = nums[0];
    var mins:number[] = [];
    var indices:number[] = [];
    for(var i:number=1;i<k;i++){
        mins.push(nums[i]);
        indices.push(i);
    }

    for (var j:number = k; j < nums.length; j++) {
        if( nums[j] <= mins[mins.length -1] && j - indices[indices.length -1] <= dist){
            mins = mins.slice(1);
            indices = indices.slice(1);
            mins.push(nums[j]);
            indices.push(j);
        }
    }
    for(var i:number = 0; i<mins.length;i++){
        sum += mins[i];
    }
    return sum;
};