<template>
  <div class="toolbar">
    <img :src="logoUrl" alt="Eventify Logo" class="logo" />
    <span class="certification">ISO 27001:2022 certified</span>
    <div class="toolbar-options">
      <router-link to="/home" class="toolbar-link">{{ $t('home') }}</router-link>
      <router-link to="/registration/event-check-ins/new" class="toolbar-link">{{ $t('checkIn') }}</router-link>
      <select @change="changeLanguage" class="language-select">
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoUrl: 'https://logo.clearbit.com/eventify.io',
    };
  },
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    },
  },
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 40px;
}

.certification {
  font-size: 14px;
  font-weight: 500;
}

.toolbar-options {
  display: flex;
  align-items: center;
}

.toolbar-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

.toolbar-link:hover {
  text-decoration: underline;
}

.language-select {
  margin-left: 10px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: #333;
}

@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .certification {
    margin: 10px 0;
    text-align: center;
    width: 100%;
  }

  .toolbar-options {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }

  .toolbar-link {
    font-size: 16px;
  }

  .language-select {
    margin-left: 0;
    margin-top: 10px;
    width: 10%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .toolbar {
    padding: 15px 30px;
  }

  .toolbar-link {
    margin: 0 15px;
  }

  .language-select {
    padding: 8px;
  }
}
</style>
