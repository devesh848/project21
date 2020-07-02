function hasCollided(object1,object2){  
    var object1RightEdge = object2.x + object2.width 
    var object2LeftEdge = object2.x
    if (object1.x - object2.x < object1.width/2 + object2.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2){
        return true
    } 
        return false;

}