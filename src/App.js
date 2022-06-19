import React from "react";
import Header from "./components/Header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="App">
      <Header/>
     </div>)
  }

}


export default App;