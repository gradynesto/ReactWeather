var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This weather application I built on React. I build this for Udemy class, <i><a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank">The Complete React Web App Developer Course</a></i>/.</p>
            <p>
                Here are some tools I used:
                </p>
            <ul>
                <li>
                    <a href="httsp://facebook.github.io/react">React</a> - This was teh Javascript framework used.
                    
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
                    </li>
            </ul>
        </div>
    )
}

module.exports = About;