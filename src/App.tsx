import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

import Payslips from "./pages/payslips/Payslips";
import PayslipDetail from "./pages/payslipDetail/PayslipDetail";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/payslips" exact>
            <Payslips />
          </Route>
          <Route path="/payslips/:id" exact>
            <PayslipDetail />
          </Route>
          <Redirect from="/" to="/payslips" exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
