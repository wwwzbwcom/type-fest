import {expectType} from 'tsd';
import {DelimiterCasedPropertiesDeep} from '../ts41/delimiter-cased-props-deep';

declare const foo: DelimiterCasedPropertiesDeep<{helloWorld: {fooBar: string}}, '/'>;
expectType<{'hello/world': {'foo/bar': string}}>(foo);

declare const fooBar: DelimiterCasedPropertiesDeep<() => {a: string}, '/'>;
expectType<() => {a: string}>(fooBar);

// Verify Example
interface User {
	userId: number;
	userName: string;
}

interface UserWithFriends {
	userInfo: User;
	userFriends: User[];
}

const result: DelimiterCasedPropertiesDeep<UserWithFriends, '-'> = {
	'user-info': {
		'user-id': 1,
		'user-name': 'Tom'
	},
	'user-friends': [
		{
			'user-id': 2,
			'user-name': 'Jerry'
		},
		{
			'user-id': 3,
			'user-name': 'Spike'
		}
	]
};
expectType<DelimiterCasedPropertiesDeep<UserWithFriends, '-'>>(result);
