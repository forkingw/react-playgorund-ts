// type GreetFunction = (a: string) => void

// function gerrter(fn: GreetFunction) {
//   fn("Hello World")
// }

// function printToConsole(s: string) {
//   console.log(s)
// }

// gerrter(printToConsole)
// type DescribableFunction =  {
//   description: string;
//   (someArg: number): boolean
// }

// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " return " + fn(6))
// }

// function test () {
//   return true
// }
// test.description = 'this is a test function'
// doSomething(test)

// function fn(ctor: {
//   new (s: string): {a: string}
// }) {
//   return new ctor("hello")
// }

// fn(Test)
// function Test (a: string) {
//   this.a = a
// }

// console.log(fn(function A (str: string) {return new Date()}))

// ! Typescript 构造函数！ 
// interface T {
//   s: string
// }
// type SomeConstructor = {
//   new (s: string): T;
// };
// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }
// class A {
//   constructor(public s:string) {}
// }
// fn(A)

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0]
// }
// const arr = ["a", "b"]
// const s = firstElement(arr)
// console.log(s)


// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }

// longest([1,2], [2, 3])

// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): { length: number } {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum };
//     // Type '{ length: number; }' is not assignable to type 'Type'.
//     // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
//   }
// }
// minimumLength({ length: 1 }, 2)

export default function TsPlayground () {
  return <div>
    
  </div>
}