export declare abstract class Product {
    private sku;
    name: string;
    protected price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=Product.d.ts.map