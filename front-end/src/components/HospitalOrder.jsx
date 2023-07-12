import { React, useState, useRef } from "react"
import easyinvoice from "easyinvoice"
import axios from "axios"

export default function HospitalOrder({ hospital, user, item, placeOrder }) {
	const [inputValue, setInputValue] = useState(0)
	const [invoiceNumber, setInvoiceNumber] = useState(1)
	const inputRef = useRef()
	const d = new Date()
	let dateDue = new Date()
	dateDue.setDate(dateDue.getDate() + 15)

	async function handleOrder() {
		if (item.amount - inputRef.current.value >= 0) {
			axios.patch(
				`http://localhost:6789/api/replenishStock/${item._id}`,
				{
					amount: item.amount - inputRef.current.value,
				},
				{
					headers: { "Content-type": "application/json" },
				}
			)
			item.amount -= inputRef.current.value
			placeOrder(item.amount)

			let data = {
				// Customize enables you to provide your own templates
				// Please review the documentation for instructions and examples
				customize: {
					//  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
				},
				images: {
					// The logo on top of your invoice
					logo: "",
					// The invoice background
					background:
						"https://public.easyinvoice.cloud/img/watermark-draft.jpg",
				},
				// Your own data
				sender: {
					company: "Mask Stock",
					address: "Secret Underground facility number 747",
					zip: "1221",
					city: "Citadel of Ricks",
					country: "Space Zone A71Z48",
					//  "custom1": "custom value 1",
					//"custom2": "custom value 2",
					//"custom3": "custom value 3"
				},
				// Your recipient
				client: {
					company: hospital,
					address: "Péterfy Sándor u. 8-20",
					zip: "1076 CD",
					city: "Budapest",
					country: "Hungary",
					// "custom1": "custom value 1",
					// "custom2": "custom value 2",
					// "custom3": "custom value 3"
				},
				information: {
					// Invoice number
					number: `${d.getFullYear()}.${invoiceNumber}`,
					// Invoice data
					date: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`,
					// Invoice due date
					"due-date": `${dateDue.getFullYear()}-${dateDue.getMonth()}-${dateDue.getDay()}`,
				},
				// The products you would like to see on your invoice
				// Total values are being calculated automatically
				products: [
					{
						quantity: inputValue,
						description: "FFP2 Mask",
						"tax-rate": 6,
						price: 14.72,
					},
				],
				// The message you would like to display on the bottom of your invoice
				"bottom-notice":
					"Kindly pay your invoice within 15 days.",
				// Settings to customize your invoice
				settings: {
					currency: "EUR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
					// "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
					// "tax-notation": "gst", // Defaults to 'vat'
					// "margin-top": 25, // Defaults to '25'
					// "margin-right": 25, // Defaults to '25'
					// "margin-left": 25, // Defaults to '25'
					// "margin-bottom": 25, // Defaults to '25'
					// "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
					// "height": "1000px", // allowed units: mm, cm, in, px
					// "width": "500px", // allowed units: mm, cm, in, px
					// "orientation": "landscape", // portrait or landscape, defaults to portrait
				},
				// Translate your invoice to your preferred language
				translate: {
					// "invoice": "FACTUUR",  // Default to 'INVOICE'
					// "number": "Nummer", // Defaults to 'Number'
					// "date": "Datum", // Default to 'Date'
					// "due-date": "Verloopdatum", // Defaults to 'Due Date'
					// "subtotal": "Subtotaal", // Defaults to 'Subtotal'
					// "products": "Producten", // Defaults to 'Products'
					// "quantity": "Aantal", // Default to 'Quantity'
					// "price": "Prijs", // Defaults to 'Price'
					// "product-total": "Totaal", // Defaults to 'Total'
					// "total": "Totaal" // Defaults to 'Total'
				},
			}
			setInvoiceNumber(invoiceNumber + 1)

			easyinvoice.createInvoice(data, function (result) {
				easyinvoice.download("myInvoice.pdf", result.pdf)
				//	you can download like this as well:
				//	easyinvoice.download();
				//	easyinvoice.download('myInvoice.pdf');
			})
		} else setInputValue(item.amount)
	}

	function handleInputChange(e) {
		setInputValue(e.target.value)
	}

	return (
		<>
			<div className="hospital">
				<h3 className="hospital-name">{hospital}</h3>
				<input
					ref={inputRef}
					type="number"
					value={inputValue}
					onChange={handleInputChange}
					className="order-number"
				></input>
				<button onClick={handleOrder} className="hospital-order">
					Order
				</button>
			</div>
		</>
	)
}
