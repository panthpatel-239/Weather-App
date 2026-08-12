import './SearchBox.css' 

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function InfoBox({info}) {

    let cold_url="https://www.shutterstock.com/image-photo/snowcovered-branches-snowflakes-air-glittering-260nw-2363590985.jpg";
    let hot_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0gQ82LaImbOIgeb2ZHx5HGL_IoNE4fbka61yC6lwThHBtoZZzVfW3-8kxjXhyB0&s=10&ec=121924538";
    let rain_url="https://i.pinimg.com/474x/8e/cf/79/8ecf7957bd461603b492feca775acddd.jpg";

    return (
        <div className="InfoBox">
            <div className="card">
                <form>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={info.humidity>80? rain_url : info.temperature > 15 ? hot_url : cold_url}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <p>humidity : {info.humidity}</p>
                                <p>pressure : {info.pressure}</p>
                                <p>temp : {info.temperature}&deg;C</p>
                                <p>temp_max : {info.temperature_max}&deg;C</p>
                                <p>temp_min : {info.temperature_min}&deg;C</p>
                                <p>The weather can be describe as <i><b>{info.weather}</b></i> & feels lik {info.feelslike}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </div>
    );
}
