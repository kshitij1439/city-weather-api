import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({w}) {
    let clrskyimg = "https://media.istockphoto.com/id/543681360/photo/milky-way-galaxy-background-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=uf4a_NO72WXSBkuAfSDivdTkqgDSUnes5q1NQgH6MVQ=";
    // let w = {
    //     city:"Pune",
    //     feelsLike: 22.88,
    //     humidity:45,
    //     temp:23.32,
    //     tempMax:23.32,
    //     tempMin:23.32,
    //     weather:"clear sky"
    // }
    let hot_url="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwY2xpbWF0ZSUyMHNjZW5lfGVufDB8fDB8fHww";
    let rain_url="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMGNsaW1hdGV8ZW58MHx8MHx8fDA%3D";
    let cold_url="https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZGNsaW1hdGV8ZW58MHx8MHx8fDA%3D";
  return (
    <div>
        <h2>WeatherInfo - {w.weather}</h2>
      <Card sx={{ maxWidth: 345 }} className='Card'>
      <CardMedia
        sx={{ height: 140 }}
        image={w.humidity>95?rain_url:w.temp>15?hot_url:cold_url}
        title="green iguana"
        />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Location:  {w.city}
            &nbsp;
            {w.humidity>95?<ThunderstormIcon/>:w.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          

               <p>Temperature = {w.temp}&deg;C</p> 
               <p>Min Temperature = {w.tempMin}&deg;C</p> 
               <p>Humidity = {w.humidity}</p> 
               <p>The weather can be described as = {w.weather} and feels like {w.feelsLike}&deg;C</p> 
              
        </Typography>
      </CardContent> */}

<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Location:  {w.city}
    &nbsp;
    {w.humidity > 95 ? <ThunderstormIcon /> : w.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
  </Typography>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Temperature = {w.temp}&deg;C<br />
    Min Temperature = {w.tempMin}&deg;C<br />
    Humidity = {w.humidity}<br />
    The weather can be described as = {w.weather} and feels like {w.feelsLike}&deg;C
  </Typography>
</CardContent>


    </Card>
        </div>
  );
}