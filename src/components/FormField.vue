<template>
  <div class="relative">
    <input
      :name="placeholder"
      :value="modelValue"
      @input="updateInput($event.target.value)"
      :placeholder="placeholder"
      class="bg-blue-100 dark:bg-slate-100 w-full py-2 px-4 rounded-xl"
      :maxlength="maxLength"
    />

    <div
      class="absolute top-1/2 -translate-y-1/2 right-4 text-blue-400 dark:text-slate-400 font-medium"
    >
      {{ currentCount }} / {{ maxLength }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
  placeholder: String,
  maxLength: Number,
});

const currentCount = computed(() => props.modelValue.length);

const emit = defineEmits(["update:modelValue"]);

const updateInput = (value) => {
  emit("update:modelValue", value);
};
</script>
