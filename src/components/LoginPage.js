import MainLayout from "../layouts/MainLayout";
import LoginForm from "./LoginForm";
import '../styles/login.css'

function LoginPage() {
	return (
		<MainLayout>
			<div className="login-page">
				<h2>Log in</h2>
				<LoginForm />
			</div>
		</MainLayout>
	);
}

export default LoginPage;
