/**
 * Configuraciones predeterminadas de Axios.
 * @fileOverview Este módulo se encarga de la creación de una instancia de Axios
 * que se utilizará para realizar solicitudes HTTP en la aplicación.
 * @summary Este módulo facilita la comunicación con la API a través de Axios,
 * configurando la URL base y los encabezados predeterminados para las solicitudes.
 * @author Omar Harold Rivera Ticllacuri
 */

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Instancia de Axios
 * @summary Creación de una instancia de Axios con configuraciones predeterminadas.
 * @type {AxiosInstance}
 *
 * Esta instancia se configura con una URL base que se obtiene de las variables de entorno,
 * permitiendo realizar solicitudes a la API de manera consistente.
 */
const http = axios.create({
    baseURL: API_BASE_URL, // URL base para las solicitudes a la API
    headers: { 'Content-type': 'application/json' } // Establece el tipo de contenido como JSON
});

export default http;
