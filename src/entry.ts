import { App } from "vue";
import MyButton from "./button/Button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

export { MyButton, JSXButton, SFCButton };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  },
};
