import "./FilteredList.css";
import MethodDisplayBlock from "./MethodDisplayBlock";
import arrMethods from "./data/array-methods.js";
import FilterMenu from "./FilterMenu";
import { useState } from "react";
import valueTypes from "./data/value-types.js";
const {
	returned,
	args,
	callback,
	arrChanges,
	iterFullness,
} = valueTypes;

export default function FilteredList() {
	const 
		initSortParams = [
			{
				title: "Alphabet",
				sortCallb: (a, b) => compare(a.name, b.name),
				filterKeys: [],
			},
			{
				title: "Arguments",
				sortCallb: (a, b) => compare(a.args.name, b.args.name, args),
				filterKeys: args,
			},
			{
				title: "Returned value",
				sortCallb: (a, b) => compare(a.returned.name, b.returned.name, returned),
				filterKeys: returned,
			},
			{
				title: "Array changes",
				sortCallb: (a, b) => compare(a.arrChanges.name, b.arrChanges.name, arrChanges),
				filterKeys: arrChanges,
			},
			{
				title: "Callback",
				sortCallb: (a, b) => compare(a.callback.name, b.callback.name, callback),
				filterKeys: callback,
			},
			{
				title: "Iteration fullness",
				sortCallb: (a, b) => compare(a.iterFullness.name, b.iterFullness.name, iterFullness),
				filterKeys: iterFullness,
			},
		],
		[sortParams, setSortParams] = useState(initSortParams),
		[methods,    setMethods]    = useState(arrMethods);

	return (
		<div className="filtered-list">
			<h2>Sort by:</h2>
			<ol>
				{
					sortParams.map((v, i) => {
						return (
							<li key={v.title} >
								<FilterMenu
									filterKeys={v.filterKeys}
								></FilterMenu>
								<button
								  onClick={(ev) => sortBy(v)}
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

	function sortBy(param) {
		const 
			index = sortParams.indexOf(param),
		 	sorted = methods.sort(param.sortCallb),
			sParam = sortParams.splice(index, 1);
		setMethods([...sorted]);
		setSortParams([...sParam, ...sortParams]);
	}
}

function compare(a, b, seq=null) {
	if (seq) {
		const 
			ai = seq.findIndex(v => a ===v?.name),
			bi = seq.findIndex(v => b ===v?.name);
		if (ai === -1) {
			console.error(`(!)-USER'S `, `Invalid value to sort \n`, a, "is not found in", seq);
		}
		if (bi === -1) {
			console.error(`(!)-USER'S `, `Invalid value to sort \n`, b, "is not found in", seq);
		}
		return ai < bi ? -1 : ai > bi ? 1 : 0;
	} else {
		return a < b ? -1 : a > b ? 1 : 0;
	}
}