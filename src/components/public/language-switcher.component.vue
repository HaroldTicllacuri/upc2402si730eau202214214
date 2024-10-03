<template>
  <div class="language-switcher">
    <pv-select-button
        v-model="language"
        :options="languages"
        class="language-toggle"
    >
      <template #option="slotProps">
        <span class="language-option">{{ slotProps.option.toUpperCase() }}</span>
      </template>
    </pv-select-button>
  </div>
</template>

<script>
import { defaultOptions as $i18n } from "@primevue/core/config";

export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en',
    };
  },
  methods: {
    $i18n() {
      return $i18n;
    },
  },
};
</script>

<style scoped>
.language-switcher {
  margin-left: 20px;
}

.language-toggle {
  display: flex;
  border: none;
  background-color: transparent;
  border-radius: 20px;
  overflow: hidden;
}

.language-option {
  padding: 10px 15px;
  color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.language-option:hover {
  background-color: #e7f1ff;
}

.language-option.active {
  background-color: #007bff;
  color: white;
}

.language-toggle .p-button.p-button-active .language-option {
  background-color: #007bff;
  color: white;
}
</style>
