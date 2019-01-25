import React, { Component } from 'react';
import ControllPanel from "./component/ControllPanel";
import BillBoard from "./component/BillBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControllPanel/>
          <BillBoard area='서울'></BillBoard>
          <BillBoard area='부산'></BillBoard>
          <BillBoard area='대구'></BillBoard>
          <BillBoard area='광주'></BillBoard>
      </div>
    );
  }
}

export default App;
