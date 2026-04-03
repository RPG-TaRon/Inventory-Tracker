import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return this.price * 1.1;
    }
    get formattedWeight() {
        return `${this.weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map