function Calculate_Discounted_Price (price, discount_Percentage) 
{
    const discount = (price * discount_Percentage) / 100;
    const price_With_Discount = price - discount;

    return price_With_Discount;
}

const original_Price = 100;
const discount_Percentage = 20;

const final_Price = Calculate_Discounted_Price(original_Price, discount_Percentage)

console.log(final_Price);

let total = 0;
const b = 1;

function Sum_Side_Effect(a)
{
    total = total + a;
    return total
}

Sum_Side_Effect(b)

console.log(total);


