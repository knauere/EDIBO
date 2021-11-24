# this is a first test script for creating png files with a gradient
import png

width = 255
height = 255

img = []
for y in range(height):
    row = ()
    for x in range(width):
        row = row + (x, max(0, 0 - x - y), y)
    img.append(row)
with open('gradient.png', 'wb') as f:
    w = png.Writer(width, height, greyscale=False)
    w.write(f, img)
