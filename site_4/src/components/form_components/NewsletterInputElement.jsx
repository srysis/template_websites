import React from "react"

import ErrorTooltip from "./ErrorTooltip"

function NewsletterInputElement( {elementName, elementPlaceholder, onBlurHandler, onClickHandler, isFieldEmpty, errorMessage} ) {
	return (
		<>
			<input 
				name={elementName}
				placeholder={elementPlaceholder}
				className={isFieldEmpty ? "invalid" : "valid"}
				onBlur={onBlurHandler} 
				onClick={onClickHandler}
			/>
			{ isFieldEmpty && <ErrorTooltip classes={"error_tooltip"} text={errorMessage} /> }
		</>
	)
}

export default NewsletterInputElement