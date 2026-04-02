import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";

const proudcts: Product[] = [
  new PhysicalProduct("SKU123", "Harry Potter", 20, 10),
  new DigitalProduct("SKU456", "Harry Potter E-book", 20, 7),
];

for (const product of proudcts) {
  console.log(product.displayDetails());
  
    const finalPrice = product.getPriceWithTax();
  console.log(`Final Price: $${finalPrice}`);
}


