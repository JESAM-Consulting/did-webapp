import React from "react";
import { Route, Redirect } from "react-router-dom";

const RouteVirtualAssistant = ({
  component: Component,
  layout: Layout,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        if (userInfo) {
          if (userInfo?.role?.roleName === "virtualAssistant") {
            return (
              <Layout {...props}>
                <Component {...props} />
              </Layout>
            );
          } else {
            return false;
          }
        } else {
          return <Redirect to="/virtualAssistant_ProfileInfo" />;
        }
      }}
    />
  );
};

export default RouteVirtualAssistant;