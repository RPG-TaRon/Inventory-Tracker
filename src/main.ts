import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";

const products: Product[] = [
  new PhysicalProduct("SKU123", "Harry Potter", 20, 10),
  new DigitalProduct("SKU456", "Harry Potter E-book", 20, 7),
];

for (const product of products) {
  console.log(product.displayDetails());

  const finalPrice = calculateTax(product);
  console.log(`Final Price: $${finalPrice}`);

  if (product instanceof PhysicalProduct) {
    console.log(`Weight: ${product.formattedWeight}`);
  }

  if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.formattedFileSize}`);
  }
}