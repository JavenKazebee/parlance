<template>
  <td :colspan="props.colspan">
    <div class="row items-center justify-center q-gutter-sm">
      <slot />
    </div>
  </td>
</template>

<script lang="ts" setup>
const props = defineProps({
  colspan: {
    type: Number,
    default: 1,
  },
});
</script>
