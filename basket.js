let basket = [];
while(question = confirm("Ви хочете ще щось покласти у корзину?")){
    basket.push(prompt("Введіть продукт, який хочете покласти в корзину"));
}
while(basket.length > 0){
    alert(basket);
    alert(basket.pop());
}
alert("Продукти у візку закінчились");