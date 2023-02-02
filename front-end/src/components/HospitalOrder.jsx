import {React, useState} from 'react'
import easyinvoice from 'easyinvoice'
import { Document } from 'react-pdf';
import PDFViewer from './PdfViewer';

export default function HospitalOrder({hospital, user}) {
    const [inputValue, setInputValue] = useState(0)
    const [pdfBase64, setPdfBase64] = useState("")

    function handleOrder() {
        console.log(inputValue, user, hospital);

        let data = {
            // Customize enables you to provide your own templates
            // Please review the documentation for instructions and examples
            "customize": {
                //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
            },
            "images": {
                // The logo on top of your invoice
                "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
                // The invoice background
                "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
            },
            // Your own data
            "sender": {
                "company": "Sample Corp",
                "address": "Sample Street 123",
                "zip": "1234 AB",
                "city": "Sampletown",
                "country": "Samplecountry"
                //"custom1": "custom value 1",
                //"custom2": "custom value 2",
                //"custom3": "custom value 3"
            },
            // Your recipient
            "client": {
                "company": "Client Corp",
                "address": "Clientstreet 456",
                "zip": "4567 CD",
                "city": "Clientcity",
                "country": "Clientcountry"
                // "custom1": "custom value 1",
                // "custom2": "custom value 2",
                // "custom3": "custom value 3"
            },
            "information": {
                // Invoice number
                "number": "2021.0001",
                // Invoice data
                "date": "12-12-2021",
                // Invoice due date
                "due-date": "31-12-2021"
            },
            // The products you would like to see on your invoice
            // Total values are being calculated automatically
            "products": [
                {
                    "quantity": 2,
                    "description": "Product 1",
                    "tax-rate": 6,
                    "price": 33.87
                }
            ],
            // The message you would like to display on the bottom of your invoice
            "bottom-notice": "Kindly pay your invoice within 15 days.",
            // Settings to customize your invoice
            "settings": {
                "currency": "EUR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
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
            "translate": {
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
        };
        
        //Create your invoice! Easy!
        easyinvoice.createInvoice(data, function (result) {
            setPdfBase64(result.pdf)
            window.open(result.pdf, "_blank");
        });
    }

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }
    
    return (
    <>
        { pdfBase64 != "" 
        ? <PDFViewer base64={pdfBase64}/>
        : 
        <div className='hospital'>
            <h3 className='hospital-name'>{hospital}</h3>
            <input value={inputValue} onChange={handleInputChange} className='order-number'></input>
            <button onClick={handleOrder} className='hospital-order'>Order</button>
        </div>
        }
    </> 

  )
}

