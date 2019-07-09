# ColorConverterApp

## Exercise ColorConverter Api

We will write a color conversion api with the help of the color-convert package
Make your self familiar with color-convert, test it's API... (What is the RGB of hotpink 🧐)
We want to create different routes:

1. /convert/rgbtohsl/
2. /convert/keywordtorgb/
3. /convert/rgbtohex/
4. /convert/hextorgb/

Create all 4 endpoints with the .get method
We have different options to pass over values to our requests you saw already route
parameters today, but we will use query parameters instead you can read about how to
use them here: https://expressjs.com/en/4x/api.html#req.query
Example request: http://localhost:3000/convert/keywordtorgb?color=hotpink
Extra
Color statistics
Read about middlewares https://expressjs.com/en/guide/writing-middleware.html
Create a middleware that gets the color query parameter
use the fs module to store color value statistics in a statistic.json file
create a route /statistic that serves the statistics
example response:

{
"colorStatistic": {
"hotpink": 1284,
"black": 1,
"i'm_not_a_valid_color_but_i_made_it_into_the_statistics": 2
}
}

#HowTo:

@ GitHub: 
New repo "ColorConverterApp" with readme (copy exercise description into it)
@ MachineFolder git clone that repo
cd ColorConverterApp
npm init (creates package.json)
Install color-convert-api:
npm install color-convert
Install express-api:
(Installieren Sie jetzt Express im Verzeichnis app und speichern Sie es in der Abhängigkeitsliste.)
npm install express --save
(beide Apis wurde dadurch dem node-modules-Folder hinzugefügt)
Require the apis in the js.-File:

