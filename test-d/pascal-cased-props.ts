import {PascalCasedProperties} from '../ts41/pascal-cased-props';
import {expectType} from 'tsd';

declare const foo: PascalCasedProperties<{ helloWorld: { fooBar: string } }>;
expectType<{ HelloWorld: { fooBar: string } }>(foo);


declare const bar: PascalCasedProperties<{helloWorld: string}[]>;
expectType<{helloWorld: string}[]>(bar);

declare const fooBar: PascalCasedProperties<() => {a: string}>;
expectType<() => {a: string}>(fooBar);

// Verify Example
interface User {
	userId: number;
	userName: string;
}
const result: PascalCasedProperties<User> = {
	UserId: 1,
	UserName: 'Tom'
};
expectType<PascalCasedProperties<User>>(result);
