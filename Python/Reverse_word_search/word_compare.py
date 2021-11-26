# this is a python script to compare generated words with dictionary

# open text file
perm_list = open('perm_words.txt')

# read file into a string
perm_string = perm_list.read()

# remove symbols , and ' from the list, separate in new lines at spaces
new_perm = perm_string.replace(',', '').replace('\'', '').replace('[', '').replace(']', '').replace(' ', '\n')

# print new perm string
# print(new_perm)

# save cleaned perm list into new file
file = open('new_perm_words.txt', "w")
file.write(new_perm)
file.close()

# open perm words
perm_file = set(line.strip() for line in open('new_perm_words.txt'))

# open dictionary
dictionary = set(line.strip() for line in open('words_dictionary.txt'))

for line in perm_file & dictionary:

    if line:

        print(line)
