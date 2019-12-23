import React from 'react';
import { Table } from 'semantic-ui-react';

function getFormattedTime(time) {
	const hour = Math.floor(time/3600);
	time %= 3600;
	const minute = Math.floor(time/60);
	const second = Math.floor(time%60);
	return (hour>0 ? hour+":" : "") + 
		(minute < 10 ? "0"+minute : minute) + ":" + 
			(second < 10 ? "0"+second : second);
}

export default function RunInfo(props) {
	
	const timeInSeconds = (props.runInfo.hour*3600) + (props.runInfo.minute*60) + (1*props.runInfo.second);
	var avgMile = (props.runInfo.mileage!==0 && timeInSeconds!==0) ? timeInSeconds/props.runInfo.mileage : "0";
	var splits = [];
	for (var x=1;x <= props.runInfo.mileage;++x){
		splits.push( getFormattedTime(avgMile*x) );
	}
	
	return (
		<div className="runInfo">
			{props.runInfo.mileage === "0" ? (
				<h2>
					Fill out the form!
				</h2>
			) : (<React.Fragment><h2>{props.runInfo.mileage} miles{/*props.runInfo.unit*/} run</h2>

				<p>Total Time: {timeInSeconds}</p>
				<p>Average Time: {Math.floor(avgMile)}</p>
				<h3>Pace Per Mile:</h3>
				<p>{getFormattedTime(avgMile)}</p></React.Fragment>
			)}
			
			{splits.length > 0 ? (
				<Table selectable size="large">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Mile</Table.HeaderCell>
							<Table.HeaderCell>Time</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
					{splits.map((time,index)=> (
						<Table.Row key={index}>
							<Table.Cell>{index+1}</Table.Cell>
							<Table.Cell>{time}</Table.Cell>
						</Table.Row>
					))}
					</Table.Body>
				</Table>
			) : null}
		</div>
	);
}
