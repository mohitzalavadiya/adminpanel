import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Medicine from "./container/medicine/Medicine";
import Patient from "./container/patient/Patient";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/medicine" exact component={Medicine} />
        <Route path="/patient" exact component={Patient} />
      </Switch>
    </Layout>
  );
}

export default App;
