function minimumCost(nums: number[]): number {
    var sum:number =nums[0];
    var min_1:number = nums[1];
    var min_2:number = nums[2];
    for( var i:number=3;i<nums.length;i++){
        if( nums[i] < min_2 ){
            console.log(nums[i]);
            if( min_2 < min_1){
              min_1 = min_2;
            }
            min_2= nums[i];
        }else if( nums[i] < min_1){
            console.log(nums[i]);
            if( min_1 < min_2){
              min_2 = min_1;
            }
            min_1= nums[i];
        }
    }
    return sum + min_1 +min_2;
};
minimumCost([2,16,50,35,42,11,27,24,48,4])