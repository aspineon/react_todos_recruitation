import React, { useState } from 'react'
import ColorRange from './ColorRange'
import {channelsToRGB} from '../logic/common'

const colors = [{ r: 0, g: 123, b: 255 },
		{ r: 40, g: 167, b: 69 },
		{ r: 220, g: 53, b: 69 },
		{ r: 255, g: 193, b: 7 },
		{ r: 255, g: 255, b: 255 }].map(channelsToRGB)


const ColorPicker = ({ onColorChange, isDuringEdit, onClick }) => {
	
	function onChange(ev) {
		const { value } = ev.target
		onColorChange({ target: { value: value }})
		// onClick()
	}

	return (
		isDuringEdit && (
			<div className="color-picker">
				<ColorRange 
					colors={colors}
					name='r'
					onChange={onChange} />
			</div>
		)
	)

}

export default ColorPicker
