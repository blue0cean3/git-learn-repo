step using git:

step 1: git config --global user.name "user-name" && git config -- global user.email "user-email"

step 2: git init (initialize Git repo in the present directory)

step 3: git add "file-name" or git add . (to tracked file name or all file)

step 4: git commit -m "description"

step 5: git branch "branch name" (normal the first branch is master)

(origin i the name of the remote)
step 6: git remote add origin "git ssh name"

(master is the name of the branch)
step 7: git push -u origin master 

addition:

git pull "SSH name " pull a git to local

git diff (to see different of file which have been modified)

git restore --staged "file-name" (to continue fixing the file untrack the file)

git restore "file-name" (restore the delete files)

git mv "present-name" "new-name" (rename files)

git log (see commit history)

git log -oneline (Compact log in oneline)

git reset "log-code"

git log -p (view changes in commits)

git branch (show all branch)

git branch "branch-name" (create new branch)

git branch -d "branch-name"

git switch "branch-name" (switch branch)

git remote remove origin (remove origin remote)

git rm --cached "file-name"

git rm -r --cached "folder-name"

git status (to see status of present branch)

git clone "ssh name or github link" (to clone git repo)

git ls-tree -r "present-branch name" --name-only (show tracked files in the present branch

You can't merge with local modifications. Git protects you from losing potentially important changes.

You have three options:

Commit the change using
git commit -m "My message"
Stash it.
Stashing acts as a stack, where you can push changes, and you pop them in reverse order.

To stash, type

git stash
Do the merge, and then pull the stash:

git stash pop
Discard the local changes
using git reset --hard
or git checkout -t -f remote/branch

Or: Discard local changes for a specific file
using git checkout filename
