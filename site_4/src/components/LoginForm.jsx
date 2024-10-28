import FormElement from "./form_components/FormElement"

function LoginForm() {
	return (
		<form id="login_form">
			<div className="input_container">
				<FormElement elementName="username" elementPlaceholder="Username" />
			</div>
			<div className="input_container">
				<FormElement elementName="email" elementPlaceholder="Email" />
			</div>
			<div className="input_container">
				<FormElement elementName="password" elementPlaceholder="Password" />
			</div>
		</form>
	);
}

export default LoginForm;
