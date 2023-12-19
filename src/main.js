import { createApp } from "vue";
import "../src/assets/style/style.scss";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faAngleLeft, faAngleRight, faCircle);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
