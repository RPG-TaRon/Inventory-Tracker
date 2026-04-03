First thing to address. I was messing around with my files trying to get the errors away and someone a bunch of other files got created. Specifically .js files. I do not know how they got there but I just left them alone since the project was focused on .ts files

1. Type safety: TypeScript checks that each class, property, method, and argument uses the correct type. That helps catch mistakes early.

2. Inheritance: PhysicalProduct and DigitalProduct both reuse the shared properties and methods from Product, so you do not have to rewrite sku, name, price, or common behavior in each class.

3. Encapsulation and access modifiers: They help protect data and control access. public lets code use a property or method anywhere, private restricts access to only inside the class, and protected allows access inside the class and its subclasses.

4. Polymorphism: If you add a SubscriptionProduct, it can extend Product and have its own version of methods. The rest of the program can still treat it like a Product, so you can add it without changing much of the existing code.