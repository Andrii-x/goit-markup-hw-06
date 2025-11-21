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

2. Ensure the repo is initialized and committed (skip if already done):

```bash
git init            # only if .git is missing
git add .
git commit -m "Initial commit"
git branch -M main
```

3. Add GitHub remote and push (replace `<your-username>` or provide full repo URL):

- If you already created the GitHub repository on github.com:

```bash
git remote add origin https://github.com/<your-username>/goit-markup-hw-06.git
git push -u origin main
```

- If you prefer to create the repo from this folder and you have the GitHub CLI installed:

```bash
gh auth login
gh repo create goit-markup-hw-06 --source=. --remote=origin --push
```

## If you don't have `gh` installed

- On Windows you can use `winget`:

```bash
winget install --id GitHub.cli
```

Or install via Chocolatey or Scoop if you prefer.

## Troubleshooting

- If `git push` fails with permission or auth errors, either:
  - Use HTTPS and provide a Personal Access Token (PAT) when prompted, or
  - Configure SSH keys and add the public key to your GitHub account.

- If `git commit` fails because user info is missing, set it locally or globally:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## How I can help next

- Provide your GitHub username or the repository URL and I will add the `origin` remote and push the `main` branch for you from this environment.
- Or tell me to create the GitHub repo for you (requires `gh` installed and authenticated`).

---
Edited to improve instructions and prepare for connecting to GitHub.
