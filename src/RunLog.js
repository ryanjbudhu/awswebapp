import React from 'react';

export default function RunLog(props) {
	const { name, mileage, runTime, time } = props.run;
	
	return (
		<div className="">
			
			<div className="">
				<small className="float-right">{time}</small>
				<h6>{name}</h6>
				Ran {mileage} mile{mileage > 1 ? "s" : ""} in a time of {runTime}
			</div>
		</div>
	)
}