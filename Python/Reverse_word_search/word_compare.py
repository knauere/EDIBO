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


# with open("t_perm.txt") as f1, open("t_dict.txt") as f2:


textfile = file('results.txt', 'wt')

perm1 = open("t_perm.txt", "r")
dict1 = open("t_dict.txt", "r")
result = open("results.txt", "a")

list1 = perm1.readlines()
list2 = dict1.readlines()

result.write("The following entries appear in both lists: \n")

for i in list1:
    for j in list2:
        if i==j:
            #result.write(i)
            print(result)