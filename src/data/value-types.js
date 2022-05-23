export const
	returned =  [
		{
			name: "array",
			descr: "Returns array"
		},
		{
			name: "iterator",
			descr: "Returns iterator"
		},
		{
			name: "length",
			descr: "Returns length"
		},
		{
			name: "element",
			descr: "Returns element"
		},
		{
			name: "index",
			descr: "Returns index"
		},
		{
			name: "hash",
			descr: "Returns hash"
		},
		{
			name: "string",
			descr: "Returns string"
		},
		{
			name: "boolean",
			descr: "Returns boolean"
		},
		{
			name: "undefined",
			descr: "Returns undefined"
		},
		{
			name: "other",
			descr: "Returns other"
		},
	],
	args = [
		{
			name: "()",
			descr: "no argumebts",
		},
		{
			name: "(i)",
			descr: "index",
		},
		{
			name: "(depth)",
			descr: "depth",
		},
		{
			name: "(string)",
			descr: "string",
		},
		{
			name: "(element, ...)",
			descr: "one or many elements",
		},
		{
			name: "(element, fromIndex)",
			descr: "elem - value of element \nfromIndex - check from this index",
		},
		{
			name: "(v, iA, iB)",
			descr: "v - filling value \niA - from index \niB - to index",
		},
		{
			name: "(iTarget, iA, iB)",
			descr: "iTarget - index of target element \niA - from index \niB - to index",
		},
		{
			name: "(beginIndex, endIndex)",
			descr: "beginIndex - index of begin \nendIndex - index of end",
		},
		{
			name: "(callb)",
			descr: "callback",
		},
		{
			name: "(callb, thisArg)",
			descr: "callb - callback \nthisArg - value of 'this' (optional)",
		},
		{
			name: "(callb, accum)",
			descr: "callb - callback \naccum - accumulator - initial value to first call of callback",
		},
		{
			name: "(arr1, arr2, ...)",
			descr: "two or many arrays",
		},
		{
			name: "(begin, delCount, added1, ...)",
			descr: "begin - index of begin \ndelCount - how many elements \n added1 - added element",
		},
		{
			name: "(locales, options)",
			descr: "",
		},
	],
	callback = [
		{
			name: "(v, i, a) => undefined",
			descr: [
				"v - value",
				"i - index",
				"a - array",
				"returns undefined",
			].join("\n"),
		},
		{
			name: "(v, i, a) => v",
			descr: [
				"v - value",
				"i - index",
				"a - array",
				"returns new value",
			].join("\n"),
		},
		{
			name: "(v, i, a) => true/false",
			descr: [
				"v - value",
				"i - index",
				"a - array",
				"returns a boolean sign",
			].join("\n"),
		},
		{
			name: "(acc, v, i, a) => acc",
			descr: [
				"acc - accumulator",
				"  v - value",
				"  i - index",
				"  a - array",
				"returns new accumulator",
			].join("\n"),
		},
		{
			name: "(a, b) => -1|0|1",
			descr: [
				"a - compared value",
				"b - compared value",
				"returns compare result (-1|0|1)",
			].join("\n"),
		},
		{
			name: "none",
			descr: "No callback",
		},
	],
	arrChanges = [
		{
			name: "changed",
			descr: "Source array is changed."
		},
		{
			name: "not-changed",
			descr: "Source array is not changed."
		},
	],
	iterFullness = [
		{
			name: "full",
			descr: "array iteration always is complete."
		},
		{
			name: "not-full",
			descr: "Array iteration is incomplete."
		},
		{
			name: "no-iter",
			descr: "No iteration"
		}
	];