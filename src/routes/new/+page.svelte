<script lang="ts">
	import { goto } from '$app/navigation';
	import { noteStore } from '$lib/stores';
	import { InputChip, getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	let tags: string[] = [];
	let content: string;

	const t: ToastSettings = {
		message: 'Note created succesfully',
		background: 'variant-filled-succes'
	};

	function createNote(): void {
		noteStore.update((notes) => [
			...notes,
			{
				id: crypto.randomUUID(),
				content,
				tags
			}
		]);
		content = '';
		tags = [];
		toastStore.trigger(t);
		goto('/');
	}
</script>

<div class="container h-full mx-auto gap8 flex flex-col">
	<form class="card p-4 flex flex-col gap-3">
		<h2>New Note</h2>
		<textarea
			bind:value={content}
			class="textarea"
			rows="4"
			placeholder="Enter your new note here.."
		/>
		<InputChip name="tags" placeholder="Tags..." bind:value={tags} />
		<button on:click={createNote} class="btn variant-ghost-primary self-end">Create Note</button>
	</form>
</div>
