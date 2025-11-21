# goit-markup-hw-06

Simple markup project for the GO IT course.

## Contents

- `index.html` — main page
- `css/styles.css` — styles
- `images/` — project images

## Local setup

1. Open a terminal in the project folder:

```bash
cd "C:/Users/lav95/OneDrive/Desktop/GO-IT progect/goit-markup-hw-06"
```

2. Initialize git (if not already done) and create an initial commit:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

3. Create a GitHub repository and push:

- Using GitHub CLI (optional):

```bash
# install gh and authenticate first
gh repo create goit-markup-hw-06 --source=. --remote=origin --push
```

- Or create the repo on github.com and then add the remote and push:

```bash
git remote add origin https://github.com/<your-username>/goit-markup-hw-06.git
git push -u origin main
```

## Notes

- Replace `<your-username>` with your GitHub username in the remote URL above.
- If `git commit` fails due to missing user config, set those values:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---
Created by project helper.
