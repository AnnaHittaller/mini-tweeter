import Sidebar from "../components/Sidebar";
import "../styles/mainLayout.css";

function MainLayout({ children }) {
	return (
		<>
			<Sidebar />
			<div className="main">
				{children}
			</div>
		</>
	);
}

export default MainLayout;
