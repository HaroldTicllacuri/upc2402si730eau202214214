import axios from 'axios';

/**
 * @fileOverview Este módulo se encarga de interactuar con la API de asistentes.
 * @summary Aquí se definen funciones que nos permiten obtener la lista de asistentes y actualizar la información de uno específico.
 * @author Omar Harold Rivera Ticllacuri
 */

const API_URL = 'http://localhost:3000/attendees';

/**
 * @module AttendeeService
 */
export default {
    /**
     * Esta función obtiene todos los asistentes desde la API.
     *
     * @function getAttendees
     * @returns {Promise} Devuelve una promesa que contiene la respuesta de la API con la lista de asistentes.
     */
    getAttendees() {
        return axios.get(API_URL);
    },

    /**
     * Esta función actualiza los datos de un asistente en particular.
     *
     * @function updateAttendee
     * @param {string} id - El ID del asistente que quieres actualizar.
     * @param {Object} data - Este objeto contiene la nueva información del asistente.
     * @returns {Promise} Devuelve una promesa que resuelve la respuesta de la API tras la actualización.
     */
    updateAttendee(id, data) {
        return axios.put(`${API_URL}/${id}`, data);
    },
};
