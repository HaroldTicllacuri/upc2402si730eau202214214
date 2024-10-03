<template>
  <div class="check-in-container">
    <h1>{{ $t('eventCheckIn') }}</h1>
    <form @submit.prevent="validateTicket" class="check-in-form">
      <label for="ticketIdentifier">{{ $t('ticketIdentifier') }}</label>
      <input
          type="text"
          v-model="ticketIdentifier"
          required
          placeholder="Enter your ticket identifier"
          id="ticketIdentifier"
          class="ticket-input"
      />
      <button type="submit" class="check-in-button">Check-In</button>
    </form>

    <div v-if="message" class="message" :class="{'error-message': isError, 'success-message': !isError}">
      {{ message }}
    </div>

    <div v-if="ticketInfo" class="ticket-info">
      <h2>Ticket Information</h2>
      <ul>
        <li><strong>Event Id:</strong> {{ ticketInfo.eventId }}</li>
        <li><strong>Event Name:</strong> {{ ticketInfo.eventName }}</li>
        <li><strong>Event Description:</strong> {{ ticketInfo.eventDescription }}</li>
        <li><strong>Attendee Name:</strong> {{ ticketInfo.firstName }} {{ ticketInfo.lastName }}</li>
        <li><strong>Checked-In At:</strong> {{ ticketInfo.checkedInAt }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ticketIdentifier: '',
      message: '',
      isError: false,
      ticketInfo: null,
    };
  },
  methods: {
    validateTicket() {
      axios.get('http://localhost:3000/attendees')
          .then(response => {
            const attendee = response.data.find(a => a.ticketIdentifier === this.ticketIdentifier);
            if (!attendee) {
              this.message = this.$t('invalidTicket');
              this.isError = true;
              this.ticketInfo = null;
              return;
            }
            if (attendee.checkedInAt) {
              this.message = this.$t('alreadyCheckedIn');
              this.isError = true;
              this.ticketInfo = null;
              return;
            }
            this.checkInAttendee(attendee);
          })
          .catch(() => {
            this.message = this.$t('errorFetchingData');
            this.isError = true;
          });
    },
    checkInAttendee(attendee) {
      attendee.checkedInAt = new Date().toISOString();
      axios.put(`http://localhost:3000/attendees/${attendee.id}`, attendee)
          .then(() => {
            this.message = 'Checked in successfully!';
            this.isError = false;
            this.ticketInfo = { ...attendee };
            this.getEventInfo(attendee.eventId);
          })
          .catch(() => {
            this.message = this.$t('errorUpdatingCheckIn');
            this.isError = true;
          });
    },
    getEventInfo(eventId) {
      axios.get('http://localhost:3000/events')
          .then(response => {
            const event = response.data.find(e => e.id === eventId.toString());
            if (event) {
              this.ticketInfo.eventName = event.name;
              this.ticketInfo.eventDescription = event.description;
            }
          })
          .catch(() => {
            this.message = this.$t('errorFetchingEvent');
            this.isError = true;
          });
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.check-in-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.check-in-form {
  display: flex;
  flex-direction: column;
}

.ticket-input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.3s;
}

.ticket-input:focus {
  border-color: #4CAF50;
  outline: none;
}

.check-in-button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

.check-in-button:hover {
  background-color: #45a049;
}

.message {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.error-message {
  color: #f44336;
  background-color: #f8d7da;
}

.success-message {
  color: #4CAF50;
  background-color: #d4edda;
}

.ticket-info {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #f9f9f9;
}


.ticket-detail span {
  color: #333;
}

@media (max-width: 500px) {
  .check-in-container {
    width: 90%;
    padding: 15px;
  }

  .ticket-input, .check-in-button {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }

  .ticket-input {
    font-size: 14px;
  }

  .check-in-button {
    font-size: 14px;
    padding: 8px;
  }
}

</style>
