import React from "react";
import { Route, Redirect } from "react-router-dom";

const RouteAccountant = ({
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
          if (userInfo?.role?.roleName === "accountant") {
            return (
              <Layout {...props}>
                <Component {...props} />
              </Layout>
            );
          } else {
            return false;
          }
        } else {
          return <Redirect to="/affiliate_accountants_personalInfo" />;
        }
      }}
    />
  );
};

export default RouteAccountant;
