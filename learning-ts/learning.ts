const title = 'Hello Typescript!';

//Types

// string
const product: string = 'Keyboard';

// boolean
const isActive: boolean = true;

// number
const price: number = 100;

// Array
const categories: string[] = ['Computing', 'Multimedia'];
const categories2: Array<string> = ['Computing', 'Multimedia'];

// any
let order: any;
function setOrderNo() {
  order = '0001';
}

// Custom Types
type Categories = 'computing' | 'multimedia';
const category: Categories = 'computing';

// create a custom type from an object
// key of enabales us to iterate over properties and extract to a new type

type Category = {
  computing: string;
  multimedia: string;
};
type CategoryType = keyof Category;

// functions

// regular function
function getProduct(): string {
  return 'Keyboard';
}

// with a return
function getFullname(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// doesnt have a return type
function printFullname(firstName: string, lastName: string): void {
  console.log(`${firstName} ${lastName}`);
}

// optional
function addToCart(productId: number, quantity?: number) {
  const product = {
    id: productId,
    // either null or undefined
    qty: quantity ?? 1,
  };
}

// Classes
export class User {
  firstName: string = '';
  lastName: string = '';
  private isActive: boolean = false;

  constructor(firstName: string, lastName: string, isActive: boolean = true) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
  }
  getFullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  get active(): boolean {
    return this.isActive;
  }
}

// instanceof
class Customer extends User {
  taxNumber: number;
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}
const account: User | Customer = undefined;

if (account instanceof Customer) {
  const taxNo = account.taxNumber;
} else {
  const name = account.getFullname();
}
