# Paper.js Workshop at ECAL (Spring 2017)

Online materials for Paper.js Workshop at ECAL, Lausanne, April 24 - 28, 2017

## Prerequisites

* Basic familiarity with the
  [JavaScript](https://en.wikipedia.org/wiki/JavaScript) language.
* Fundamentals of computer programming.

## Software Requirements

### Code Editor

We will spend a lot of time in the code editor during this workshop, so
installing and configuring a good one if you haven't done so already is an
important first step. Here some options:

- [Atom](https://atom.io/): A free and powerful code editor by
  [GitHub](https://github.com/). It is entirely build with Web technology
  running in [Electron](https://electron.atom.io/), with a large ecosystem of
  plugins and extensions. Due to the internal use of HTML and JavaScript, it
  isn't the fastest editor, but still a great starting point.
- [Sublime Text 3](https://www.sublimetext.com/): Very fast, with a large
  ecosystem of plugins and extensions. A single license is $70, but the software
  can be used in trial / nag-mode for free.
- [TextMate 2](http://macromates.com/download): TextMate used to be the best
  code available on Mac OS, before Sublime Text came along, and then Atom came
  along. TextMate 2 is open-source, and still a very fine piece of software.

### Installing Homebrew, Node.js and NPM

We will use Node.js and the Node Package Manager (NPM) to install and manage all
dependencies in our project, and also to run some of the examples.

There are many tutorials explaining the different ways to install Node.js on
different platforms. It is generally not recommended to install Node.js through
OS-supplied package managers, as the its development cycles move fast and these
versions are often out-of-date.

On macOS, [Homebrew](http://brew.sh/) is a good option if one version of
Node.js that is kept up to date with `brew upgrade` is enough:
<http://treehouse.github.io/installation-guides/mac/node-mac.html>

[NVM](https://github.com/creationix/nvm) can be used instead to install and
maintain multiple versions of Node.js on the same platform, as often required by
different projects:
<https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/>

### Git and GitHub

The creation of a [GitHub](https://github.com/) account per student and the
continuous versioning of your work through [Git](https://git-scm.com/) is also
recommended, so you don't loose your work in progress and can always rewind to
previous versions.

Note that GitHub and Git are not the same things:

- Git is a so called version control system that was created by Linus Torvalds
  for the development of Linux and since been widely adopted by the Open Source
  community.

- GitHub is an online hosting service for Git projects, so called repositories,
  with added social media features aimed at community driven development and
  exchange, as well as a Wiki fo documentation and an issue database for the
  tracking of bugs. While public projects are free, the hosting of private
  projects comes with a time-based fee.

Read [Getting your project on
GitHub](https://guides.github.com/introduction/getting-your-project-on-github/)
for a tutorial on how to get your first project stored on GitHub.

Atom comes with decent Git integration in the separate
[Git-Plus](https://atom.io/packages/git-plus) package. For a more visual GUI
based approach, try the free [GitHub Desktop](https://desktop.github.com/)
application.

macOS comes with the `git` command line program installed, but it is recommended
to use Homebrew [Homebrew](http://brew.sh/) again to install a more recent
version:

```sh
brew install git
```

## Getting Started

Let's first make sure that you have all the command line requirements installed.

Open the Terminal.app, and type these commands, each followed by hitting the
enter key:

```sh
node --version
npm --version
git --version
```

On my system, this prints out:

```sh
v7.9.0
git version 2.12.2
4.2.0
```

This shows that I have recent versions of all these requirements present.

Now let's check out the repository of this workshop's materials, of which this
document is a part of. It is hosted on my own GitHub account as a public
repository, so you can create your own local clone of it and start playing
around.

But first, I would recommend to create a `Development` folder in your user
account where you will keep all your programming files. You may want to use
another structure on your own hard-drive, and that's of course fine, but for
simplicity, this document assumes that `~/Development` is that location on your
computer. Note that the `~` there is a system short-cut to your user folder, in
my case `/Users/lehni`, so my development folder is located at
`/Users/lehni/Development`:

```sh
# Let's see if the folder exists already:
ls ~/Development
```

If the folder exists, this will list its contents. If it doesn't exist, you will
see something similar to:

```sh
ls: /Users/lehni/Development: No such file or directory
```

In that case, you can now create it first:
```sh
mkdir ~/Development
```

Once it exists, you can change into it (`cd` = change directory), and then
finally create the clone of the repository:

```sh
cd ~/Development
git clone https://github.com/lehni/paper.js-workshop-ecal-2017-04
```

This will take a moment as the Git files are downloaded onto your hard-drive:

```
Cloning into 'paper.js-workshop-ecal-2017-04'...
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 5 (delta 0), reused 5 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), done.
```

Now you can change into the directory, and install the NPM dependencies:

```sh
cd paper.js-workshop-ecal-2017-04
npm install
```

This installs the Paper.js library, along with some other dependencies of the
workshop examples into the `node_modules` folder.
