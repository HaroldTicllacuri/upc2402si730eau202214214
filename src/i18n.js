import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import es from './locales/es.json';

/**
 * Configuración de i18n (internacionalización) para la aplicación.
 * Este módulo establece cómo la aplicación maneja múltiples idiomas utilizando
 * Vue I18n. Permite que la interfaz de usuario sea accesible en varios idiomas,
 * facilitando así la experiencia de los usuarios que hablan diferentes lenguas.
 *
 * @fileOverview Este archivo es clave para habilitar el soporte multilingüe en
 * la aplicación y gestionar la localización de los textos.
 * @summary El módulo configura la internacionalización de la aplicación,
 * permitiendo la traducción de la interfaz de usuario y mejorando la
 * accesibilidad.
 * @author Omar Harold Rivera Ticllacuri
 */

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        en,
        es
    }
});

export default i18n;
