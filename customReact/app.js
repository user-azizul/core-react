function renderElement(ReactElement, Container) {
  const domElement = document.createElement(ReactElement.type);
  domElement.setAttribute("href", ReactElement.props.href);
  domElement.setAttribute("target", ReactElement.props.target);
  domElement.innerHTML = ReactElement.children;

  Container.appendChild(domElement);
}
const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click to visit google"
};
const Container = document.getElementById("root");
renderElement(ReactElement, Container);
