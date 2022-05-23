import MethodDisplayBlock from "./MethodDisplayBlock";
import arrMethods from "./data/array-methods.js";
import { useState } from "react";

export default function FilteredList() {
	const 
		sortParams = [
			{
				title: "alphabet",
				sort: (a, b) => compare(a.name, b.name),
			},
			{
				title: "arguments",
				sort: (a, b) => compare(a.args.name, b.args.name),
			},
			{
				title: "returned value",
				sort: (a, b) => compare(a.returned.name, b.returned.name),
			},
			{
				title: "array changes",
				sort: (a, b) => compare(a.arrChanges.name, b.arrChanges.name),
			},
			{
				title: "callback",
				sort: (a, b) => compare(a.callback.name, b.callback.name),
			},
			{
				title: "iteration fullness",
				sort: (a, b) => compare(a.iterFullness.name, b.iterFullness.name),
			},
		],
		[methods, setMethods] = useState(arrMethods)

	return (
		<div className="filtered-list">
			<h2>Sort by:</h2>
			<ol style={{
				display: "inline-block", 
				position: "sticky", 
				top: "0",
				backgroundColor: "#222",
			}}>
				{
					sortParams.map((v, i) => {
						return (
							<li key={i} >
								<button
								  style={{width:"100%"}}
								  onClick={
									  function (ev) {
										  const sorted = methods.sort(v.sort);
										  setMethods([...sorted]);
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