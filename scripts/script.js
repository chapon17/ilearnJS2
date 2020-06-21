
class GoodsItem {
  constructor(title = 'Без названия', price , i = 'nopic') {
    this.title = title;
    this.price = price;
    this.i = i;
  }
  render() {
     return `<div class="goods-item"><img src="./img/${this.i}.jpg" alt="goodspic" class="goods-pic"><h3>${this.title}</h3><p>${this.price}</p> <button class="goods-button" type="button">В корзину</button></div>  `;
  }
}
class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
  { title: 'Shirt', price: 150 , i: '1' },
  { title: 'Socks', price: 50 , i: '2' },
  { title: 'Jacket', price: 350 , i: '3' },
  { title: 'Shoes', price: 250 , i: '4' },
  { title: 'Cosmic nanosuit', price:585, i: '5'},
    { title: 'invisibility cloak', price: 365 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.i);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
    totalSumm(){
        let total = 0;
        this.goods.forEach( good => {  
        const  goodItem = new GoodsItem( good.price);
        total += good.price
        document.querySelector('.totalSumm').innerHTML = total;
        console.log(total);
        })
       
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalSumm();


