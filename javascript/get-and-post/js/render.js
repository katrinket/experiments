function renderCart(cart,selector){

    // $( ".result" ).text( JSON.stringify(data) );
    console.log(cart, selector)

    var totalPrice=0;
    var table = '<table><thead><tr><td>Product</td><td>Price</td></thead>'

    for(var i=0; i<cart.items.length; i++){

        table+='<tr><td>'+cart.items[i].name+'</td><td>'+cart.items[i].price+'</td></tr>';

        totalPrice+=cart.items[i].price;
        //console.log(cart.items[i].name)
    }

    table +='</table>'
    //
    $( selector ).html( table );

    alert('total basket price is '+ totalPrice)
}