# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code: 
# name: even_or_odd
# input: takes in a number 
# output: "#{number} is even or odd"
# process: im going to create the method and inside of if ill do an if and else statement that checks if the number is even or odd and returns it with string interpolation
def even_or_odd number
    if number % 2 == 0
        "#{number} is even"
    else 
        "#{number} is odd"
    end
end
p even_or_odd reposts1
p even_or_odd reposts2
p even_or_odd reposts3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# name: no_vowels
# input: a string
# output: a string with no vowels
# process: Ill use the .delete method on the string and then give the parameter of what i want deleted in the string in this case, all the vowels in both lowercase and upcase
def no_vowels string
    string.delete "aeiouAEIOU"
end

p no_vowels beatles_album1
p no_vowels beatles_album2
p no_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# name: palindrome
# input: a string
# output: another string
# process: im going to create a method called palindrome that takes a string as parameter
# then im going to create a new variable that takes that string and turns it in lowercase 
# then im going to create an if statement that checks if the string is equal to that same string but in reverse and if it is i will use string interpolation to say that the string is palindrome or not
def palindrome string
    lowercase_string = string.downcase
        if lowercase_string == lowercase_string.reverse
            "#{string} is a palindrome"
        else "#{string} is not a palindrome"
        end
end

p palindrome palindrome_test_case1
p palindrome palindrome_test_case2
p palindrome palindrome_test_case3
# if this words had spaces my function wouldnt work but i dont know how i could make it work, maybe deleting the spaces? 