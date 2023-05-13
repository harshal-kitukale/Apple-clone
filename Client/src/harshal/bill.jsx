export let billDetail;
export const billDetailFunction = (cart) => {
    billDetail = {
        cart_total: 0,
        discount: 0,
        gst: 0,
        total_amount: 0,
      }; 
  console.log("jhhjbhbhb", cart);
    cart.forEach((item) => {
      billDetail.cart_total = billDetail.cart_total + Number(item.price);
      let discountPrice = billDetail.discount
      // (discountPrice/item.price)*100
      billDetail.discount = billDetail.discount + discountPrice;
      billDetail.gst = (billDetail.cart_total * 18) / 100;
      let Total = billDetail.cart_total - billDetail.discount + billDetail.gst;
      billDetail.total_amount = Total.toFixed(3);
    });
};