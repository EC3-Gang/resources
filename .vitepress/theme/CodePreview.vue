<script setup>
import { ref, onMounted } from "vue";
const slot = ref(null);
const iframeContent = ref(null);

onMounted(() => {
	if (slot.value?.children?.[0].children?.[2]?.textContent) {
		iframeContent.value = slot.value.children[0].children[2].textContent;
	}
});
</script>

<template>
	<div ref="slot">
		<slot />
	</div>
	<h4>Preview:</h4>
	<iframe v-if="iframeContent" :srcdoc="iframeContent" style="width: 100%; height: 20em" />
</template>