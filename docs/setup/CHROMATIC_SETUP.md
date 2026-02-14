# Chromatic Setup Guide

This guide will help you deploy your Storybook to Chromatic for public hosting.

## Prerequisites

- GitHub account (mgomez-ext)
- Repository pushed to GitHub: https://github.com/mgomez-ext/bioma
- Chromatic package installed (already done ✅)

## Step 1: Create Chromatic Account

1. Visit **https://www.chromatic.com/**
2. Click **"Sign up"** or **"Get started"**
3. Choose **"Sign in with GitHub"**
4. Authorize Chromatic to access your GitHub repositories

## Step 2: Add Your Project

1. After signing in, Chromatic will show your GitHub repositories
2. Select the repository: **mgomez-ext/bioma**
3. Chromatic will generate a **Project Token** (looks like: `chpt_abc123...`)
4. **Copy this token** - you'll need it in the next step

## Step 3: Configure Project Token

### Option A: Using Environment Variable (Recommended for local development)

1. Create a `.env` file in the project root:
   ```bash
   echo "CHROMATIC_PROJECT_TOKEN=your_token_here" > .env
   ```
   Replace `your_token_here` with your actual token.

2. The `.env` file is already in `.gitignore`, so it won't be committed to git.

### Option B: Using Command Line (For one-time deploys)

You can pass the token directly:
```bash
npx chromatic --project-token=your_token_here
```

### Option C: GitHub Actions (For CI/CD - Recommended for production)

Add the token as a GitHub secret:
1. Go to: https://github.com/mgomez-ext/bioma/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `CHROMATIC_PROJECT_TOKEN`
4. Value: Your token
5. Click **"Add secret"**

## Step 4: First Deploy

Run the Chromatic deploy:

```bash
npm run chromatic
```

Or with token directly:
```bash
npx chromatic --project-token=YOUR_TOKEN
```

## Step 5: View Your Published Storybook

After deployment completes, Chromatic will provide:
- ✅ **Public Storybook URL** (e.g., `https://main--abc123.chromatic.com`)
- 📸 Visual snapshots for regression testing
- 🔍 Component review tools

Copy the Storybook URL and update:
- README.md line 197
- Documentation files

## Subsequent Deploys

Every time you run `npm run chromatic`, it will:
1. Build your Storybook
2. Upload to Chromatic
3. Take visual snapshots
4. Show you what changed

## GitHub Actions (Optional but Recommended)

To auto-deploy on every push, create `.github/workflows/chromatic.yml`:

```yaml
name: Chromatic Deployment

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  chromatic-deployment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Publish to Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          exitZeroOnChanges: true
```

## Troubleshooting

### "Project token not found"
Make sure your `.env` file exists and contains the correct token, or pass it via command line.

### "Build failed"
Run `npm run build-storybook` locally first to ensure Storybook builds correctly.

### "No changes detected"
This is normal if you haven't changed any components since the last deploy.

## Useful Commands

```bash
# Deploy to Chromatic
npm run chromatic

# Deploy and ignore visual changes
npm run chromatic -- --auto-accept-changes

# Deploy a specific branch
npm run chromatic -- --branch-name=feature-branch

# Skip if no component changes detected
npm run chromatic -- --only-changed
```

## Next Steps

1. ✅ Get your Chromatic project token
2. ✅ Run first deploy
3. ✅ Update README with public Storybook URL
4. ⭐ Set up GitHub Actions for auto-deploy
5. 🎨 Configure visual regression testing

## Resources

- [Chromatic Documentation](https://www.chromatic.com/docs)
- [Storybook Best Practices](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Visual Testing Guide](https://www.chromatic.com/docs/test)
