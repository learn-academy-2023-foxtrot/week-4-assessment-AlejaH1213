# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AH

1. What is object-oriented programming? How is it different than functional programming?

Your answer: object oriented programming assumes that everything is an object and treats everything like an instance of a class, it is different than functional programming because functional programming doesnt assume that everything is an object

Researched answer: OOP focuses in objects while FP focuses on functions, an example of OOP is Ruby and an example of FP can be JavaScript or Python. OOP was created to deal with large software systems because it promotes the idea of encapsulation which allows coders to manipulate specific parts of the code without affecting all the code

2. Ruby has an implicit return. What does that mean?

Your answer: it means that when we create a method there is no need to add a return 

Researched answer: in Ruby the last line of code in a method is treat it as the return automatically without needing to write "return", this is different from other languages like JavaScript
example:
in javascript a function would have the keyword return
func nameOfTheFunc = (parameter) => {
    return parameter
}
in Ruby there is no need to write the keyword
def name_of_the_func parameter
    parameter
end
3. What is a block in Ruby?

Your answer: a block is the code that exist between def and end 

Researched answer: a Ruby Block is an anonymous function that is inside a method  and are typically defined by the keywords do and end
for example
var_example = [1, 2, 3]
var_example.each do |value|
    p value * 2
end

the code inside lines 38 and 40 is a Ruby Block 

4. How do you extract a single value from a Ruby hash?

Your answer: to extract a single value from a Ruby hash we can call on the key name of that value with dot notation
for example
hash_example = {name: 'Aleja', last_name: 'Hale'}

p hash_example.last_name

Researched answer: to extract a single value from the hash you call on that hash and use bracket notation and a colon before the name of the key 
corrected example: 
hash_example = {name: 'Aleja', last_name: 'Hale'}

p hash_example[:last_name]

5. STRETCH: What is a version manager?

Your answer: a version manager checks that the version of the software is up to date

Researched answer: a version manager allows developers to use different versions of programming languages, they help preventing conflicts between different versions of different languages

## Looking Ahead: Terms for Next Week

1. Test-driven development: test driven development is the process of first writing the test, expect failure and then creating the function that will make the test pass

2. PostgreSQL: an object-relational database management system

3. CRUD: CRUD is an acronym describing the minimal actions necessary for a full stack web application. it stands for Create, Read, Update, and Delete
