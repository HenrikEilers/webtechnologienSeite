//import "./styles.css";
const x = document.getElementById("demo");
x.onclick = f(x);
function f(x) {
  return () => {
    console.log("!!!!");
    x.innerHTML = "Das kein Spaß";
  };
}
