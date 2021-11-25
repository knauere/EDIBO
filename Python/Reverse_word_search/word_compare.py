# this is a python script to compare generated words with dictionary

# open text file
perm_list = open('perm_words.txt')

# read file into a string
perm_string = perm_list.read()

# replace symbols
new_perm = perm_string.replace(',', '')
new_perm2 = perm_string.replace('\'', '')

# print new perm string
print(new_perm2)

# open perm words
perm = set(line.strip() for line in open('perm_words.txt'))

# open dictionary
dictionary = set(line.strip() for line in open('words_dictionary.txt'))

for line in perm & dictionary:

    if line:

        print(line)
