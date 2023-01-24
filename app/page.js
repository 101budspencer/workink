"use client";

import Image from "next/image";
import Logo from "../public/logo.svg";
import Home from "../public/home.svg";
import Trash from "../public/trash.svg";
import Checkmark from "../public/checkmark.svg";
import Link from "next/link";
import "./page.css";
import "./reset.css";

export default function Page() {
	return (
		<main>
			<div className="SideBar">
				<Link href="/">
					<Image className="Logo" src={Logo} alt="work.ink company logo" />
				</Link>
				<div className="Line"></div>
				<div className="PaddingFiller"></div>
				<div className="Navigation">
					<div>
						<Link className="NavigationLink" href="/">
							<span className="NavigationIcon">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="gauge"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-v-0e435c06=""
								>
									<path
										fill="currentColor"
										d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7zM144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176zM96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224zM416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288zM368 112C350.3 112 336 126.3 336 144C336 161.7 350.3 176 368 176C385.7 176 400 161.7 400 144C400 126.3 385.7 112 368 112z"
									></path>
								</svg>
							</span>
							<span className="NavigationName">Dashboard</span>
						</Link>
					</div>
					<div>
						<Link className="NavigationLink" href="/statistics">
							<span className="NavigationIcon">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="chart-bar"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-v-0e435c06=""
								>
									<path
										fill="currentColor"
										d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM128 128C128 110.3 142.3 96 160 96H352C369.7 96 384 110.3 384 128C384 145.7 369.7 160 352 160H160C142.3 160 128 145.7 128 128zM288 192C305.7 192 320 206.3 320 224C320 241.7 305.7 256 288 256H160C142.3 256 128 241.7 128 224C128 206.3 142.3 192 160 192H288zM416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H160C142.3 352 128 337.7 128 320C128 302.3 142.3 288 160 288H416z"
									></path>
								</svg>
							</span>
							<span className="NavigationName">Statistics</span>
						</Link>
					</div>
					<div>
						<Link className="NavigationLink" href="/statistics">
							<span className="NavigationIcon">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="money-check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 576 512"
									data-v-0e435c06=""
								>
									<path
										fill="currentColor"
										d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM112 224C103.2 224 96 231.2 96 240C96 248.8 103.2 256 112 256H272C280.8 256 288 248.8 288 240C288 231.2 280.8 224 272 224H112zM112 352H464C472.8 352 480 344.8 480 336C480 327.2 472.8 320 464 320H112C103.2 320 96 327.2 96 336C96 344.8 103.2 352 112 352zM376 160C362.7 160 352 170.7 352 184V232C352 245.3 362.7 256 376 256H456C469.3 256 480 245.3 480 232V184C480 170.7 469.3 160 456 160H376z"
									></path>
								</svg>
							</span>
							<span className="NavigationName">Payment</span>
						</Link>
					</div>
					<div>
						<Link className="NavigationLink" href="/statistics">
							<span className="NavigationIcon">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="headset"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-v-0e435c06=""
								>
									<path
										fill="currentColor"
										d="M191.1 224c0-17.72-14.34-32.04-32-32.04L144 192c-35.34 0-64 28.66-64 64.08v47.79C80 339.3 108.7 368 144 368H160c17.66 0 32-14.36 32-32.06L191.1 224zM256 0C112.9 0 4.583 119.1 .0208 256L0 296C0 309.3 10.75 320 23.1 320S48 309.3 48 296V256c0-114.7 93.34-207.8 208-207.8C370.7 48.2 464 141.3 464 256v144c0 22.09-17.91 40-40 40h-110.7C305 425.7 289.7 416 272 416H241.8c-23.21 0-44.5 15.69-48.87 38.49C187 485.2 210.4 512 239.1 512H272c17.72 0 33.03-9.711 41.34-24H424c48.6 0 88-39.4 88-88V256C507.4 119.1 399.1 0 256 0zM368 368c35.34 0 64-28.7 64-64.13V256.1C432 220.7 403.3 192 368 192l-16 0c-17.66 0-32 14.34-32 32.04L320 335.9C320 353.7 334.3 368 352 368H368z"
									></path>
								</svg>
							</span>
							<span className="NavigationName">Support</span>
						</Link>
					</div>
					<div>
						<Link className="NavigationLink" href="/statistics">
							<span className="NavigationIcon">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="terminal"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 576 512"
									data-v-0e435c06=""
								>
									<path
										fill="currentColor"
										d="M9.372 86.63C-3.124 74.13-3.124 53.87 9.372 41.37C21.87 28.88 42.13 28.88 54.63 41.37L246.6 233.4C259.1 245.9 259.1 266.1 246.6 278.6L54.63 470.6C42.13 483.1 21.87 483.1 9.372 470.6C-3.124 458.1-3.124 437.9 9.372 425.4L178.7 256L9.372 86.63zM544 416C561.7 416 576 430.3 576 448C576 465.7 561.7 480 544 480H256C238.3 480 224 465.7 224 448C224 430.3 238.3 416 256 416H544z"
									></path>
								</svg>
							</span>
							<span className="NavigationName">Developer Tools</span>
						</Link>
					</div>
					<div>
						<Link className="NavigationLink" href="/settings">
							<span className="NavigationIcon">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="gears"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
									data-v-0e435c06=""
								>
									<path
										fill="currentColor"
										d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"
									></path>
								</svg>
							</span>
							<span className="NavigationName">Settings</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="Viewport">
				<div className="Container">
					<div className="Col7">
						<div className="Card">
							<div className="CardTitle">Estimated earnings</div>
							<div className="CardRow">
								<div>
									<div className="AmountDescription">Today so far</div>
									<span className="Amount">€12.39</span>
								</div>
								<div>
									<div className="AmountDescription">Yesterday</div>
									<span className="Amount">€22.80</span>
								</div>
								<div>
									<div className="AmountDescription">Last 7 days</div>
									<span className="Amount">€178.58</span>
								</div>
								<div>
									<div className="AmountDescription">This month</div>
									<span className="Amount">€476.20</span>
								</div>
								<div>
									<div className="AmountDescription">Last 28 days</div>
									<span className="Amount">€514.48</span>
								</div>
							</div>
						</div>
					</div>
					<div className="Col3 RightBoxPadding">
						<div className="Card">
							<div className="CardTitle">
								Total balance & pending for payout
							</div>
							<div className="TotalBalanceContainer">
								<span className="Amount">€843.82</span>
								<div className="AmountDescription">Last payment</div>
								<div className="AmountDescription">€623.76</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Container">
					<div>
						<div className="CardAlt Col7">
							<div className="CardAltTitle">Your Addressess</div>
							<div className="CardAltView">
								<div className="CardAltInner">
									Money will be sent to your active address (green):
								</div>
								<div className="CardAltAddressContainer">
									<div className="CardAltAddressCol1">
										<Image alt="Home Icon" className="HomeIcon" src={Home} />
										<div className="CardAltAddress">
											<div className="Address">Address</div>
											<code>nico.hantak@gmx.at</code>
										</div>
										<div>
											<div>
												<b>Method:</b> paypal
											</div>
											<div className="ActiveFlexHelper">
												<b>Active:</b>

												<Image
													alt="Checkmark Icon"
													className="CheckmarkIcon"
													src={Checkmark}
												/>
											</div>
										</div>
									</div>
									<div className="CardAltButtons">
										<Image
											alt="Checkmark Icon 2"
											className="CheckmarkIcon"
											src={Checkmark}
										/>
										<div>
											<Image
												alt="Trashbin Icon"
												className="TrashIcon"
												src={Trash}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="CardAlt Col7">
							<div className="CardAltTitle">Your Payouts</div>
							<div className="CardAltView">
								<div className="TableContainer">
									<table className="Table">
										<tr>
											<th>Date</th>
											<th>Revenue</th>
											<th>Method</th>
											<th>Status</th>
										</tr>
										<tr>
											<td>2.10.2022</td>
											<td>116.31</td>
											<td>PayPal</td>
											<td className="FlexGreenDot">
												<div className="GreenDot" />
												Completed
											</td>
										</tr>
										<tr>
											<td>26.9.2022</td>
											<td>1 EUR</td>
											<td>PayPal</td>
											<td className="FlexGreenDot">
												<div className="GreenDot" />
												Completed
											</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
						<div className="CardAlt Col7">
							<div className="CardAltTitle">Info about Addresses & Payouts</div>
							<div className="CardAltView">
								<div className="CardAltInner">
									<div className="InfoPaddingCreator">
										<b>Warning:</b> You need to reach a minimum amount of 100
										EUR before we'll pay you out.
									</div>
									<div className="PayoutInfo">
										We will try our best to pay you the money you deserve - the
										way you want. Just add an address that fits the payment
										methods you selected above and{" "}
										<b>you'll receive your money at the end of each month</b> if
										the minimum amount of the payout server is reached. If not,
										wei'll pay you out as soon as the minimum amount is reached.
										If we cannot pay out to the provided address, we'll open a
										support ticket.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="Col3">
						<div>
							<div className="CardAlt">
								<div className="CardAltTitle">Add Address</div>
								<div className="CardAltView">
									<form>
										<div className="InputContainer">
											<label htmlFor="input2">
												Address
												<span title="Required field.">(Required)</span>
											</label>
											<textarea
												className="Input"
												required=""
												id="input2"
												placeholder="Select a Payment Method first..."
											></textarea>
										</div>
										<div className="InputContainer">
											<label htmlFor="input3">
												Address
												<span title="Required field.">(Required)</span>
											</label>
											<select
												className="Input"
												required=""
												id="input3"
												placeholder="Select a payment method..."
												type="select"
											>
												<option defaultValue value="0">
													Select a payment method...
												</option>
												<option value="1">Bank Transfer (min.: 100 EUR)</option>
												<option value="2">PayPal (min.: 50 EUR)</option>
											</select>
										</div>
										<div className="Info">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="circle-info"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
												></path>
											</svg>
											<span>
												You can only have one address per payment service.
											</span>
										</div>
										<button className="FormSubmit">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="plus"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 448 512"
												data-v-9553ba18=""
											>
												<path
													fill="currentColor"
													d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
												></path>
											</svg>
											Add
										</button>
									</form>
								</div>
							</div>

							<div className="CardAlt">
								<div className="CardAltTitle">
									Instant Payout (Coming soon...)
								</div>
								<div className="CardAltView">
									<form>
										<div className="InputContainer">
											<label htmlFor="input">
												Address
												<span title="Required field.">(Required)</span>
											</label>
											<select
												className="Input ComingSoonInput"
												required=""
												id="input"
												placeholder="Select a payment method..."
												type="select"
											>
												<option defaultValue value="0">
													Select an address
												</option>
												<option value="1">...</option>
											</select>
										</div>

										<button className="FormSubmit ComingSoonButton">
											Coming soon...
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ResponsiveFooter"></div>
				<footer className="Footer">
					<span className="float-left">© work.ink 2022</span>
					<span className="float-right">
						<a href="//work.ink/imprint">Imprint</a>·
						<a href="//work.ink/privacy">Privacy Policy</a>·
						<a href="//work.ink/tos">ToS</a>
					</span>
				</footer>
			</div>
		</main>
	);
}
