function minCostT(grid: number[][], k: number): number {
    let m = grid.length -1 ;
    let n = grid[0].length -1;
    let tel:number = 0;
    var last_cost:number = grid[m][n];
  console.log(last_cost);
    let min_cost:number = -1;
    function assignMinCost(cost:number){
    if( min_cost == -1 || cost < min_cost){
        min_cost = cost;
        }
    }
    function reachLast(current_i:number,current_j:number,cost:number){
        //Return
        if(current_i == m && current_j == n){
            tel =0;
            cost += last_cost;
            //Destination reached  or Teleport possible
            assignMinCost(cost);
            return;
        }
        if(( tel !==k && grid[current_i][current_j] >= last_cost)){
            cost += grid[current_i][current_j];
            assignMinCost(cost);
            tel++;
            return;
        }
        cost += grid[current_i][current_j];
        if( current_i == m ){
            reachLast(current_i,current_j+1,cost);
        }else if( current_j == n){
            reachLast(current_i+1,current_j,cost);
        }else{
            reachLast(current_i+1,current_j,cost);
            reachLast(current_i,current_j+1,cost);
        }
    }
    reachLast(1,0,0);
    reachLast(0,1,0);
    return min_cost;
};