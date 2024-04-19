export const deliveryOptions = [
  {
    id: "standard",
    name: "Standard Delivery",
    deliveryIn: 6,
    deliveryFee: 5,
    details: [
      "Standard delivery option.",
      "No additional fee for delivery for orders above USD 25.00.",
      "Order will be transported by road.",
    ],
  },
  {
    id: "express",
    name: "Express Delivery",
    deliveryIn: 4,
    deliveryFee: 10,
    details: [
      "Express delivery option.",
      "Additional fee of USD 10.00 per order.",
      "Order will be transported by train.",
    ],
  },
  {
    id: "nextDay",
    name: "Next Day Delivery",
    deliveryIn: 1,
    deliveryFee: 15,
    details: [
      "Next delivery option.",
      "Additional fee of USD 15.00 per order.",
      "Order will be transported by air.",
      "Guaranteed next day delivery if ordered before 12 p.m.",
    ],
  },
];
