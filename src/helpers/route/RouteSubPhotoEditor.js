import React from "react";
import { Redirect, Route } from "react-router-dom";

const RouteSubPhotoEditor = ({
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
        console.log("userInfo", userInfo?.role?.roleName);
        if (userInfo) {
          if (userInfo?.role?.roleName === "subeditor") {
            return (
              <Layout {...props}>
                <Component {...props} />
              </Layout>
            );
          } else {
            return <Redirect to="/photoeditors/personal-info" />;
          }
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
export default RouteSubPhotoEditor;
