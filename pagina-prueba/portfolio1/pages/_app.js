import "../styles/globals.css";
import Header from "./header";
import Cover from "./cover";
import Blog from "./blog";

function _app() {
  return (
    <section className="absolute md:relative bg-gray-600">
      <Header />
      <Cover />
      <Blog/>
    </section>
  );
}
export default _app;
