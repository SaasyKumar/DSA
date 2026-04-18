function isTrionic(nums: number[]): boolean {
    var cnt:number = 0;
    var isIncreasing:boolean = true;
    if( nums.length == 3 || nums[1] < nums[0]){
        return false;
    }
    for(var i:number=0;i<nums.length -1;i++){
        if( nums[i+1] == nums[i]){
            return false;
        }
        if( (isIncreasing == true && nums[i+1] < nums[i]) || ( isIncreasing == false && nums[i+1] > nums[i])){
            cnt++;
            isIncreasing = !isIncreasing;
        }
    }
    if( cnt != 2){
        return false;
    }
    return true;
};