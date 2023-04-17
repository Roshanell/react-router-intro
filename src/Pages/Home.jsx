// 11. used in parent routes to render children elements. allows nested ui to show when children are rendered

import { Outlet } from "react-router-dom";
//13. import link element - used to let uer navigate to another page by clicking on. renders an accessible a el with a real href that points to the resource you want

import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<div>
					<form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search contacts"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div id="search-spinner" aria-hidden hidden={true} />
						<div className="sr-only" aria-live="polite"></div>
					</form>
					<form method="post">
						<button type="submit">New</button>
					</form>
				</div>
				<nav>
					<ul>
						<li>
							{/* 14. use link to point to update the url without rendering another doc */}
							<Link to={`/contacts/1`}>Your Name</Link>
						</li>
						<li>
							<Link to={`contacts/2`}>Your Friend</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				{/* 12. call the outlet component imported from react router */}
				<Outlet />
			</div>
		</>
	);
}
