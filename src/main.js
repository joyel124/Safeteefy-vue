import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//Themes
import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


import DataTable from "primevue/datatable";
import Toolbar from "primevue/toolbar";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import SplitButton from "primevue/splitbutton";
import ToastService from "primevue/toastservice";
import ConfirmDialog from "primevue/confirmdialog";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";



const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);

//Components
app.component("pv-datatable", DataTable);
app.component("pv-toolbar", Toolbar);
app.component("pv-column", Column);
app.component("pv-button", Button);
app.component("pv-dialog", Dialog);
app.component("pv-input-text", InputText);
app.component("pv-split-button", SplitButton);
app.component("pv-confirm-dialog", ConfirmDialog);
app.component("pv-text-area", Textarea);
app.component("pv-input-number", InputNumber);




app.use(createPinia());
app.use(router);

app.mount("#app");
