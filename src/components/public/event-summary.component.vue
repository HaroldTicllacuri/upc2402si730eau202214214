<template>
  <pv-card class="event-summary-card">
    <template #header>
      <h3 class="event-name">{{ event.name }}</h3>
    </template>
    <template #content>
      <p class="event-description">{{ event.description }}</p>
    </template>
    <template #footer>
      <div class="footer-content">
        <p class="registered-attendees">
          Registered Attendees: <span>{{ registeredAttendees }}</span>
        </p>
        <p class="attendance-percentage">
          Attendance %: <span>{{ attendancePercentage.toFixed(2) }}%</span>
        </p>
      </div>
    </template>
  </pv-card>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      registeredAttendees: 0,
      attendancePercentage: 0,
    };
  },
  created() {
    this.fetchAttendees();
  },
  methods: {
    fetchAttendees() {
      axios.get('http://localhost:3000/attendees')
          .then(response => {
            const attendees = response.data.filter(a => a.eventId === this.event.id);
            this.registeredAttendees = attendees.length;

            const checkedIn = attendees.filter(a => a.checkedInAt).length;
            this.attendancePercentage = ((checkedIn / this.registeredAttendees) * 100) || 0;
          })
          .catch(error => {
            console.error('Error fetching attendees:', error);
          });
    },
  },
};
</script>
<style scoped>
.event-summary-card {
  margin: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #000000;
  max-width: 100%;
}

.event-name {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #007bff;
}

.event-description {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #333;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
}

.registered-attendees,
.attendance-percentage {
  margin: 0;
}

@media (max-width: 768px) {
  .event-name {
    font-size: 1.3rem;
  }

  .event-description {
    font-size: 0.9rem;
  }

  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .registered-attendees,
  .attendance-percentage {
    margin: 5px 0;
  }
}

@media (max-width: 480px) {
  .event-name {
    font-size: 1.1rem;
  }

  .event-description {
    font-size: 0.8rem;
  }

  .event-summary-card {
    padding: 10px;
  }

  .footer-content {
    align-items: flex-start;
  }
}
</style>
