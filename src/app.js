import React from "react";
import ReactDOM from "react-dom/client";
import ImageSlider from "./ImageSlider";

const App = () => {
  return (
    <div className="container">
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
