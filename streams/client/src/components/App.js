import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" axact component={StreamEdit} />
          <Route path="/streams/delete" axact component={StreamDelete} />
          <Route path="/streams/show" axact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
