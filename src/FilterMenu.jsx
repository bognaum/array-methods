import { useState } from "react";
import "./FilterMenu.css"
import "./icomon-02/style.css";

export default function FilterMenu(props) {
	const [allCheckState, setAllCheckState] = useState(true);
	const 
		cb = (v) => v.checked,
		menuSign = 
			props.filterKeys.every(cb)? <span className="checkbox-icon icon-checked"></span> :
			props.filterKeys.some(cb)? <span className="checkbox-icon icon-filter-5"></span> :
			<span className="checkbox-icon icon-unchecked"></span>;

	return (
		<div className="filter-menu">
			<div className="filter-menu__hidden">
				<label className="filter-menu__option">
					<input 
						type="checkbox" 
						hidden
						checked={allCheckState} 
						onChange={() => {
							const status = !allCheckState;
							setAllCheckState(status);
							props.filterKeys.forEach(v => v.checked = status);
							props.rerenderList();
						}}
					/>
					{menuSign}
					&nbsp;&nbsp;
					all
				</label>
				<hr />
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
									"checkbox-icon "+
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
