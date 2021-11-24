# This is a Python script for making Combinations, Permutation and Variations from an array of numbers
import itertools

# make an array of numbers
my_list = [1, 2, 3, 4]

# COMBINATIONS: list numbers in pairs that doesn't repeat (position is not important) #
# make combination where three numbers are used
combinations = itertools.combinations(my_list, 3)
print("these are combinations of three:")
for c in combinations:
    print(c)

# make combination where two numbers are used
combinations = itertools.combinations(my_list, 2)
print("these are combinations of two:")
for c in combinations:
    print(c)


# TRUE PERMUTATION: amount is the same as number of elements in array, number position is important #
# make permutations where amount is the same as array length
permutations = itertools.permutations(my_list, len(my_list))
print("these are permutation of array length:")
for p in permutations:
    print(p)

# VARIATIONS : custom amount of numbers for permutation, where position is important #
# make permutations where three numbers are used
permutations = itertools.permutations(my_list, 3)
print("these are variations of three:")
for p in permutations:
    print(p)

# make permutations where two numbers are used
permutations = itertools.permutations(my_list, 2)
print("these are variations of two:")
for p in permutations:
    print(p)
