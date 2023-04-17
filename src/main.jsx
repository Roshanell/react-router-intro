import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home";
import Error from "./Pages/Errors";
import Contact from "./Pages/Contact";
// getting started link https://reactrouter.com/en/main/start/tutorial
// 1. create a variable to hold all browser routers
const router = createBrowserRouter([
	{
		// 2. path the element will be directed too
		path: "/",
		// 3. what will show on the specified path
		element: <Home />,
		// handling user errors
		errorElement: <Error />,
    // 9. children are used when we want a component to render inside of the root div 
    children:[
      {
      path: "contacts/:contactId",
      element: <Contact />,
      },
  ]
	},
  // second object to hold path and elememt for route
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* 4. remove the app component  */}
		{/* 5. create an error component - ensure that you do this early on to help with debugging */}
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
