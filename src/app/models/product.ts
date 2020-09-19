export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string
    qty: number
    constructor(id, name, description='', price=0, imageUrl = 'https://api.time.com/wp-content/uploads/2016/01/rubiks-cube-robot.jpg?quality=85&w=1200&h=628&crop=1')
    {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    
    }
}
