import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBar from "../component/NavigationBar";
import { Route, Routes } from "react-router";
import Header from "../component/Header";

export default function HomePage() {
  return (
    <>
      <section>
        <NavigationBar />
      </section>

      <div>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </>
  );
}
