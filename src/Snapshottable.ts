export interface Snapshottable<T = string> {
	toSnapshot(): T;
}

export namespace Snapshottable {
	export function isType<T>(value: any): value is Snapshottable<T> {
		return value && 'toSnapshot' in value;
	}
}
