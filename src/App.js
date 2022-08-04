import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Medicine from "./container/medicine/Medicine";
import Patient from "./container/patient/Patient";
import configureStore from "./redux/Store";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Switch>
            <Route path="/medicine" exact component={Medicine} />
            <Route path="/patient" exact component={Patient} />
            <Route path="/counter" exact component={Counter} />
          </Switch>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
