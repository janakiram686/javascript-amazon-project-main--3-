export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=
[{

  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:3,
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:3,
}];
}

function saveToStorage(){
localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productid){
    let matchingItem;
    cart.forEach((item)=>{
      if(item.productId===productid){
          matchingItem=item;
      }
    })
  
    if(matchingItem){
      matchingItem.quantity++;
    }else{
    cart.push({
      productId:productid,
      quantity:1,
    });
  }
  saveToStorage();
  }


  export function removeFromCart(productId){
      const newCart=[];
      cart.forEach((item)=>{
          if(item.productId!=productId){
            newCart.push(item);
          }
      });
      cart=newCart;
      saveToStorage();
  }