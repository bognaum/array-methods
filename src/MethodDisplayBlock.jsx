import "./MethodDisplayBlock.css";

export default function MethodDisplayBlock(props) {
	const 
		mOb = props.methodOb,
		baseHref = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/",
		href = baseHref+(mOb.hrefPostfix || mOb.key);
	// console.log(`mOb >>`, mOb);
	return (
		<div className="method-display-block">
			<div className="method-display-block__title">
				<code>
					{
						(mOb.key[0] === "[") ?
							<span className="method-display-block__m-name">{mOb.key}</span>
						:
							<span className="method-display-block__m-name">.{mOb.key}</span>
					}
					{" "}
					<span
					  className="method-display-block__args"
					  title={mOb.args.descr}>{mOb.args.key}</span>
				</code>
			</div>
			<div className="method-display-block__description">{mOb.descr}</div>
			<table border="" style={{textAlign: "center"}}>
				<tbody>
					<tr>
						<td>
							<div className="method-display-block__prop-name">
								returned
							</div>
							<div className="method-display-block__prop-value">
								{mOb.returned.key}
							</div>
						</td>
						<td>
							<div className="method-display-block__prop-name">
								callback
							</div>
							<div
							  className="method-display-block__prop-value"
							  title={mOb.callback.descr}>
							  {mOb.callback.key}
							  </div>
						</td>
						<td>
							<div className="method-display-block__prop-name">
								Changes of array
							</div>
							<div className="method-display-block__prop-value">
								{mOb.arrChanges.key}
							</div>
						</td>
						<td>
							<div className="method-display-block__prop-name">
								fullness of iteration
							</div>
							<div className="method-display-block__prop-value">
								{mOb.iterFullness.key}
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div><a href={href} rel="noreferrer" target="_blank">{href}</a></div>
		</div>
	);
}