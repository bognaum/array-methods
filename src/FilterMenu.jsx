import "./FilterMenu.css"
import "./icomon-08/style.css";

export default function FilterMenu(props) {
	const 
		cb = (v) => v.checked,
		menuSign = 
			props.filterKeys.every(cb)? <span className="font-icon icon-checked"></span> :
			props.filterKeys.some(cb)? <span className="font-icon icon-filter-5"></span> :
			<span className="font-icon icon-unchecked"></span>;

	return (
		<div className="filter-menu">
			<div className="filter-menu__hidden">
				<label className="filter-menu__option">
					<input 
						type="checkbox" 
						hidden
						onChange={() => {
							props.filterKeys.forEach(v => v.checked = true);
							props.rerenderList();
						}}
					/>
					<span className="font-icon icon-check-all-3"></span>
					&nbsp;&nbsp;
					check all
				</label>
				<label className="filter-menu__option">
					<input 
						type="checkbox" 
						hidden
						onChange={() => {
							props.filterKeys.forEach(v => v.checked = !v.checked);
							props.rerenderList();
						}}
					/>
					<span className="font-icon icon-invert-checks-17"></span>
					&nbsp;&nbsp;
					invert checks
				</label>
				<div style={{borderBottom: "1px solid #aaa", margin: ".5em 0"}}></div>
				{props.filterKeys.map((v, i) => {
					return (
						<label className="filter-menu__option" key={i}>
							<input
								type="checkbox"
								hidden
								checked={v.checked} 
								onChange={() => {
									v.checked = !v.checked;
									props.rerenderList();
								}}
							  
							/>
							<span
								className={
									"font-icon "+
									(v.checked ? "icon-checked" : "icon-unchecked")
								}
							></span>
							&nbsp;&nbsp;
							{v.key}
						</label>
					);
				})}
			</div>
			&nbsp;{menuSign}&nbsp;
		</div>
	);
}
