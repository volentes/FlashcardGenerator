//Taking 2 parameters
var ClozeCard = function (text, cloze) {
    //checkings for closecard
    if(this instanceof ClozeCard) {
        //set fullText = to text
        this.fullText = text;
        //replaces with an answer
        this.cloze = cloze;

        //checking if text includes cloze which is true or false
        if(text.includes(cloze)) {
            //replacing the cloze portion 
            this.partial = text.replace(cloze, '...')
        } else {
            //throws error if not found
            throw new Error(cloze + ' not found in ' + text);
        }
    } else {

        return new ClozeCard(text, cloze);
    }
};

//exporting ClozeCard constructor
module.exports = ClozeCard;
