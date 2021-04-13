function show<A, B, C> (firstName: A, lastName: B, money: C): void{
    const fullName = `${firstName} ${lastName} có ${money}`
    console.log(fullName);
    
}
show<string, string, number>('Dang', 'Tan', 1000)

class Product<X, Y, Z> {
    id: X;
    name: Y;
    price: Z;
    constructor(id: X, name: Y, price: Z){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showList<T>(list: T[]) : T[]{
        return list
    };
    showInfor(): void{
        console.log(`
        id: ${this.id}
        name: ${this.name}
        price: ${this.price}
        `);
        
    }

}
export default Product

// iphone.showList<string>(['Iphone 5', 'Iphone 6', 'Iphone 11']);
// nokia.showList<number>([1, 2, 3])