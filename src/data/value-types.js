export const
	returned =  [
		{
			name: "array",
			descr: "Returns array"
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
			name: "string",
			descr: "Returns string"
		},
		{
			name: "hash",
			descr: "Returns hash"
		},
		{
			name: "iterator",
			descr: "Returns iterator"
		},
		{
			name: "boolean",
			descr: "Returns boolean"
		},
		{
			name: "length",
			descr: "Returns length"
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
		},
		{
			name: "(i)",
		},
		{
			name: "(elem)",
		},
		{
			name: "(element, ...)",
		},
		{
			name: "(elem, iA, iB)",
		},
		{
			name: "(iTarget, iA, iB)",
		},
		{
			name: "(beginIndex, endIndex)",
		},
		{
			name: "(elem, fromIndex)",
		},
		{
			name: "(string)",
		},
		{
			name: "(callb)",
		},
		{
			name: "(callb, thisArg)",
		},
		{
			name: "(callb, accum)",
		},
		{
			name: "([], [], ...)",
		},
		{
			name: "(begin, delCount, ...)",
		},
		{
			name: "(locales, options)",
		},
	],
	callback = [
		{
			name: "none",
			descr: "No callback",
		},
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
			name: "(v, i, a) => i",
			descr: [
				"v - value",
				"i - index",
				"a - array",
				"returns index or -1",
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