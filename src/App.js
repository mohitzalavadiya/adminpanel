import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Medicine from "./container/medicine/Medicine";
import Patient from "./container/patient/Patient";
import configureStore from "./redux/Store";
import {Provider} from "react-redux"
import Counter from "./Counter";


function App() {
  const store = configureStore() 

  return (
    <Provider store={store}>
    <Layout>
      <Switch>
        <Route path="/medicine" exact component={Medicine} />
        <Route path="/patient" exact component={Patient} />
        <Route path = "/counter" exact component={Counter} />
      </Switch>
    </Layout>
    </Provider>
  );
}

export default App;
