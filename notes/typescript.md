TypeScript concepts with examples:

### 1. Basic Types

#### Explanation:
TypeScript extends JavaScript by adding types to variables and functions, making the code easier to understand and maintain.

#### Example:
```typescript
let isDone: boolean = true;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number];
tuple = ["hello", 10]; // OK
```

### 2. Enums

#### Explanation:
Enums allow defining a set of named constants, making it easier to document intent or create a set of distinct cases.

#### Example:
```typescript
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
```

### 3. Interfaces

#### Explanation:
Interfaces define the structure that an object should adhere to.

#### Example:
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "John", lastName: "Doe" };
console.log(greeter(user));
```

### 4. Classes

#### Explanation:
Classes in TypeScript work similarly to JavaScript with added type annotations and access modifiers.

#### Example:
```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let snake = new Animal("Snake");
snake.move(5);
```

### 5. Inheritance

#### Explanation:
TypeScript supports inheritance using the `extends` keyword and allows overriding methods from the base class.

#### Example:
```typescript
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public bark(): void {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Buddy");
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Buddy moved 10m.
```

### 6. Generics

#### Explanation:
Generics provide a way to create reusable components that can work with different types without sacrificing type safety.

#### Example:
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(10);
```

### 7. Modules

#### Explanation:
Modules in TypeScript allow organizing code into self-contained units. You can export and import components between modules.

#### Example:

**math.ts (Module File):**
```typescript
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}
```

**app.ts (Importing Module):**
```typescript
import { add, subtract } from './math';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

### 8. Type Assertions

#### Explanation:
Type assertions are a way to tell the compiler what the type of a variable is when you know better than the type checker.

#### Example:
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### 9. Union and Intersection Types

#### Explanation:
Union types allow a variable to be one of several types, while intersection types combine multiple types into one.

#### Example:
```typescript
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(101); // OK
printId("202"); // OK

interface A {
    a: string;
}

interface B {
    b: string;
}

type C = A & B;

const obj: C = { a: "foo", b: "bar" };
```

### 10. Advanced Types

#### Explanation:
TypeScript provides advanced types such as type aliases, mapped types, and conditional types for more complex type scenarios.

#### Example:
```typescript
type NameOrAge = string | number;

type ReadonlyPerson = {
    readonly name: string;
    age: number;
};

type Keys = "option1" | "option2";
type Flags = { [K in Keys]: boolean };

type ConditionalType<T> = T extends string ? string : number;

let flag: Flags = { option1: true, option2: false };
```

### 11. Decorators

#### Explanation:
Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter to modify their behavior.

#### Example:
```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```

### 12. Namespaces

#### Explanation:
Namespaces provide a way to organize code and prevent name collisions.

#### Example:
```typescript
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

let validator = new Validation.LettersOnlyValidator();
console.log(validator.isAcceptable("Hello")); // Output: true
```

These examples cover a wide range of TypeScript concepts, providing a comprehensive understanding of the language and its features.