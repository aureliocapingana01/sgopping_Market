import { createBrowserRouter } from "react-router-dom";
import Header from "./App/components/Header";

const route = createBrowserRouter (
	[
		{
			path: '/',
			element: (
				<Header />
			)
		}
	]
)

export default route