var ProductModel = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shoppingcart');


var products = [
    new ProductModel({
        imagePath: "http://www.mobygames.com/images/covers/l/70472-heroes-of-might-and-magic-iii-complete-collector-s-edition-windows-front-cover.jpg",
        title: "Heroes 3",
        description: "Heroes of Might and Magic III: The Restoration of Erathia (commonly referred to as Heroes of Might & Magic 3, or simply Heroes 3) is a turn-based strategy game developed by Jon Van Caneghem through New World Computing originally released for Microsoft Windows by the 3DO Company in 1999. Its ports to several computer and console systems followed in 1999-2000. It is the third installment of the Heroes of Might and Magic series. The game's story is first referenced throughout Might and Magic VI: The Mandate of Heaven and serves as a prequel to Might and Magic VII: For Blood and Honor. The player can choose to play through seven different campaigns telling the story, or play in a scenario against computer or human opponents.",
        price: 5
    }),
    new ProductModel({
        imagePath: "http://www.mobygames.com/images/covers/large/1019416361-00.jpg",
        title: "Heroes 4",
        description: "Heroes of Might and Magic 4 is radically different from Heroes of Might and Magic 3. Some of the major differences are: 3D perspective on the adventure map and on the battlefield, heroes now take part in battles along with their creatures, six towns with standardised graphic layout, no more creature upgrades, requirement to select between creature dwellings.",
        price: 10
    }),
    new ProductModel({
        imagePath: "http://www.mobygames.com/images/covers/large/1149301927-00.jpg",
        title: "Heroes 5",
        description: "Heroes of Might and Magic V is the fifth instalment of the Heroes of Might and Magic fantasy turn-based strategy video game series. The game was released by Ubisoft in Europe on May 16, and then in the United States and Canada on May 24, 2006, with the publisher guiding Nival Interactive in its development. Following the closure of The 3DO Company, Ubisoft bought the rights to the Might and Magic franchise, and used Heroes V as a means to reboot the series with a brand new setting, called Ashan, and no continuity to previous titles.",
        price: 15
    })
];

var done = 0;
for (var i = 0; i<products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        };
    }); // save in mongoose model allows to save by save() method.
};

function exit(){
    mongoose.disconnect();
}

