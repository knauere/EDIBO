# This is a Python script for counting wordCount number of words in a string

# defines string variables of input line and input file
textLine = ""
fileName = ""

# set the word count start at one
wordCount = 1

# asks user for multiple choice
inp = input("Choose input type: \n1 - Write Something \n2 - Input File\n")

# if user chooses 1:LINE TEXT
if inp == "1":
    # asks for user text
    textLine = input("Please input something here: ")

    # create loop for each i, count char in string with len() and make an array of counted numbers
    for i in range(len(textLine)):
        # check if string has spaces, new textLine or tabs
        if textLine[i] == ' ' or textLine == '\n' or textLine == '\t':
            # add one to the word count
            wordCount = wordCount + 1

    # print out the amount of words and characters in a string
    print("Total Number of Words = ", wordCount)
    print("Total Number of Characters = ", (len(textLine)))

# if user chooses 2:FILE TEXT
elif inp == "2":
    # asks user for file name
    fileName = input("Please input file name: ")

    # opens that fileName and returns all lines in file as a list
    with open(fileName, 'r') as t:
        # converts line into string
        fileLine = str(t.readlines())

        # doesn't input fileLine to clean up #
        # cleanLine = t.read().replace('\n', '')
        # print(cleanLine)

        # create loop for each i, count char in string with len() and make an array of counted numbers
        for i in range(len(fileLine)):
            # check if string has spaces, new textLine or tabs
            if fileLine[i] == ' ' or fileLine == '\n' or fileLine == '\t':
                # add one to the word count
                wordCount = wordCount + 1

    # print out the word count answer
    print("Total Number of Words in this String = ", wordCount)

# if incorrect option entered, display error
else:
    print("You must choose between 1 or 2")
