---
title: Getting Started With Git
excerpt: Some of the basic Git commands which you might know as a developer!
image: git.png
isFeatured: true
date: "2025-04-01"
---

### What is Git?

Git is the open source distributed version control system that facilitates GitHub activities on your laptop or
desktop.

### Setup for Git on Multiple Machines-

- Windows -> https://windows.github.com
- Mac -> https://mac.github.com

### Common Git Configuration commands after download

1. Setup Your Name for Git while you commit any code.

```sh
   $ git config --global user.name "[name]"
```

2. Setup Your Email for Git while you commit any code.

```sh
 $ git config --global user.email "[email address]"
```

### Common Repository commands

1. Download or Clone any repo to your system.

```sh
$ git clone [url]
```

2. Initialize local folder into git repo for first time.

```sh
$ git init
```

### Common commands to make or review changes

1. Add a specific file to staging after some changes.

```sh
 $ git add [file]
```

2. Add all the files to staging after some changes.

```sh
 $ git add .
```

3. Lists all new or modified files to be committed.

```sh
$ git status
```

4. Shows file differences not yet staged.

```sh
 $ git diff
```

5. Shows file differences between staging and the last file version.

```sh
$ git diff --staged
```

6. Unstages the file, but preserve its contents

```sh
$ git reset [file]
```

7. Records file snapshots permanently in version history or You want to add a specific message to remember what you did.

```sh
$ git commit -m "[descriptive message]"
```

### Common branch related commands

1. List all the branches locally in your current repository.

```sh
 $ git branch
```

2. Create a new branch from current branch.

```sh
 $ git checkout -b [branch-name]
```

3. Switch to some specific branch from current branch.

```sh
 $ git checkout [branch-name]
```

4. Merge a specific branch to current branch.

```sh
 $ git merge [branch-name]
```

5. Delete a specific branch.

```sh
 $ git branch -d [branch-name]
```

### Common commands for saving fragments or restoring some changes which are yet to staged.

1. Temporarily stores all modified tracked files.

```sh
$ git stash
```

2. Restores the most recently stashed files.

```sh
$ git stash pop
```

3. Lists all stashed changesets

```sh
$ git stash list
```

4. Discards the most recently stashed changeset

```sh
$ git stash drop
```

5. Restore a specific stashed file changes.

```sh
$ git stash pop [index_number]
```

### Commands to review history

1. Lists version history for the current branch.

```sh
$ git log
```

2. List oneline version history for the current branch.

```sh
$ git log --oneline
```

3. Outputs metadata and content changes of the specified commit.

```sh
 $ git show [commit]
```
