import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import BlackHeader from "../components/blackHeader";
import Footer from "../components/footer";
import SteperFooter from "../components/steperFooter";
import Datenschutz from "./datenschutz";
import DetailSeite from "./detailSeite";
import Home from "./home";
import Impressum from "./impressum";
import Kaufen from "./kaufen";
import Kontakt from "./kontakt";
import LizenzpartnerStep from "./lizenzpartnerStep";
import PropertyManagementSteper from "./propertyManagementSteper";
import PropertyPage from "./propertyPage";
import Steper from "./steper";
import SuchauftragStep from "./suchauftragStep";
import Unternehmen from "./unternehmen";
import Verkaufen from "./verkaufen";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <RouteWrapper
          exact={true}
          path="/"
          component={Home}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/kaufen"
          component={Kaufen}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/unternehmen"
          component={Unternehmen}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/property-page"
          component={PropertyPage}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/kontakt"
          component={Kontakt}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/detail-seite"
          component={DetailSeite}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/steper"
          component={Steper}
          layout={SteperDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/suchauftrag-step"
          component={SuchauftragStep}
          layout={SteperDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/property-management-steper"
          component={PropertyManagementSteper}
          layout={SteperDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/verkaufen"
          component={Verkaufen}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/datenschutz"
          component={Impressum}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/impressum"
          component={Datenschutz}
          layout={HeaderDefaultLayout}
        />
        <RouteWrapper
          exact={true}
          path="/lizenzpartner-step"
          component={LizenzpartnerStep}
          layout={SteperDefaultLayout}
        />
      </BrowserRouter>
    </>
  );
}

const DefaultLayout = ({ children, match }) => (
  <>
    {children}
    <Footer />
  </>
);
const HeaderDefaultLayout = ({ children, match }) => (
  <>
    <BlackHeader />
    {children}
    <Footer />
  </>
);
const SteperDefaultLayout = ({ children, match }) => (
  <>
    <BlackHeader />
    {children}
    {/* <Footer /> */}
    <SteperFooter />
  </>
);
function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
