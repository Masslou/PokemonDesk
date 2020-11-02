// let tsString = 'str';
//

type StringOrNumber = string | number;


const strOrNumber1: StringOrNumber = 'str';
const strOrNumber2: StringOrNumber = 3;
const strOrNumber3: StringOrNumber = 'str';


const result = strOrNumber3 + strOrNumber2;


type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | object | [];


type TsArr = (number | string);


const tsArr2: Array<TsArr> = [1, 2, 3];
const tsArr: TsArr[] = [1, 2, 3];


const tsNextArr: [string, number] = ['1', 2];


const [a, b] = tsNextArr;


///////


type TsObj = {
    name: string,
    birthDay: number | string,
    male?: string,
    lastName: string
};


const tsObj: MyFirstInterface = {
    name: 'Alex',
    birthDay: 24,
    lastName: 'LastName'
};


interface MyFirstInterface {
    name: string,
    birthDay: number | string,
    male?: string,
    lastName: string
}

interface IndexedInterface {
    [n: string]: string,
}


const data: IndexedInterface = {
    key1: 'key',
    key2: 'key 1'
};


const val3 = data.key1;

enum MethodEnum {
    add,
    sub,
}


// calculate('add',2,3) => 5;

function calculate(method: MethodEnum, first: number, second: number): number {
    switch (method) {
        case MethodEnum.add:
            return first + second;
        case MethodEnum.sub :
            return first - second;
    }
}


calculate(MethodEnum.add, 3, 5);


type TypeFn = () => number;
type TypeDefaultFn = () => void;

const ArrowFunc: TypeFn = () => 2;


// Simple types

function concat(first: string, second: string): string {
    return (first + second);
}


concat('Hello ', 'hello');

// Interfaces

type SimeArray = Array<string | number>
type HowIDoIt = string
type HowIDoAndSimeArray = { howIDoIt: string, simeArray: SimeArray };


interface HomeTaskInterface {
    howIDoIt: HowIDoIt,
    simeArray: SimeArray,
    withData: Array<HowIDoAndSimeArray>
}


const MyHometask: HomeTaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],
};


// Generics


interface MyArray<T> {
    [n: number]: T;

    map<U>(fn: (el: T) => U): U[];

    reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}

const tsArr1: Array<number> = [1, 2, 3, 4];

tsArr1.map((i) => i + 1);
tsArr1.reduce((i) => i + 1);
