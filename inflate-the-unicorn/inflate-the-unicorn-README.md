[Home](../README.md)|
---|

# ~~Squirt The Clown~~
# Inflate The Unicorn

### Learning Competencies

- Using Javascript to change HTML images
- Calling functions with the `onclick` method
- Conditionals
- String concatenation
- Using alerts in your browser

## Summary

These unicorns have balloons for horns; but what good is a deflated horn? 

In this challenge you are going to replace the placeholder images with our deflated unicorns, then write some logic that cycles through the appropriate images when you click on a unicorn. Once the unicorn horn is fully inflated, an alert will pop up on the screen with a heartfelt THANK YOU from the unicorn. 

#### Resources
[HTML Images](https://www.w3schools.com/html/html_images.asp)\
[Javascript onclick() method](https://www.w3schools.com/jsref/event_onclick.asp)\
[Javascript Alerts](https://www.w3schools.com/jsref/met_win_alert.asp)

## Help those unicorns! 

Let's get started.

1. Open the `inflate-the-unicorn.html` file in your browser and take a look. 

You'll notice that currently it's just placeholder images. The first step is going to be replacing those with pictures of the unicorn from the /images directory. 

2. With the `inflate-the-unicorn.html` open in your code editor, find the three placeholder `<img>` tags and replace their `src=` elements to the `unicorn-0.png` image. Check that this has updated by reloading your browser.

3. Using the onclick method to call it, you will need to write a function that gets called every time you click on one of the unicorns.

Once you have written your function, how do you know if it is being called or not? Often this is where we would use something like a `console.log` as it will show up in the Dev Tools console even if we haven't completed our function yet!

4. Now it's time to get one of the key features of your page working. When you click the button your function should change the image of the unicorn to one of the other images.

You might be asking yourself something like, "how do I change an HTML image using Javascript?" Instead of asking yourself that, try typing _those exact words_ into Google. In general, whenever you find yourself wondering how to do something specific while programming: *TYPE THE WORDS INTO GOOGLE!*

5. In order to change the unicorn to the correct next image, you're going to need to keep track of the current number that each unicorn is on and use this to decide which image to change to.

There are several ways you could do this, and it just depends what makes the most sense to you. You probably are going to want to create some variables (perhaps `var unicorn1 = 0`, or `var unicorn1 = "empty"`). You could choose to store all the unicorn states in a single object, or even an array! It's up to you!

6. If a unicorn has cycled through all the images and the balloon is full, clicking on them should pop up an alert on your page that says something like, "Unicorn Number `x` says thank you!". 

Congratulations! You've successfully fixed the squirt the ~~clown~~ unicorn game and the crowds are eager to give it a go!

Make sure you push your code up to github so we can all enjoy it!

## Reflection

Open `my-reflections-sprint-5.md` from your reflections file in VS Code, add a `Inflate The Unicorn` heading, and add the following reflection questions from this challenge.

- Did you learn anything new during this exercise? What was it?

- Did you encounter issues completing any of the steps of this exercise? How did you resolve this?

- If you were to replace the unicorn with another mystical animal of your choice, what would it be?  

Make sure you commit and push to GitHub.

## Stretch

-  Once you click on a satisfied unicorn, instead of popping up an alert, what else could happen?

- Would adding some sound effects to this process make it more interesting? What sound does a unicorn make? 
