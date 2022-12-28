import React from "react";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import { Routes, Route } from 'react-router-dom'
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => (
   <Layout>
      <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/list/:type" element={<List />} />
      </Routes>
   </Layout>
)

export default AppRoutes