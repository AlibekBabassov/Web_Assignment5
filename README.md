Assignment 5: JavaScript Basics (DOM Manipulation & Events)

Name: Alibek Babassov
Group: IT-2503


Part 1: Profile Object, Data Types & Arithmetic

Task 1: The Personal Info Object
I created a `const` object called `userProfile` with four types of data: `name` (string), `birthYear` (number), `isDeveloper` (boolean) and `hobbies` (array). I also added `birthMonth` so the age can be calculated correctly. I printed the object in the console to check that all values are correct.

Task 2: Arithmetic Calculations

I used `new Date()` to get the current year and month. I calculate `monthsOld` with `(currentYear - birthYear) * 12 + (currentMonth - birthMonth)` and the age with `Math.floor(monthsOld / 12)`. I also count the hobbies with `hobbies.length`. The results are shown in the console and on the page inside `profileInfo`.

<img width="1512" height="982" alt="Снимок экрана 2026-10-22 в 17 14 36" src="https://github.com/user-attachments/assets/3ad59610-c722-4537-87fe-04668738ab3c" />


Part 2: Form Input & Event Responses

Task 3: HTML Form Setup
 I created a form with inputs for Username, Birth Year and Birth Month, and a "Create / Update Profile" submit button. I used `required`, `min` and `max` so the browser checks the values, and gave each input an `id` for JavaScript.

Task 4: Event Listener
I added a `submit` listener to the form. It uses `preventDefault()` to stop the page from reloading, reads the inputs with `.value`, converts the numbers with `Number()`, and updates `userProfile`. Then it calls `showProfile()` to show the new values.

<img width="1512" height="982" alt="Снимок экрана 2026-10-22 в 17 25 10" src="https://github.com/user-attachments/assets/bb39fac2-20cd-489e-8420-44ea97c4af63" />
<img width="1512" height="982" alt="Снимок экрана 2026-10-22 в 17 26 41" src="https://github.com/user-attachments/assets/fe56db21-975f-4dde-a83a-ed743ca48ffe" />


Part 3: DOM List Manipulation

Task 5: Creating & Removing Elements
The "Add Item" button creates an `<li>` with `createElement`, sets its text with `textContent`, and adds it to the list with `appendChild`. The "Remove Item" button deletes the last item with `lastElementChild` and `removeChild`, after checking that the list is not empty.

<img width="1512" height="982" alt="Снимок экрана 2026-10-22 в 17 31 28" src="https://github.com/user-attachments/assets/b9e2a795-ded4-4535-87db-04b9315c78b1" />

Adding items:
<img width="1512" height="982" alt="Снимок экрана 2026-10-22 в 17 32 49" src="https://github.com/user-attachments/assets/a71432fe-7c0f-4e10-88bb-69b548b6c9d5" />


Removing an item:
<img width="1512" height="982" alt="Снимок экрана 2026-10-22 в 17 31 40" src="https://github.com/user-attachments/assets/c41a1c3c-f403-4720-970b-658f88d7f643" />


Summary of my work process
<img width="1512" height="982" alt="Снимок экрана 2026-10-22 в 17 35 54" src="https://github.com/user-attachments/assets/6c808c67-a35c-40ee-ae76-31574af6211e" />

In this assignment I practiced JavaScript and DOM manipulation. I created the `userProfile` object and calculated the age and months from the current date. Then I built a form that updates the object with an event listener, and a list where items can be added and removed. I tested everything in the browser and the console, added simple CSS, and published the project on GitHub Pages.
