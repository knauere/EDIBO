# draw_rectangle.py
from PIL import Image, ImageDraw, ImageFont
# specify folder here
SourceFolder = ''

def republika(output_path):
    # brick colored bg
    img = Image.new('RGB', (1200, 400), color=(125, 51, 51))
    # draw the img bg
    draw = ImageDraw.Draw(img)
    # left rectangle
    draw.rectangle((0, 0, 400, 400), fill="orange")
    # white stripe in the middle
    draw.rectangle((0, 140, 1200, 260), fill="white")
    # big blue eclipse
    draw.ellipse((200, -40, 1000, 440), fill=(25, 140, 255), outline=(0, 128, 255), width=10)
    # small inner eclipse
    draw.ellipse((230, -10, 970, 410), fill=(25, 140, 255), outline=(255, 217, 25), width=5)
    # text printing (src, font, size)
    fnt = ImageFont.truetype(SourceFolder + 'bulletto.ttf', 110)
    # draws text on image
    d = ImageDraw.Draw(img)
    # prints text with parameters (location, string, font, fill color, text align, multiline spacing)
    d.multiline_text((390, 20), "Banānu\n »  »  » \nrepublika", font=fnt, fill="white", align="center", spacing=-23)
    img.save(output_path)


# ????
if __name__ == "__main__":
    # saves file
    republika("republika.png")
