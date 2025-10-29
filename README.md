# TS Git Rebase Demo

A tiny TypeScript project to demonstrate **fixup commits** and **interactive rebase**.

## Quick start

```bash
pnpm i   # or npm i / yarn
pnpm dev # run directly with ts-node
```

## How to use fixup commits?

```bash
# find the SHA of the target commit
git log --oneline | grep "<COMMIT MESSAGE>"

# stage the fix
git add .

# create an automatic fixup
git commit --fixup=<SHA>

# rebase to squash the fixup commit
git rebase -i --autosquash origin/master
```

## Bonus

- Use Conventional Commits for clarity.
- Try `git commit --amend` to tweak the last commit
- Install [git absorb](https://github.com/tummychow/git-absorb) for automatic fixups
