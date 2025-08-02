import productModel from "../models/product.js";

export const sanitizeUser = (user) => {
  return {
    id: user.id,
    email: user.email,
    addresses: user.addresses,
    orders: user.orders,
    role: user.role,
  };
};

export const decreaseStocks = (order) => {
  order.products.forEach(async (item) => {
    // create differen service for this

    await productModel.findByIdAndUpdate(item.product.id, {
      $inc: { stock: -1 * item.quantity },
    });

    //this also works
    //  let product = await productModel.findOne({_id: item.product.id})
    //  product.$inc('stock',-1 * item.quantity);
    //  await product.save()
  });
};

export const cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // console.log('token in req-cookies-',token)
  // console.log('req.cookies-',req.cookies)
  return token;
};
