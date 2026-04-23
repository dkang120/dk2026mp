# /images — Asset Folder

Place your project images here. Match the filenames exactly or update the src attributes in index.html.

## Required images

| File                  | Used in             | Recommended size   |
|-----------------------|---------------------|--------------------|
| hero-main.jpg         | Home hero (left)    | 600 × 800 px       |
| product-card.png      | Home hero (right)   | 400 × 530 px       |
| jo-malone.jpg         | Portfolio row 1     | 400 × 710 px       |
| wellness-gym.jpg      | Portfolio row 1     | 700 × 700 px       |
| lacafe.jpg            | Portfolio row 2     | 400 × 710 px       |
| matchai.jpg           | Portfolio row 2     | 400 × 600 px       |
| glossier.jpg          | Portfolio row 2     | 400 × 600 px       |
| home-decor.jpg        | Portfolio row 3     | 400 × 710 px       |
| studio.jpg            | Portfolio row 3     | 700 × 530 px       |

## How to swap in real images

In index.html, find each placeholder div block like:

    <div class="thumb-placeholder dark">...</div>

Replace it (inside the .project-thumb wrapper) with:

    <img src="images/your-file.jpg" alt="Description" />

The CSS will handle sizing automatically via object-fit: cover.
