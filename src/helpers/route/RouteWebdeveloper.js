import React from "react";
import { Route, Redirect } from "react-router-dom";

const RouteWebdeveloper = ({
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
          if (userInfo?.role?.roleName === "webDeveloper") {
            return (
              <Layout {...props}>
                <Component {...props} />
              </Layout>
            );
          } else {
            return false;
          }
        } else {
          return <Redirect to="/webdeveloper_personalInfo" />;
        }
      }}
    />
  );
};

export default RouteWebdeveloper;
