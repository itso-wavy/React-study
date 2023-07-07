# typescript

- 기본: string, number, boolean, array, null, undefined any
- 함수: 함수, 객체
- 복합: 교차,
- generic

## 기본타입

```ts
let str: string = 'A';
str = '10';
str = 10; // error!
```

```ts
let num: number = 0;
num = 10;
num = '10'; // error!
```

```ts
let bool: boolean = true;
bool = false;
bool = 10; // error!
```

```ts
// :Array<타입명> 또는 :타입명[]으로 지정
const arr1: Array<number> = [0, 1, 2]; // Generic
let arr2: number[] = [0, 1, 2];
arr1.push(10);
arr2.push(10);
arr1.push('10'); // error!
arr2 = 10; // error!
```

```ts
let null1: null = null;
null1 = null;
null1 = 10; // error!
```

```ts
let undefined1: undefined = undefined;
undefined1 = undefined;
undefined1 = null; // FIXME:
undefined1 = 10; // error!
```

```ts
let any1: any;
any1 = false;
any1 = 10;
any1 = undefined;
```

## 함수타입

```ts
// (인수:인수 타입명):반환값의 타입명 => {}
const funcA = (num: number): void => {
  console.log(num);
};
funcA(10);
funcA('10'); // error!
funcA(); // error!
```

```ts
// :{:타입명}
const obj: { str: string; num: number } = {
  str: 'A',
  num: 10,
};

obj.str = 'B';
obj.num = 20;
obj.str = 10; //error!
obj.num = null; //error!
obj = 10; //error!
```

## 복합타입

```ts
// 타입 & 타입
const obj: { str: string } & { num: number } = {
  str: 'A',
  num: 10,
};

obj.str = '20';
obj.num = '10'; //error!

type TypeA = {
  str: string;
  num: number;
};
type TypeB = {
  str: string;
  bool: boolean;
};

type TypeC = TypeA & TypeB;

const obj: TypeC = {
  // obj:TypeA & TypeB TODO:
  str: 'A',
  num: 10,
  bool: false,
};
```
