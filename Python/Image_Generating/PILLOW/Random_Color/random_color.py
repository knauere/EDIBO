# This is random background color avatar generator
import random
from PIL import Image, ImageDraw, ImageFont

# image size
width = 270
height = 270

# creates variables random rgb values
r = random.randint(0, 255)
g = random.randint(0, 255)
b = random.randint(0, 255)

# define source folder
SourceFolder = ''
# generate background image
img = Image.new(mode="RGB", size=(width, height), color=(r, g, b))
# import font (font, size)
font = ImageFont.truetype("arial", 160)
# create text upon image
d = ImageDraw.Draw(img)
# text properties (size, str, fill, font)
d.text((55, 50), "IO", fill="black", font=font)

# preview shows final image
#img.show()

# enable to save final image
img.save('random1.png')
