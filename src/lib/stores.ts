import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

type Note = {
	id: string;
	content: string;
	tags: string[];
};

export const noteStore: Writable<Note[]> = localStorageStore('notes', []);
