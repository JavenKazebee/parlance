<template>
  <div>
    <span class="text-primary"><slot></slot></span>
    <span class="text-grey-6"> /{{ ipa }}/</span>&ensp;
    {{ definition }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  ipa: string;
  definition: string;
}>();
</script>
