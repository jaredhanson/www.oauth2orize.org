## Contributing

This site is deployed to GitHub Pages.

The deployment procedure was initialized using the following commands:

```sh
$ git checkout --orphan gh-pages
$ git reset --hard
$ git commit --allow-empty -m "Initializing gh-pages branch"
$ git push origin gh-pages
```

The first command, `git checkout --orphan gh-pages`, creates a new branch a new
history. The working directory still contains the source files used to build the
site, however. The second command, `git reset --hard`, resets the working tree,
removing the source files from the directory.  At this point, an empty commit is
recorded to initialize the branch, and the branch is pushed to GitHub.

After the remote repository is updated, switch to the main development branch.

```sh
git checkout master
```

#### Prepare

With the repository cloned, set up a new worktree in the `www` directory,
tracking the `gh-pages branch`.

```sh
$ git worktree add -B gh-pages www origin/gh-pages
```

Adding a worktree allows multiple working tree to be attached to the same
repository.  In this case, the `www` directory will contain static files
generated when building the site.  The files will be commited to the `gh-pages`
branch, which is independent of and disconnected from development branches.


#### Develop

```
$ make site
```

Inspect the generated files

```
$ cd www
$ git status
$ git diff
```

Once satisfied, add and push to deploy

```
$ git add --all
$ git commit -m "Publishing to gh-pages"
$ git push origin gh-pages
```

