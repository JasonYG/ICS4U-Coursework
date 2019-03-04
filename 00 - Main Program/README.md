Main Program Ideas
---
My main program will be written in Javascript, and in collaboration with [Aarish](https://github.com/Aarish-A).

The project will be done on a separate repository. Please see [here](https://github.com/Aarish-A/ICS4U0-Culminating) for the full program.

We will be creating a web application that creates study guides. The idea is that a user inputs a topic they'd like to know more about, and our program will create a study guide with information from a variety of sources.

There will be two aspects to the program: the web scraping portion, and the data parsing part.

Web Scraping
---
Web scraping is searching the internet for information. Our program will search the internet for the user's inputted topic, and "scrap the web" for detailed information and key concepts.

To do this, we will likely be using a Node package that allows us to obtain the full HTML of different web pages.

Data Parsing
---
After the web scraper has found information on the topic, the data parsing algorithm will extract the key concepts and information from the text. 

To do this, we will likely use an API, such as the [SMMRY API](https://smmry.com/api), to condense the text into important sentences. We will be using another API, like the [Microsoft Azure API](https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-keyword-extraction), to extract the key concepts from the text.



