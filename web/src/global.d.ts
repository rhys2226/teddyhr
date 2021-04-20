import { Dayjs } from 'dayjs';

declare global {
	interface String {
		toNumber(): number;
	}

	interface Error {
		toJSON(): Object;
	}

	interface Array<T> {
		random(): T;
	}

	interface Date {
		toDayJS(): Dayjs;
	}
	interface HTMLButtonElement {
		enable(): void;
		disable(): void;
	}

	interface StringConstructor {
		random(size?: number): string;
	}
}

export {};
