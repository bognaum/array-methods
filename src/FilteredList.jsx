import MethodDisplayBlock from "./MethodDisplayBlock";
import arrMethods from "./data/array-methods.js";

export default function FilteredList() {
	return (
		<div className="filtered-list">
			<h2>Sort by:</h2>
			<div className="methods">
				{
					arrMethods.map((v,i) => {
						return <MethodDisplayBlock key={i} methodOb={v}></MethodDisplayBlock>
					})
				}
				
			</div>
		</div>
	);
}