<template>
  <div class="mouse-scroll">
		<div class="mouse">
			<div class="wheel"></div>
		</div>
		<div>
      <span
        :class="`scroll-arrow arrow-${index}`"
        v-for="index in 3"
        :key="index"
      ></span>
		</div>
</div>
</template>

<script>
export default {
  name: 'ScrollDownItem'
}
</script>
