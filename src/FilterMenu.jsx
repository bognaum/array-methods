import { useState } from "react";
import "./FilterMenu.css"

export default function FilterMenu(props) {
	const [allCheckState, setAllCheckState] = useState(true);
	return (
		<div className="filter-menu">
			<div className="filter-menu__hidden">
				<label className="filter-menu__option">
					<input 
						type="checkbox" 
						checked={allCheckState} 
						onChange={() => {
							const status = !allCheckState;
							setAllCheckState(status);
							props.filterKeys.forEach(v => v.checked = status);
							props.rerenderList();
						}}
					/>
					all
				</label>
				<hr />
				{props.filterKeys.map((v, i) => {
					return (
						<label className="filter-menu__option" key={i}>
							<input
								type="checkbox"
								checked={v.checked} 
								onChange={() => {
									v.checked = !v.checked;
									props.rerenderList();
								}}
							  
						/>
							{v.key}
						</label>
					);
				})}
			</div>
			&nbsp;✔&nbsp;
		</div>
	);
}
