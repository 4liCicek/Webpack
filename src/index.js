import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap";

document.getElementById("btnClick").addEventListener("click", () => {

    alert("Hello Webpack");
    alert("v1");
    alert("v2");
    alert("v3");
    setItem("token", "dfskldjfkdfldlşsdgsdkgflskşdfşkdfnlknsvkndsşfkşdsfdsfjksşş");
});

