import "./FilteredList.css";
import MethodDisplayBlock from "./MethodDisplayBlock";
import arrMethods from "./data/array-methods.js";
import { useState } from "react";

export default function FilteredList() {
	const 
		initSortParams = [
			{
				title: "Alphabet",
				sort: (a, b) => compare(a.name, b.name),
			},
			{
				title: "Arguments",
				sort: (a, b) => compare(a.args.name, b.args.name),
			},
			{
				title: "Returned value",
				sort: (a, b) => compare(a.returned.name, b.returned.name),
			},
			{
				title: "Array changes",
				sort: (a, b) => compare(a.arrChanges.name, b.arrChanges.name),
			},
			{
				title: "Callback",
				sort: (a, b) => compare(a.callback.name, b.callback.name),
			},
			{
				title: "Iteration fullness",
				sort: (a, b) => compare(a.iterFullness.name, b.iterFullness.name),
			},
		],
		[sortParams, setSortParams] = useState(initSortParams),
		[methods, setMethods] = useState(arrMethods)

	return (
		<div className="filtered-list">
			<h2>Sort by:</h2>
			<ol>
				{
					sortParams.map((v, i) => {
						return (
							<li key={i} >
								<button
								  onClick={
									  function (ev) {
										  const 
										  	sorted = methods.sort(v.sort),
											sParam = sortParams.splice(i, 1);
										  setMethods([...sorted]);
										  setSortParams([...sParam, ...sortParams]);
									  }
								  }
								  >{v.title}</button>
							</li>
						);
					})
				}
			</ol>
			<div className="methods">
				{
					methods.map((v,i) => {
						return <MethodDisplayBlock key={i} methodOb={v}></MethodDisplayBlock>
					})
				}
				
			</div>
		</div>
	);
}

function compare(a ,b) {
	return a < b ? -1 : a > b ? 1 : 0;
}