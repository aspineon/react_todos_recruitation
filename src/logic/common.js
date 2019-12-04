
function channelsToRGB(channels) {
	return `rgb(${channels['r']},${channels['g']},${channels['b']})`
}


function moveElemInArray(array, _from, _to) {

	const elem = array[_from]
	const without = array.filter((e, _k) => _k !== _from)
	const clean = []

	for(const idx in without){
		if(idx == _to){
			clean.push(elem)
		}
		clean.push(without[idx])
	}
    return clean
}

export {
    channelsToRGB, moveElemInArray
}