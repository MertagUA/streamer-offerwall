import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let pixelId = 308334282290683;
    // Inject Facebook pixel script
    const el = document.getElementById("pixelTagId");
    if (el) {
      /* global fbq */ // Declare fbq as a global variable
      // eslint-disable-next-line
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", pixelId);
      fbq("track", "Lead");
      el.innerHTML = `<img alt='test' src=https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1 style=\"display:none\" width=\"1px\" height=\"1px\">`;
    }
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ToastContainer />
      <div id="pixelTagId"></div>
    </>
  );
}

export default App;
