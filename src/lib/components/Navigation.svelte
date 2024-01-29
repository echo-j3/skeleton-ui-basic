<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a on:click={drawerClose} href="/">Echofy</a></li>
		<li><a on:click={drawerClose} href="/?test=1"> 1</a></li>
		<li><a on:click={drawerClose} href="/?test=2"> 2</a></li>
		<li><a on:click={drawerClose} href="/?test=3"> 3</a></li>
	</ul>
</nav>
