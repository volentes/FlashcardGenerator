//constructor taking 2 parameters front, and back
var BasicCard = function(front, back) {
    if(this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    }else{
        return new BasicCard(front, back)
    }

};

//exporting BasicCard constructor
module.exports = BasicCard;
