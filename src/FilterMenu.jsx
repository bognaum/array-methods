import { useState } from "react";
import "./FilterMenu.css"

export default function FilterMenu(props) {
	const 
		len = props.filterKeys.length,
		[allCheckState, setAllCheckState] = useState(true),
		[checkeds, setCheckeds] = useState(new Array(len).fill(true));
	// console.log(`checkeds >>`, checkeds);
	return (
		<div className="filter-menu">
			<div className="filter-menu__hidden">
				<label className="filter-menu__option">
					<input 
						type="checkbox" 
						checked={allCheckState} 
						onChange={() => {
							setAllCheckState(!allCheckState);
							setCheckeds(new Array(len).fill(!allCheckState));
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
								checked={checkeds[i]} 
								onChange={() => {
									checkeds[i] = !checkeds[i];
									setCheckeds([...checkeds]);
								}}
							  
						/>
							{v.name}
						</label>
					);
				})}
			</div>
			&nbsp;✔&nbsp;
		</div>
	);
}
