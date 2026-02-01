function minCost(n: number, edges: number[][]): number {
    function reset(){
        if(cost !=0) {
            costs.push(cost);
        }
        cost = 0;
        paths.push(Array.from(path));
        path.clear();
    }
    if( edges.length == 0){
        return -1;
    }
    let costs:number[]=[];
    let paths:any[] =[];
    let destination= n -1;
    let path = new Set();

    let cost:number = 0;
    for(var i:number = 0; i<edges.length;i++){
        var u:number= edges[i][0],v:number= edges[i][1],w:number = edges[i][2];
        if( u == destination){
            u=u^v;
            v=v^u;
            u=v^u;
            //Or just use temp and swap
            w=2*w;
        }
        cost +=w;
        if( u ==0 && path.has(0)){
            reset();
        }
        path.add(u);
        if( (v ==destination && path.has(0)) || (u ==0 && path.has(v))){
            path.add(v);
            reset();
        }else{
            path.add(v);
        }
    }
    return costs.sort((a,b)=>a-b)[0];
};