# This is a reverse sorting script.
from itertools import permutations

# defines string to be sorted
text1 = "aabijmssu"
# lists permutations
string_perm = list(permutations(text1))
# joins permutations
string_perm = [''.join(permutation) for permutation in string_perm]

# prints permutations
print(string_perm)
