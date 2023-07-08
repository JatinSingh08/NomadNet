import React from "react";
import { Route, Routes } from "react-router-dom";
import { contentRoutes, privateRoutes, publicRoutes } from "./allRoutes";
import { SharedLayout } from "../components";
import RequiresAuth from "./RequiresAuth";

const Index = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.element} />
        ))}
        <Route element={<RequiresAuth />}>
          {privateRoutes.map((data, idx) => (
            <Route key={idx} path={data.path} element={data.element} />
          ))}
        </Route>
        <Route element={<SharedLayout />}>
          {contentRoutes.map((data, idx) => (
            <Route key={idx} path={data.path} element={data.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export { Index };
