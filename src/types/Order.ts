export interface Order {
  uid: number;
  ordernumber: number;
  products: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    quantity: number;
  }[];
}
