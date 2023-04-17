// 11. used in parent routes to render children elements. allows nested ui to show when children are rendered

import { Outlet } from "react-router-dom";

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
							<a href={`/contacts/1`}>Your Name</a>
						</li>
						<li>
							<a href={`/contacts/2`}>Your Friend</a>
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
