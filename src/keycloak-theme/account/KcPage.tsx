// import { lazy } from "react";
// import { KcAccountUiLoader } from "@keycloakify/keycloak-account-ui";
// import type { KcContext } from "./KcContext";

// const KcAccountUi = lazy(() => import("@keycloakify/keycloak-account-ui/KcAccountUi"));

// export default function KcPage(props: { kcContext: KcContext }) {
//     const { kcContext } = props;

//     return <KcAccountUiLoader kcContext={kcContext} KcAccountUi={KcAccountUi} />;
// }


import { lazy } from "react";
import { KcAccountUiLoader } from "@keycloakify/keycloak-account-ui";
import type { KcContext } from "./KcContext";

const KcAccountUi = lazy(() => import("@keycloakify/keycloak-account-ui/KcAccountUi"));

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;
    
    console.log("This is my account theme!");
    
    return <KcAccountUiLoader kcContext={kcContext} KcAccountUi={KcAccountUi} />;
}