// Interfaces

interface Product {
  name: string;
  price: number;
  getCategories: () => string[];
  description?: string;
}

class Keyboard implements Product {
  name: string = 'Keyboard';
  price: number = 20;
  getCategories(): string[] {
    return ['Computing', 'Peripherals'];
  }
}

// type casting
const product = {
  name: 'Keyboard',
  price: 20,
} as Product;

// Generics

// this does not scale well if you want to add other types
function save(data: Product | Keyboard) {
  localStorage.setItem('Product', JSON.stringify(data));
}

function betterSave<T>(data: T) {
  localStorage.setItem('Product', JSON.stringify(data));
}

betterSave<Product>({
  name: 'Microphone',
  price: 45,
  getCategories: () => ['Peripherals', 'Multimedia'],
});

// Utility Types

//The Partial type is used when we want to create an object from an interface
// where all its properties are optional
const mic: Partial<Product> = {
  name: 'Microphone',
  price: 67,
};

// Pick type,
// which allows us to create an object from a subset of interface propertie
type Microphone = Pick<Product, 'name' | 'price'>;
const microphone: Microphone = {
  name: 'Microphone',
  price: 67,
};
