<template>
  <div>
    <h1>{{ $t('home') }}</h1>
    <p>{{ $t('welcome') }}</p>
    <h2>{{ $t('registeredEvents') }}</h2>
    <div class="event-summary-grid">
      <event-summary v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import EventSummary from '../components/public/event-summary.component.vue';
import axios from 'axios';

export default {
  components: { EventSummary },
  data() {
    return {
      events: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/events')
        .then(response => {
          this.events = response.data;
        });
  },
};
</script>

<style>
.event-summary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
