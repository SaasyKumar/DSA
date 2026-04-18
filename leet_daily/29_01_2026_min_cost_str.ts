export{};// To avoid ts duplicate function warning
function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    var len:number = source.length;
    var min_cost:number[] = Array(len).fill(-1);
    function getAllIndices(find:string){
      let indices:number[]=[];
      for( var i =0;i<changed.length;i++){
        if( changed[i] == find){
          indices.push(i);
        }
      }
      if( indices.length == 1){
        return indices[0];
      }
      if( indices.length == 0){
        return -1;
      }
      return indices;
    }
    function updateMinCost(index:number,cost:number){
      console.log(cost);
      if( min_cost[index] == -1 || min_cost[index] > cost){
        min_cost[index] = cost;
      }
    }
    
    function findMinCost(index:number,src:string,dst:string,c:number){
      console.log(src,dst);
      var index_of_target:number | number[] = getAllIndices(dst);
      if( min_cost[index] != -1 && c > min_cost[index]){
        return;
      }
      if( index_of_target == -1 ){
        console.log(dst);
        return false;
      }else if( typeof(index_of_target) !==  'object' ){
        //Exist only one pre image
        var pre_img:string = original[index_of_target];
        if( pre_img && pre_img == src){
          // Preimage is destination
          updateMinCost(index,cost[index_of_target]);
          return true;
        }else if(pre_img){
          console.log(pre_img);
          c += cost[index_of_target];
          console.log(c);
          // findMinCost(index,src,pre_img,c);
        }
      } else{
        for(var i:number=0;i<index_of_target.length;i++){
          var ind:number = index_of_target[i];
          console.log(cost[ind]);
          console.log(c);
          if( src == original[ind]){
            updateMinCost(index,c+cost[ind]);
            console.log("updated");
            continue;
          }
          console.log(src,original[ind],c+cost[ind]);
          findMinCost(index,src,original[ind],c+cost[ind]);
        }
      }
    }
  
    for(var i:number=0;i<source.length;i++){
      if( source[i] == target[i]){
        //No changes
        updateMinCost(i,0);
      }else{
        findMinCost(i,source[i],target[i],0);
      }
    }
    console.log(min_cost);
    var co:number=0;
    for( var i:number=0;i<min_cost.length;i++){
        co+=min_cost[i];
    }
    return co;
};
minimumCost("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]);