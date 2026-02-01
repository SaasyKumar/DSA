function nextGreatestLetter(letters: string[], target: string): string {
    var target_char:number = target.charCodeAt(0);
    for(var i =0; i< letters.length;i++){
        var diff:number = letters[i].charCodeAt(0) - target_char;
        if( diff > 0 ){
            return letters[i];
        }
    }
    return letters[0];
};