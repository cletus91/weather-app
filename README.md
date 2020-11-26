# weather-app
A simple weather app to get the current weather with hourly forecast by entering the city name.
# Usage
Get your own API key by signing up on https://www.weatherapi.com/
Make sure you store this in a variable, add it to your .gitignore file and never ever commit it to github. You can use dotenv package for this which is what I have used in this project.

```bash
npm install dotenv
```
As early as possible in your application, require and configure dotenv.

```bash
require('dotenv').config()
```

Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

```bash
const apiKey = process.env.REACT_APP_API_KEY;
```
