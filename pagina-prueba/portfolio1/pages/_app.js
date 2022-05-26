import "../styles/globals.css";
import Header from "./header";
import Cover from "./cover";

function _app() {
  return (
    <div className="max-w-full">
      <Header />
      <Cover />
    </div>
  );
}
export default _app;
