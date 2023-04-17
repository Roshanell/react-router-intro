import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	// 6. defines what an error is and store  the function in the var
	const error = useRouteError();
	// provides the error that was thrown(no more blank screens :)
	console.error(useRouteError);

	return (
		// 7. give class to id (css purposes)
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				{/* 8. include error statement by using dot notation to access the error */}
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
