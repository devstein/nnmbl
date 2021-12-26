/// <reference types="@sveltejs/kit" />

interface Heap {
	identify: (string) => void;
}

export declare global {
	interface Window {
		heap: Heap;
	}
}
