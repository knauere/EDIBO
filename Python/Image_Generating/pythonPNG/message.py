# this is a second test file for creating png files with text binary
import png

s = ['01101011011010110110101101101011011010110110101101101011',
     '01101001011010010110100101101001011010010110100101101001',
     '01110010011100100111001001110010011100100111001001110010',
     '01100001011000010110000101100001011000010110000101100001']
s = [[int(c) for c in row] for row in s]

palette=[(0x55,0x55,0x55), (0x00,0x00,0x00)]
w = png.Writer(len(s[0]), len(s), palette=palette, bitdepth=8)
f = open('text.png', 'wb')
w.write(f, s)