---
title: How to Build Cryptocurrency Price Ticker Chrome Extension
author: Ethan Chiasson
image: "./images/ethan.png"
excerpt: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
date: 2019-12-12
tags: ["Vue", "Javascript", "Typescript"]
cover_image: "./images/bg2.jpg"
---

Let me start by saying that this tutorial will be using XHR. It is common knowledge that when working with APIs ,fetch is the go to method ( depending on who you ask of course ). Furthermore, in hopes of keeping the tutorial light on JavaScript ( as it can get complex ) , we will be making 3 separate calls to 3 different api URLs. We could build a function to get all 3 URLs and load them dynamically, but we won’t go that in depth, because this tutorial is focused on building a chrome extension.

# _#_ The Setup

Before we start, I am assuming you know how to create a folder for your project, open it in your editor, and create a simple HTML boiler plate. Once you are ready, keep reading

Manifest.json
A chrome extension isn’t as complex as some may thing. A chrome extension can be something as simple as ...

```html
<h1>Hello World</h1>
```

Keep in mind you won’t see anything render without a properly configured `manifest.json` file. In fact Chrome won’t even allow you to upload the extension for testing without this `manifest.json` file within your project folder ). That being said, create a new file called `manifest.json` file to the project folder (yes, you need to name it exactly how it is soon in my example).

Once you have the `manifest.json` file in your project folder, open it and paste the following code and save.

```json
{
  example Code
}
```

To check if you configured everything correctly, go back to your `main.html` files ( or whatever you called your html file ) and add some content ( a `<h1>` should work fine ).

Save your project files and open up a a Chrome browser and navigate to the menu at the top right of the browser and click “More Tools” and then fine “Extensions”.

Once you are on the extension page, click the “Load unpacked” button located at the top of the page. If you can not find this button, make sure you enable developer mode ( which can be done by clicking the toggle button at the top of the same page). Find your project folder and select it. Once you selected the folder, the working chrome extension should be displayed next to your other extension, assuming you followed the steps correctly. If you recieve any errors at this point, double check your code or search for the error. Google can be your friend.

# _#_ Getting our Data

Graduations.... I guess. I mean, let’s be honest, our extension ( in its current state ) kinda sucks. A chrome extension is nothing much unless we add some real world functionality to it, so let’s get started.

As the title suggest, we are going to be building a crypto currency price ticker by utilizing a neat API by Cryptonator.

First, you are going to need to grab some things from Cryptonator in order for us to make request in order to obtain the current market price of various cryptocurrencies in real time.

The link to the Cryptonator api here be found Here

## _</>_ Setting up the API

haha

## _</>_ Making the calls

# _#_ The build

Now that we have our manifest.json working and our api setup and providing our project with live data, the hard part is done.

All that is left to do is ...

1. Build a HTML template for how we want our data to appear
2. Display our data without our HTML elements
3. Style our extension ( because UI is very important )

## _</>_ Building our HTML

This part is really up to you, but If you want to follow this tutorial to a tee, here is the code.

Code

Here I define a main container container name and within it create 3 container divs for each of the 3 cryptocurrencies prices you want to display ( in my case, Bitcoin, Litecoin, and Ethereum ). I also added logos for each currency because sometimes visually appealing objects like logos make it easier on the user from a UI perspective, but feel free to keep this part out.

You make also notice that I have 3 divs , each with their own Unique Id= . ID’s are manly used to allow our JavaScript file ( our the functions within it ) to interact with a particular HTML element. We will call each of these IDs in the next section.

## _</>_ Displaying our data

Now that our basic HTML layout is established , we can now display our data.

Navigate back to your JavaScript file. Find your first Bitcoin / Crypto API call and add the following code to end of the function.

Code

What we are doing here is pretty simple. We usedocument.getElementById(‘bitcoinData’) = bitcoinPriceFinal to display the Bitcoin price in our bitcoinData div .

You may be wondering what that alien looking code above our document.getElementById. That is what we like to call “Massaging the data”.

You see, the Cryptonator api responds with bitcoin prices that aren’t formatted. For instance, the Cryptonator api response for the Bitcoin price is ( at the moment of writting this ), 7439.392829859 . Notice there is No comma after the 7 and we are getting back 8 digits after the decimal. This doesn’t look that nice, so we can format the decimal with the following code....

... and round to the 3rd digit after the decimal with the following code

After you are able to get the price for Bitcoin to display, copy and past the same code under the API calls for any of cryptocurrency and simply change the document.getElementById() to whatever the corresponding Div ID is.

That’s It! You should now see the data displayed In your extension.

# _#_ Styling Our Extension

At this point our Chrome Extension is fully functional and works great, but it’s pretty ugly. This post is already pretty long, so I won’t go through everything I have done in terms of CSS, but if you are following along with my exact code, feel free to copy and past this code into your project and edit it how you like.

Code

Essentially all I am doing here is adding some coloring, sizing, etc and using the float: variable to display the 3 crypto containers side by side to save on user’s screen real estate.
