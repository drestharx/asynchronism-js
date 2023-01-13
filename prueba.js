function isValidWalk(walk = []) {
    //insert brilliant code here  
    let location = 0;
    walk.forEach(letter => {
        if(letter === 'n') {
            location += 1;
        } else if(letter === 'e') {
            location += 1;
        } else if(letter === 'w') {
            location -= 1;
        } else if(letter === 's') {
            location -= 1;
        }
    });
    console.log(location);
    console.log(walk.length);
    
    if(walk.length == 10 && location == 0) {
        return true;
    } else {
        return false;
    }
}

const travel = ['n','s','n','e','s','w','s','w','n','e'];
const cuestion = isValidWalk(travel);
console.log(cuestion);