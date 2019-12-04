import React, { useState, useEffect } from 'react'

const ColorRange = ({ onChange, colors }) => {
	return (
		<div className='range'>
			{colors.map((color, k) => {
				return (
					<a
						key={k}
						className='range-pointer'
						style={{ background: color }}
						onClick={() => {
							onChange({ target: { value: color } })
						}}
					/>
				)
			})}
		</div>
	)
}

export default ColorRange
