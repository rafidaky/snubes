import "./App.css";
import { NavBar, Header, Footer, Content, Customers } from "./components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/reducers/";

function App() {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <div className="App">
        <NavBar></NavBar>
        <Header></Header>
        <Content></Content>
        <Customers></Customers>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
