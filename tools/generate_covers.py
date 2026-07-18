"""Generate 560x360 cover cards matching assets/covers/timeline/gpt3.jpg style."""

import matplotlib
import os
import random

from PIL import Image, ImageDraw, ImageFilter, ImageFont

FONTS = os.path.join(os.path.dirname(matplotlib.__file__), "mpl-data", "fonts", "ttf")
BOLD = os.path.join(FONTS, "DejaVuSans-Bold.ttf")
MONO = os.path.join(FONTS, "DejaVuSansMono-Bold.ttf")

W, H = 560, 360
BG = (10, 20, 31)  # #0a141f
CYAN = (110, 231, 255)
AMBER = (255, 184, 107)
WHITE = (238, 244, 250)
MUTED = (150, 165, 180)
FRAME = (255, 255, 255, 26)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets", "covers")


def glow_layer(size, blobs):
    layer = Image.new("RGB", size, (0, 0, 0))
    d = ImageDraw.Draw(layer)
    for (cx, cy, r, color, alpha) in blobs:
        col = tuple(int(c * alpha) for c in color)
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=col)
    return layer.filter(ImageFilter.GaussianBlur(60))


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width or not current:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def make_cover(path, tag, eyebrow, headline, tagline):
    img = Image.new("RGB", (W, H), BG)

    glow = glow_layer(
        (W, H),
        [
            (90, 40, 150, CYAN, 0.32),   # cyan top-left
            (500, 30, 140, AMBER, 0.26), # amber top-right
            (470, 330, 160, (60, 110, 150), 0.18),
        ],
    )
    from PIL import ImageChops

    img = ImageChops.screen(img, glow)

    # subtle decorative rings, echoing gpt3.jpg
    ring = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.arc([300, 20, 620, 340], start=110, end=330, fill=(110, 231, 255, 46), width=10)
    rd.arc([-140, -60, 220, 300], start=250, end=80, fill=(110, 231, 255, 22), width=26)
    ring = ring.filter(ImageFilter.GaussianBlur(2))
    img = Image.alpha_composite(img.convert("RGBA"), ring)

    draw = ImageDraw.Draw(img)

    # inner frame
    draw.rectangle([26, 26, W - 27, H - 27], outline=FRAME, width=1)

    # tag pill top-right
    tag_font = ImageFont.truetype(MONO, 13)
    tw = draw.textlength(tag, font=tag_font)
    pad_x, pad_y = 12, 7
    box_w, box_h = tw + pad_x * 2, 13 + pad_y * 2
    x0, y0 = W - 26 - 14 - box_w, 26 + 8
    draw.rectangle([x0, y0, x0 + box_w, y0 + box_h], outline=(255, 255, 255, 60), width=1)
    draw.text((x0 + pad_x, y0 + pad_y - 1), tag, font=tag_font, fill=(210, 222, 233))

    # eyebrow
    eb_font = ImageFont.truetype(MONO, 15)
    draw.text((54, 108), eyebrow, font=eb_font, fill=CYAN)

    # headline, wrapped, auto-shrink until it fits above the tagline
    max_w = W - 54 - 54
    size = 30
    while size > 16:
        h_font = ImageFont.truetype(BOLD, size)
        lines = wrap_text(draw, headline, h_font, max_w)
        line_h = int(size * 1.22)
        total_h = line_h * len(lines)
        if 140 + total_h <= H - 70:
            break
        size -= 1
    y = 140
    for line in lines:
        draw.text((54, y), line, font=h_font, fill=WHITE)
        y += line_h

    # tagline bottom-left
    tl_font = ImageFont.truetype(MONO, 13)
    draw.text((54, H - 26 - 26), tagline, font=tl_font, fill=MUTED)

    random.seed(path)
    img = img.convert("RGB")
    img.save(path, "JPEG", quality=90)
    print("wrote", os.path.relpath(path))


jobs = [
    (
        os.path.join(OUT, "timeline", "reasoning.jpg"),
        "HISTORY",
        "2024-2025",
        "Reasoning models made thinking time a new scaling axis.",
        "test-time compute",
    ),
    (
        os.path.join(OUT, "library", "deepseek-r1.jpg"),
        "LIBRARY",
        "PAPER · 2025",
        "DeepSeek-R1: reasoning via reinforcement learning",
        "open weights, open recipe",
    ),
    (
        os.path.join(OUT, "library", "karpathy-deep-dive.jpg"),
        "LIBRARY",
        "VIDEO",
        "Deep Dive into LLMs like ChatGPT",
        "full pipeline tour",
    ),
]

for args in jobs:
    make_cover(*args)
