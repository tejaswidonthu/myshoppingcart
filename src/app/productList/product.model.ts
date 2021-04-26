export class Product{
    public name: string;
    public productId : string;
    public price: string;
    public description : string;
    public imagePath : string[];
    public stock : number;

    constructor(name : string , productId : string , price : string , desc : string, imagePath : string[] , stock : number){
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.description = desc;
        this.imagePath = imagePath;
        this.stock = stock;
    }
}