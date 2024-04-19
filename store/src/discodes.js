// discounts.js

const discountsArray = [
    {
        code: "vapebg",
        decrease: 10
    }
];

const applyDiscount = (cartTotal, discountCode) => {
    const discount = discountsArray.find(discount => discount.code === discountCode);
    
    if (discount) {
        const discountedPrice = cartTotal - (cartTotal * discount.decrease / 100);
        return { discountedPrice, discountApplied: true };
    } else {
        return { discountedPrice: cartTotal, discountApplied: false };
    }
};

export { discountsArray, applyDiscount };
