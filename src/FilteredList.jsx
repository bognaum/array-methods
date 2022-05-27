import "./FilteredList.css";
import "./icomon-03/style.css";
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

for (const i in valueTypes) {
	for (const v of valueTypes[i]) {
		v.checked = true;
	}
}

export default function FilteredList() {
	const 
		initSortParams = [
			{
				title: "Alphabet",
				sortCallb: (a, b) => compare(a.key, b.key),
				filterKeys: [],
			},
			{
				title: "Arguments",
				sortCallb: (a, b) => compare(a.args.key, b.args.key, args),
				filterKeys: args,
			},
			{
				title: "Returned value",
				sortCallb: (a, b) => compare(a.returned.key, b.returned.key, returned),
				filterKeys: returned,
			},
			{
				title: "Array changes",
				sortCallb: (a, b) => compare(a.arrChanges.key, b.arrChanges.key, arrChanges),
				filterKeys: arrChanges,
			},
			{
				title: "Callback",
				sortCallb: (a, b) => compare(a.callback.key, b.callback.key, callback),
				filterKeys: callback,
			},
			{
				title: "Iteration fullness",
				sortCallb: (a, b) => compare(a.iterFullness.key, b.iterFullness.key, iterFullness),
				filterKeys: iterFullness,
			},
		],
		[sortParams, setSortParams] = useState(initSortParams),
		[sorted, setSorted] = useState(arrMethods),
		filtered = filter(sorted);
	console.log(`sortParams >>`, sortParams);

	return (
		<div className="filtered-list">
			<h2>Sort by:</h2>
			<ol>
				{
					sortParams.map((v, i) => {
						return (
							<li key={v.title} className="filtered-list__menu-point" >
								{v.title} <br />
								<span 
									className="checkbox-icon icon-sort-7"
									onClick={(ev) => sortBy(v)}
									title={"Sort by "+v.title}
								></span>
								<FilterMenu
									filterKeys={v.filterKeys}
									rerenderList={rerenderList}
								></FilterMenu>
							</li>
						);
					})
				}
			</ol>
			<div className="methods">
				<p>{filtered.length} methods found.</p>
				{
					filtered.map((v,i) => {
						return (
							<MethodDisplayBlock key={i} methodOb={v}></MethodDisplayBlock>
						);
					})
				}
				
			</div>
		</div>
	);

	function rerenderList() {
		setSortParams([...sortParams]);
	}

	function filter(methods) {
		const res = [];
		for (const method of methods) {
			let flag = true;
			for (const vTName in valueTypes) {
				if (!method[vTName].checked) {
					flag = false;
					break;
				}
			}
			if (flag) {
				res.push(method);
			}
		}
		return res;
	}

	function sortBy(param) {
		const 
			index = sortParams.indexOf(param),
		 	newSorted = sorted.sort(param.sortCallb),
			sParam = sortParams.splice(index, 1);
		setSorted([...newSorted]);
		setSortParams([...sParam, ...sortParams]);
	}
}

function compare(a, b, seq=null) {
	if (seq) {
		const 
			ai = seq.findIndex(v => a ===v?.key),
			bi = seq.findIndex(v => b ===v?.key);
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
