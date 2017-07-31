//ClozeCard constructor taking parameter text and cloze
var ClozeCard = function (text, cloze) {
    //instance of operator tests if something is same object
    //checking if this is clozeCard
    if(this instanceof ClozeCard) {
        //set fullText = to text bc that will equal entire text of the card
        this.fullText = text;
        //cloze is string we are removing from text and replacing with ... (answer)
        this.cloze = cloze;

        //checking if text includes cloze which is true or false
        if(text.includes(cloze)) {
            //true condition
            //replacing the cloze portion of text with ...
            this.partial = text.replace(cloze, '...')
        } else {
            //cloze not inside of text then error
            throw new Error(cloze + ' not found in ' + text);
        }
    } else {

        return new ClozeCard(text, cloze);
    }
};

//exporting ClozeCard constructor
module.exports = ClozeCard;
