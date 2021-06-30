import React, { useState, useEffect } from "react";
import style from "./cardStyle";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Simplecard() {
	const [city, fillcities] = useState([]);
	const classes = style();
	const bull = <span className={classes.bullet}>•</span>;

	const getdata = async (url) => {
		const response = await fetch(url);
		return await response.json();
	};
	useEffect(async  =>{
		const response = getdata("https://api.openweathermap.org/data/2.5/weather?q=santiago&appid=43def69e64b4a6ab0e92f4789d013c31")
		console.log(response)
		const city = [response].map(()=>({
			nubes: response.clouds,
			cityName: response.name,
		}));
		fillcities(city);
	},[]);

	return (
		<Card className={classes.root}>
			{city.map((main, id) => (
				
				<CardContent key={id}>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom>
						Hola{console.log(main)}
					</Typography>
					<Typography variant="h5" component="h2">
						be{bull}nev{bull}o{bull}lent
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						{main.cityNamecl}
					</Typography>
					<Typography variant="body2" component="p">
						well meaning and kindly.
						<br />
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>
			))}
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
