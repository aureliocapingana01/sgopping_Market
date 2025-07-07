import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./App/components/Header";
import Home from "./App/view/Home";

const App = () => {
	const route = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Header />,
					<Home />
				</>
			),
		},
	]);

	return (
		<div className="flex h-screen items-center justify-center bg-gray-200">
			<RouterProvider router={route}></RouterProvider>
		</div>
	);
};

export default App;
