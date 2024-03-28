// inga namma  mobile buying suggestion concept use panni js code poda porom:Alaparai Starting frnds!:)

let amount = "10k";

switch(true){
    case(amount > "60k"):
        console.log("buy iphone mobile");
        break; //imp eppo nammma switch case use panalum namma anga break or  continue use pananum (BL)
    case(amount > "10k"):
        console.log("buy android phone");
        break;
    case(amount > "5k" && amount < "10k"):
        console.log("buy button phone");
        break;
    default:
        console.log("u cant afford a phone ryt now!");
        break;

}