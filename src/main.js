import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
// Importación del router de Vue
import router from "./router/index.js";

// Importación y configuración de PrimeVue
import PrimeVue from 'primevue/config';

// Estilos de PrimeVue
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';

// Servicios de PrimeVue
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";

// Componentes de PrimeVue
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import Row from "primevue/row";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Drawer from "primevue/drawer";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Select from "primevue/select";
import SelectButton from "primevue/selectbutton";
import Tag from "primevue/tag";
import Card from "primevue/card";
import FileUpload from "primevue/fileupload";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputNumber from "primevue/inputnumber";
import FloatLabel from "primevue/floatlabel";
import Checkbox from "primevue/checkbox";
import Rating from "primevue/rating";

import i18n from "./i18n.js";

/**
 * @fileOverview Este archivo configura la aplicación principal de Vue
 * y establece los componentes y servicios necesarios para que funcione correctamente.
 * @summary Aquí se crea la instancia de la aplicación Vue, se configuran los
 * plugins necesarios como PrimeVue y se registran los componentes que se utilizarán
 * en toda la aplicación. También se habilita el soporte para la internacionalización.
 * @author Omar Harold Rivera Ticllacuri
 */

// Crear la instancia de la aplicación
const app = createApp(App);

// Configuración del router
app.use(router);

// Integración de PrimeVue con la configuración de tema y servicios
app.use(PrimeVue, { theme: { preset: Aura }, ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)

    // Registro de componentes de PrimeVue
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-dropdown', Dropdown)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-drawer', Drawer)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast);

// Integración de Vue i18n para soporte multilingüe
app.use(i18n);

// Montar la aplicación en el elemento con ID "app"
app.mount('#app');
