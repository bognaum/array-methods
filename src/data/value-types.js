// eslint-disable-next-line import/no-anonymous-default-export
export default  {
	returned :  [
		{
			key: "array",
			descr: "Returns array"
		},
		{
			key: "iterator",
			descr: "Returns iterator"
		},
		{
			key: "length",
			descr: "Returns length"
		},
		{
			key: "element",
			descr: "Returns element"
		},
		{
			key: "index",
			descr: "Returns index"
		},
		{
			key: "hash",
			descr: "Returns hash"
		},
		{
			key: "string",
			descr: "Returns string"
		},
		{
			key: "boolean",
			descr: "Returns boolean"
		},
		{
			key: "undefined",
			descr: "Returns undefined"
		},
		{
			key: "other",
			descr: "Returns other"
		},
	],
	args : [
		{
			key: "()",
			descr: "no argumebts",
		},
		{
			key: "(i)",
			descr: "index",
		},
		{
			key: "(depth)",
			descr: "depth",
		},
		{
			key: "(string)",
			descr: "string",
		},
		{
			key: "(element, ...)",
			descr: "one or many elements",
		},
		{
			key: "(element, fromIndex)",
			descr: "elem - value of element \nfromIndex - check from this index",
		},
		{
			key: "(v, iA, iB)",
			descr: "v - filling value \niA - from index \niB - to index",
		},
		{
			key: "(iTarget, iA, iB)",
			descr: "iTarget - index of target element \niA - from index \niB - to index",
		},
		{
			key: "(beginIndex, endIndex)",
			descr: "beginIndex - index of begin \nendIndex - index of end",
		},
		{
			key: "(callb)",
			descr: "callback",
		},
		{
			key: "(callb, thisArg)",
			descr: "callb - callback \nthisArg - value of 'this' (optional)",
		},
		{
			key: "(callb, accum)",
			descr: "callb - callback \naccum - accumulator - initial value to first call of callback",
		},
		{
			key: "(arr1, arr2, ...)",
			descr: "two or many arrays",
		},
		{
			key: "(begin, delCount, added1, ...)",
			descr: "begin - index of begin \ndelCount - how many elements \n added1 - added element",
		},
		{
			key: "(locales, options)",
			descr: "",
		},
	],
	callback : [
		{
			key: "(v, i, a) => undefined",
			descr: [
				"v - value",
				"i - index",
				"a - array",
				"returns undefined",
			].join("\n"),
		},
		{
			key: "(v, i, a) => v",
			descr: [
				"v - value",
				"i - index",
				"a - array",
				"returns new value",
			].join("\n"),
		},
		{
			key: "(v, i, a) => true/false",
			descr: [
				"v - value",
				"i - index",
				"a - array",
				"returns a boolean sign",
			].join("\n"),
		},
		{
			key: "(acc, v, i, a) => acc",
			descr: [
				"acc - accumulator",
				"  v - value",
				"  i - index",
				"  a - array",
				"returns new accumulator",
			].join("\n"),
		},
		{
			key: "(a, b) => -1|0|1",
			descr: [
				"a - compared value",
				"b - compared value",
				"returns compare result (-1|0|1)",
			].join("\n"),
		},
		{
			key: "none",
			descr: "No callback",
		},
	],
	arrChanges : [
		{
			key: "changed",
			descr: "Source array is changed."
		},
		{
			key: "not-changed",
			descr: "Source array is not changed."
		},
	],
	iterFullness : [
		{
			key: "full",
			descr: "array iteration always is complete."
		},
		{
			key: "not-full",
			descr: "Array iteration is incomplete."
		},
		{
			key: "no-iter",
			descr: "No iteration"
		}
	],
}
// export default valueTypes;