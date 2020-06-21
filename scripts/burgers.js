//Класс бургерлист где будет 2 бургера, для большого бугрера нужно создать метод экста где будет вся начинка, для всех видов бугрера будет метод приправа и майонез
class BurgerItem{
     constructor(title, price, ccl) {
    this.title = title;
    this.price = price 
    this.ccl = ccl 
    
  }
    addExtra(add){
        this.Extra = add;
    }
   
    addFilling(typeExtraTitle, typeExtraPrice, typeExtraCcl){
        this.Extra += typeExtraTitle;
        this.price += typeExtraPrice;
        this.ccl += typeExtraCcl;
    }
}
class Filling {
    constructor(title, price, ccl){
    this.title = title;
    this.price = price;
    this.ccl = ccl;
    }
} 
class Burger{
    constructor(BurgerItem, Filling){
        this.title = BurgerItem.title;
        this.price = BurgerItem.price + Filling.price;
        this.ccl = BurgerItem.ccl +Filling.ccl;
        this.Mayo = false;
        this.Spice = false;
    }
     addMayo(){
        this.Mayo = true;
        this.price += 20;
        this.ccl += 5;
    }
    addSpice(){
        this.Spice = true;
        this.price += 15;
    }
}
const Cheese = new Filling('Cheese',10,20);
const Salad = new Filling('Salas',20);
const Potato = new Filling ('Potato',15,10);

const Small = new BurgerItem('Small', 50, 20);
const Big = new BurgerItem('Big', 100, 40);

const SmallBrugerWithPotato = new Burger(Small, Potato);
SmallBrugerWithPotato.addMayo();
console.log(SmallBrugerWithPotato);


