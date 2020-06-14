var goods = [
  { title: 'Shirt', price: 150 , i: '1' },
  { title: 'Socks', price: 50 , i: '2' },
  { title: 'Jacket', price: 350 , i: '3' },
  { title: 'Shoes', price: 250 , i: '4' },
  { title: 'Cosmic nanosuit', i: '5'},
    { title: 'invisibility cloak', price: 784585 },
];
  
var renderGoodsItem = (title = "Без название" , price = "Цена не указана", i = "nopic") => {
  return `<div class="goods-item"><img src="./img/${i}.jpg" alt="goodspic" class="goods-pic"><h3>${title}</h3><p>${price}</p></div>`;
};
  
const renderGoodsList = (list) => {
  const goodsList = list.map(item => renderGoodsItem(item.title,  item.price, item.i ));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
} 
renderGoodsList(goods);