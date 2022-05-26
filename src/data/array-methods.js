import valueTypes from "./value-types.js";
const {
	returned,
	args,
	callback,
	arrChanges,
	iterFullness,
} = valueTypes;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		key: "[Symbol.iterator]",
		descr: "Returns an iterator object.",
		hrefPostfix: "@@iterator",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "iterator"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "at",
		descr: "Returns an element with given index.",
		args        : getArrElem(args        , "(i)"),
		returned    : getArrElem(returned    , "element"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "concat",
		descr: "Returns new concatenated array from several given arrays.",
		args        : getArrElem(args        , "(arr1, arr2, ...)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "copyWithin",
		descr: "Copies part of an array to another location in the same array.",
		args        : getArrElem(args        , "(iTarget, iA, iB)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "entries",
		descr: "Returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "iterator"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "every",
		descr: "Tests whether all elements pass the test implemented by callback.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "boolean"),
		callback    : getArrElem(callback    , "(v, i, a) => true/false"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "full"),
	},
	{
		key: "fill",
		descr: "Fills all or set elements with the set value.",
		args        : getArrElem(args        , "(v, iA, iB)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "filter",
		descr: "Returns a new array with elements that pass the test implemented by callback.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "(v, i, a) => true/false"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "full"),
	},
	{
		key: "find",
		descr: "Returns the first element that satisfies the provided callback.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "element"),
		callback    : getArrElem(callback    , "(v, i, a) => true/false"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "not-full"),
	},
	{
		key: "findIndex",
		descr: "Returns the index of element that satisfies the provided callback.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "index"),
		callback    : getArrElem(callback    , "(v, i, a) => true/false"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "not-full"),
	},
	{
		key: "flat",
		descr: "Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
		args        : getArrElem(args        , "(depth)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "flatMap",
		descr: "Returns a new flat array formed by applying a given callback.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "(v, i, a) => v"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "full"),
	},
	{
		key: "forEach",
		descr: "Applies given callback to each array element.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "undefined"),
		callback    : getArrElem(callback    , "(v, i, a) => undefined"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "full"),
	},
	/* {
		key: "groupBy",
		descr: "Returns",
		args        : getArrElem(args        , ""),
		returned    : getArrElem(returned    , ""),
		callback    : getArrElem(callback    , ""),
		arrChanges  : getArrElem(arrChanges  , ""),
		iterFullness: getArrElem(iterFullness, ""),
	},
	{
		key: "groupByToMap",
		descr: "Returns",
		args        : getArrElem(args        , ""),
		returned    : getArrElem(returned    , ""),
		callback    : getArrElem(callback    , ""),
		arrChanges  : getArrElem(arrChanges  , ""),
		iterFullness: getArrElem(iterFullness, ""),
	}, */
	{
		key: "includes",
		descr: "Returns boolean sign of including given element in array.",
		args        : getArrElem(args        , "(element, fromIndex)"),
		returned    : getArrElem(returned    , "boolean"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "indexOf",
		descr: "Returns the first index of given element or -1.",
		args        : getArrElem(args        , "(element, fromIndex)"),
		returned    : getArrElem(returned    , "index"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "join",
		descr: "Returns a string joined from array through given string",
		args        : getArrElem(args        , "(string)"),
		returned    : getArrElem(returned    , "string"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "keys",
		descr: "Returns an iterator object by keys.",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "iterator"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "lastIndexOf",
		descr: "Returns the last index of given element or -1.",
		args        : getArrElem(args        , "(element, fromIndex)"),
		returned    : getArrElem(returned    , "index"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "map",
		descr: "Returns a new array populated with the results of calling a provided callback on every element.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "(v, i, a) => v"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "full"),
	},
	{
		key: "pop",
		descr: "Deleted and returns a last element of array.",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "element"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "push",
		descr: "Adds one or more elements to the end of array, and returns new array length.",
		args        : getArrElem(args        , "(element, ...)"),
		returned    : getArrElem(returned    , "length"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "reduce",
		descr: "Returns Hash received by sequential processing of array elements with given callback.",
		args        : getArrElem(args        , "(callb, accum)"),
		returned    : getArrElem(returned    , "hash"),
		callback    : getArrElem(callback    , "(acc, v, i, a) => acc"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "full"),
	},
	{
		key: "reduceRight",
		descr: "Returns Hash received by sequential processing of array elements with given callback in backward sequence.",
		args        : getArrElem(args        , "(callb, accum)"),
		returned    : getArrElem(returned    , "hash"),
		callback    : getArrElem(callback    , "(acc, v, i, a) => acc"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "full"),
	},
	{
		key: "reverse",
		descr: "Reverses the array and returns it.",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "shift",
		descr: "Deleted and returns a first element of array.",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "element"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "slice",
		descr: "Returns an array with sliced elements. Еру logic is similarly to logic of string.slice().",
		args        : getArrElem(args        , "(beginIndex, endIndex)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "some",
		descr: "Tests whether some one element satisfies the provided callback.",
		args        : getArrElem(args        , "(callb, thisArg)"),
		returned    : getArrElem(returned    , "boolean"),
		callback    : getArrElem(callback    , "(v, i, a) => true/false"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "sort",
		descr: "Sorts the array and returns it.",
		args        : getArrElem(args        , "(callb)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "(a, b) => -1|0|1"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "not-full"),
	},
	{
		key: "splice",
		descr: "Returns array of deleted elements from given position, and added to this position other given elements.",
		args        : getArrElem(args        , "(begin, delCount, added1, ...)"),
		returned    : getArrElem(returned    , "array"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "toLocaleString",
		descr: "Returns a string representation of array.",
		args        : getArrElem(args        , "(locales, options)"),
		returned    : getArrElem(returned    , "string"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "toString",
		descr: "Returns a string representation of array.",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "string"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "unshift",
		descr: "Adds one or more elements to the begin of array, and returns new array length.",
		args        : getArrElem(args        , "(element, ...)"),
		returned    : getArrElem(returned    , "length"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
	{
		key: "values",
		descr: "Returns an iterator object by values of elements.",
		args        : getArrElem(args        , "()"),
		returned    : getArrElem(returned    , "iterator"),
		callback    : getArrElem(callback    , "none"),
		arrChanges  : getArrElem(arrChanges  , "not-changed"),
		iterFullness: getArrElem(iterFullness, "no-iter"),
	},
];

function getArrElem(arr, key) {
	const i = arr.findIndex(v => v.key === key);
	if (0 <= i) {
		return arr[i];
		// return i;
	} else {
		console.error(`(!)-USER'S `, `invalid key \n`, key, `\n in`, arr);
		throw new Error(`invalid key ${key}`)
	}
}
