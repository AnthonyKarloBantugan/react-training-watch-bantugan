import * as React from "react";
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
	const PRODUCTS = [
		{
			id: 1,
			imgUrl: "https://s3-alpha-sig.figma.com/img/b59e/a8b4/03e2f000ce5c9f7dfeca188334406c5c?Expires=1659916800&Signature=XOZJfCNveUr60nY1rs5sl4sfxco6N8KXsc8lCivJPO9herjsyYV2t0ELoJdVKP-gR9nfI6VTAh7DRlF3TL6GwmZb3X6FTt3er9UDrYOy6sbazN3-1eMAl8vgsYlr1X09044xZ2N6QH1QaFOy6GPAvjXp1b3Htb1pvDOOHUWRPbMCE~QsdvNUj-y67fodaLyCQ3ZGluaHAMW5s3Y0Orhtn~OZrpkkmoTB7E9BOEuwIo9xks1r4WR08ZMPtH-x8hmHT~Ru~rjYqCZE0ZPwy~w5k5wWdqOQjnQ2YJOO5J4Ro31dFhkrs1NGoz59SHJaBhcxuoIVrn2vN9HJGY378WCZ3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
			name: "Apple Watch",
			series: "Series 7",
			price: "799",
			bgColor: "#FFC8B7",
			desc: "The aluminum case is lightweight and made from 100 percent recycled aerospace grade alloy.",
		},
		{
			id: 2,
			imgUrl: "https://s3-alpha-sig.figma.com/img/2677/4ad2/7df3a66e967a9acf334062e1d1f1fd47?Expires=1659916800&Signature=ZpQ7fSxP6lV1BYl9PRB0nz7Dx~l6PxMITfSbj9FxabpGpeEO3qxTNI1tveGI7RasM9rR1htsAMJKGHvDm9sepQ5-p98cjqSY5UEo5DB7ucV2KEPbj1I4AcZOiGXV4At7nF3M-pZXT-BGjJMqz8ocD2qvAYj8HS4nBFP5WvU8ynfmfYZX5plJZSJbG~a6Ymaoqy~IDDLK581TY3qAJUPKlaWydRX~Iz9FUtSBVvldE8saTr-Z5ph6IQGHl3ARWBN3Fh7jBU~tKTXOWm~vdoSzvh-Gz70BsiH8JilNfO9lQ8wNA4nor5GW~DTKL0UHbBqquq39pl77XXnfltJaIwL~iQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
			name: "Galaxy Watch",
			series: "Series 4",
			price: "799",
			bgColor: "#FFEFE1",
			desc: "The aluminum case is lightweight and made from 100 percent recycled aerospace grade alloy.",
		},
		{
			id: 3,
			imgUrl: "https://s3-alpha-sig.figma.com/img/bafd/5445/7cae17a2de6fc5ced1b9b177ce938768?Expires=1659916800&Signature=PWMT2tlQdBjyJlLCcruZ65aUvU4uXiFXHX3xSVIwl0irXQa865tDs1RS6MNKK~nQtXTUQL2dIfVqHMaAiZqPvhgY19Xd7okjgpbsRSkCj8P4tWZgCWCr01DlM7W4ManrD0KbVyVYIl6Z6JPDFk~2xbUtazimpIvM2JoSqJeL6ybZkiVw4A1xf7QhnXAR37dqiZ90jis75Fg0E4vEGXnjH5A5VLXnTL~JVcScUgUC8UdYLt2HRxcoFkS7Cec8L-P4pm6igVdDH3XiHcOx5LZ68bnterWDr4pvK0HKsP5BORfcuYhNXrBE7pe4ctNMF9ZURyAwuXuWaJP60RltEzKysQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
			name: "Mi Watch",
			series: "All Series",
			price: "299",
			bgColor: "#F0DEC5",
			desc: "The aluminum case is lightweight and made from 100 percent recycled aerospace grade alloy.",
		},
		{
			id: 4,
			imgUrl: "https://s3-alpha-sig.figma.com/img/be36/e703/12d8a9bdcc0037bf00afd96c755742f3?Expires=1659916800&Signature=Lm-ET5cz7SV8vLE~mkrDkupYtXNqYzzgM92zKF9VPDm9ksJ2uEtYkEAPDiW7BSRQu~kg6TkM3dovHB5FkF~0yeTr3ZUl~ec3GB35otNm4rioZftklcMu6U8t5ZTfJhfiGxfh8bqvR6pekXWiMrN-s8dUjOPzwrJRdhAK9ywRc6JRw~c7edtNySsdouekJHElWfvm8k9olltCT6G7h9ew2h4TrWjUkuLmYtbtNmWZL0dWhWx8G781y7OPiRXSYX7tjMbkUjiC6jf76HmCuUHbPGCU~zD3jGTsQYnfOsQtDY~fzVYMNuv32eBvLngxsgwUjWX~ByI6XkH41y0BulxlcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
			name: "Amazfit Bip U",
			series: "Pro Series",
			price: "199",
			bgColor: "#FCF1F0",
			desc: "The aluminum case is lightweight and made from 100 percent recycled aerospace grade alloy.",
		},
	];
	return (
		<Routes>
			<Route exact path="/" element={<Home products={PRODUCTS} />} />
			<Route
				exact
				path="/:productId"
				element={<ProductDetail products={PRODUCTS} />}
			/>
		</Routes>
	);
}

export default App;
