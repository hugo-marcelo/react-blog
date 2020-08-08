import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import "./scss/main.scss";
import Loading from "../../components/Loading";

export function Body({ children }) {
  return (
    <main className="react-blog">
      <Loading />
      <Header />
      {children}
    </main>
  );
}

const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Body>
          <Component {...matchProps} />
        </Body>
      )}
    />
  );
};

export default DefaultLayoutRoute;
