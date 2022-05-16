import { useState, useEffect } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

function App() {
  const [hyphenWidget, setHyphenWidget] = useState();

  useEffect(() => {
    const widget = HyphenWidget.default.init(
      document.getElementById("widget"),
      {
        tag: "expecto-patronum",
        env: "test",
        showWidget: true,
        showCloseButton: true,
      }
    );

    if (widget) {
      setHyphenWidget(widget);
    }
  }, []);

  function handleOpen() {
    hyphenWidget.open();
  }

  function handleClose() {
    hyphenWidget.close();
  }

  return <div className="App">
    <button onClick={handleOpen}>Open Widget</button>
    <button onClick={handleClose}>Close Widget</button>

    <div id="widget"></div>
  </div>;
}

export default App;
