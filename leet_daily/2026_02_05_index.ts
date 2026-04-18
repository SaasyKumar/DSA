function constructTransformedArray(nums: number[]): number[] {
    var out:number[] = [];
    for(var i:number = 0; i<nums.length ; i++){
        if(nums[i] != 0){
            var mod = (nums[i] + i)%nums.length;
            out[i] = (mod < 0)? nums[mod+nums.length]:nums[mod];
        }else{
            out[i] = nums[i];
        }
    }
    return out;
};