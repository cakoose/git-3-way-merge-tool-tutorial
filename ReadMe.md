# Git 3-Way Merge Tool Tutorial

This explains how to use the built-in 3-way merge tools in WebStorm and VSCode.

Why are they better than just using the Git conflict markers?
- They do a better job of highlighting exactly what changed on both branches.
- They can suggest correct resolutions for more types of conflicts.

## Tool-specific instructions

- [WebStorm](webstorm/ReadMe.md)
- [VSCode](vscode/ReadMe.md)

## Try resolving sample conflicts

On the command line, clone this repo and `cd` into it.

```sh
git clone git@github.com:cakoose/git-3-way-merge-tool-tutorial.git
cd git-3-way-merge-tool-tutorial
```

Each branch has a commit that isn't on the other branches:
- `main`: Change API URL from 'v1' to 'v2'
- `branch1`: Remove some low-value comments
- `branch2`: Use early 'return', reduce nesting

Test merging `main` into `branch1`:

```sh
git checkout branch1
git merge main
```

Test merging `main` into `branch2`:

```sh
git checkout branch2
git show
```

In each case, open it conflicting files up in your IDE to see what the Git conflict markers look like and what the 3-way merge tool looks like.
