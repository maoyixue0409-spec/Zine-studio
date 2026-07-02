# Deploy With GitHub Pages

## Step 1: Create A GitHub Repository

Create a new public repository on GitHub, for example:

```text
zine-studio
```

## Step 2: Upload Files

Upload the contents of this folder to the repository root.

The repository root should contain:

```text
index.html
src/
README.md
LICENSE
```

## Step 3: Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch.
6. Select `/root`.
7. Save.

## Step 4: Open The Website

GitHub will show a Pages URL after deployment. It usually looks like:

```text
https://your-username.github.io/zine-studio/
```

## Notes

Zine Studio is a static website, so no build command is required.
