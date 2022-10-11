import FormField from './FormField'

const BillingDetails = () => {
	return (
		<>
			<FormField
				name="name"
				label="Name"
				type="text"
				placeholder="Name"
				required
			/>
			<FormField
				name="email"
				label="Email"
				type="email"
				placeholder="Email"
				required
			/>
			{/* Needs to create a customer to pass the value */}
			{/* <FormField
				name="phone"
				label="Phone"
				type="text"
				placeholder="Phone"
				required
			/> */}
			<FormField
				name="address"
				label="Address"
				type="text"
				placeholder="Address"
				required
			/>
			<FormField
				name="city"
				label="City"
				type="text"
				placeholder="City"
				required
			/>
			<FormField
				name="state"
				label="State"
				type="text"
				placeholder="State / Country"
				required
			/>
			<FormField
				name="zip"
				label="ZIP"
				type="text"
				placeholder="Zip"
				required
			/>
		</>
	)
}

export default BillingDetails
