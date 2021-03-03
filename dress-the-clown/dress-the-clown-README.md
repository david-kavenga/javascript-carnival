[Home](../README.md)|
---|

# Dress The Clown!

### Learning Competencies

- Using Javascript to change HTML images.
- Binding functions to the arrow keys.
- Writing logical, DRY functions in Javascript.

## Summary

Look at that clown! Sure, he looks pretty good; but without an outfit can he really _call himself a clown?_
We are going to write some `JavaScript functions` and bind them to the arrow keys on your keyboard. The *up and down arrow keys* will move between different parts of the clown, and the *left and right* arrow keys will cycle between different clothing options.

#### Resources

[Getting an Element by ID](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)\
[Concat Strings in Javascript](https://www.w3schools.com/jsref/jsref_concat_string.asp)\
[KeyboardEvent Documentation](https://www.w3schools.com/jsref/event_key_keycode.asp)\
[Detect Keycodes!](https://keycode.info/)

## Time to Dress The Clown!

Let's get started.

1. Familiarize yourself with the `dress-the-clown.html` document and the `images` folder. Notice how each body part has six images and follow a naming convention: bodypartname + number.

Before trying to get the whole body working, lets focus on just one part.

2. We can start in `dress-the-clown.js` by writing a function that can change the *head* image of the clown. The function might be called something like `changeClownHead`.  

3. You'll need a way to get a _reference_ to the head image element and save it to a variable so we can then change it. A good way of doing this might be to give the `<img>` html tag an ID, such as `id="head"`. We can then use JavaScript to [get an element by its ID](https://www.w3schools.com/jsref/met_document_getelementbyid.asp).

4. Now that you have a variable that refers to the head image, we can change the `src` to point to a different picture. That would look something like: 

```
headVariable.src = "./images/head1.png"
``` 

5. Try calling your function from in your js file and see if the head changes. 

Hopefully that worked.. but frankly it's a pretty terrible function. This function is meant to _cycle through_ the heads, but all it does currently is change the image to head1 every time. 

What you really want is to be able to call the function over and over again, and have the `src` of the image change based on some kind of head index counter. 

6. Create a variable to store the current number of the head image. ie, `var headIndex = 0`. This variable should be *outside of your function* so we can increase every time this function is called, but also use it in other functions.

So what you're probably thinking now is: "What good does that do me?? How do I use the head variable to set the `src` of the head image variable??". Allow me to blow your mind with the concept of [concatenation](https://www.w3schools.com/jsref/jsref_concat_string.asp). This allows you to construct a string from different variables, which we can then use as the string for your head `src`. 

7. In your `changeClownHead` function, create a variable to store your string. You can use the `concat` method linked above, or simply add strings together with a plus symbol. ie, 

```
var headSrc = "./images/head" + headIndex + ".png"
``` 

8. Once you have this string, use it to update your image src and then increase your `headIndex` variable by one. This means that next time you call this function, it should be using the next image instead of the same one.

In order to test whether the function is working, you'll have to be able to call it over and over again. This is where the arrow keys start to come in! 

9. We want to use the right arrow key to call the function, so it's time to do some googling. Something along the lines of "call a function with arrow keys javascript" should do it. (Spoiler alert: you will likely need to figure out what the "keycode" for the right arrow key is. Try using this tool [Detect Keycodes!](https://keycode.info/)).

You should now be able to use the right arrow key to move between different head images. However, there is an issue. If your `headIndex` variable increases _higher_ than the number of head images available, everything breaks. How could you change your code to prevent this? 

10. Add a check to your function so that if the number goes too high, instead of increasing it by one it instead sets it back to zero.

Okay so that problem solved, now lets refactor your code again to allow for toggling _left_ through the head images with the left arrow key. 

11. This functionality will be almost identical, but now your `headIndex` variable needs to _decrease_ rather than increase. In order to avoid re-creating that same bug from before, you will now also need to check and make sure the index doesn't fall _below zero_. 

You should now have a fully functioning Put A Clown In Different Hats Simulator. The next step is going to be using the up and down arrow keys to *toggle between the different body parts*.  

12. You're going to need another index that keeps track of which body part you are currently selecting clothing for. Something along the lines of `var clothingIndex = 0`. The index will correspond to the different body parts: `0 = head, 1 = body, 2 = feet`. Write some code that allows you to *use the up and down arrow keys to increase and decrease the clothingIndex variable*, and to make sure it doesn't go too high or low. For now you could `console.log` this number to make sure it's working.

Now comes the part where we bring all the pieces together. 

13. Refactor your code so that if your `clothingIndex == 0`, the left and right arrow keys change the head image, if the `clothingIndex == 1`, the left and right arrow keys change the body image, etc. Try to avoid duplicating your code whenever possible (keep it DRY). In fact, instead of duplicating the entire `changeClownHead` function, try reworking it into a `changeClothes` function that can change any of the body parts. The logic is going to be _almost identical_. Really the main difference is going to be which HTML `<img>` you are changing, and therefore what your concatenated `src` string is.

Once that's working, you're done! Push your code up to github and you can dress the clown to your heart's content! Awesome job!

## Reflection

Open `my-reflections-sprint-5.md` in VS Code, add a `Dress a Clown` heading, and add the following reflection questions from this challenge.

- How did you find the process of refactoring your code? 

- Would you do anything differently if you were to start this challenge again?

- What piece of code are you proudest of from this exercise? 

Commit and push to GitHub.

## Stretch

- It's kind of annoying how you can't tell _which_ body part you have selected when looking at the page. Could you highlight that in some way?

- Try adding some of your own outfits! Copy one of the images and doodle on it in the paint application of choice.

- What if there was a button you could press that could SAVE a picture of your clown to your computer to share with your friends? How on earth would you do that?
