// import { createRoot } from "react-dom/client";
// import { StrictMode, lazy, Suspense } from "react";
// import { KcPage, type KcContext } from "./keycloak-theme/kc.gen";
// const App = lazy(() => import("./App"));

// // The following block can be uncommented to test a specific page with `yarn dev`
// // Don't forget to comment back or your bundle size will increase
// /*
// import { getKcContextMock } from "./keycloak-theme/login/KcPageStory";

// if (import.meta.env.DEV) {
//     window.kcContext = getKcContextMock({
//         pageId: "register.ftl",
//         overrides: {}
//     });
// }
// */

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     {window.kcContext ? (
//       <KcPage kcContext={window.kcContext} />
//     ) : (
//       <Suspense>
//         <App />
//       </Suspense>
//     )}
//   </StrictMode>
// );

// declare global {
//   interface Window {
//     kcContext?: KcContext;
//   }
// }

import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";

import { getKcContextMock } from "./keycloak-theme/login/KcPageStory";

if (process.env.NODE_ENV === "development") {
  window.kcContext = getKcContextMock({
    pageId: "login.ftl",
    overrides: {},
  });
}

const KcLoginThemePage = lazy(() => import("./keycloak-theme/login/KcPage"));
const KcAccountThemePage = lazy(
  () => import("./keycloak-theme/account/KcPage")
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      {(() => {
        switch (window.kcContext?.themeType) {
          case "login":
            return <KcLoginThemePage kcContext={window.kcContext} />;
          // case "account":
          //   return <KcAccountThemePage kcContext={window.kcContext} />;
        }
        return <h1>No Keycloak Context</h1>;
      })()}
    </Suspense>
  </StrictMode>
);
