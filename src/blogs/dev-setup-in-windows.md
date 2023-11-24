---
title: Dev Environment Setup on Windows 2023
description: My version of setting up a Windows for Web Development in 2023
slug: dev-environment-setup-windows
publishedAt: 2023-08-01
tags: ["Programming"]
---

> In this setup I use [Windows PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.4) is a shell to setup

## Application manage

> I used `winget` and `scoop`

### winget

It default install or your can install in [microsoft store](https://apps.microsoft.com/detail/app-installer/9NBLGGH4NNS1?hl=en-US&gl=US)

### scoop

[Scoop](https://scoop.sh/) is a command-line installer for Windows. It can install app and plugins not need role admin.
Open a `PowerShell terminal`

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

## Git

### Install git

**winget**

```bash
winget install Git.Git
```

**or by scoop**

```bash
scoop bucket add main
scoop install main/git
```

### Fast SignIn Github

> Login Github in browser by command line [Learn more](https://cli.github.com/)

1.  Login Github in your browser
2.  Install Github CLI

**winget**

```bash
winget install GitHub.cli
```

**or scoop**

```bash
scoop bucket add main
scoop install main/gh
```

3. SignIn Github
   _Run command_

```bash
gh auth login
```

**My setup**
![Setup command github login](../../public/dev-setup-in-windows/git_cli_setup.png)
**After it press enter and enter code has generate**
![Enter code to login github in browser](../../public//dev-setup-in-windows//github_login_code.png)

### Git UI

[Fork](https://git-fork.com/)

## Text Editor

My choices are [VSCode](https://code.visualstudio.com/) and [Neovim](https://neovim.io/)

### VSCode

```bash
scoop bucket add extras
scoop install extras/vscode
```

### Neovim

```bash
scoop bucket add main
scoop install main/neovim
```

## Node

In working, multiple projects with Node with diffent node version. So to fast switch nodejs version you need use tool to manage it. If you manual install when need re-install to switch version is very uncomfortable. Even Nodejs itself recommends that we use a tool to manage version in [this link](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

### NVM

#### Install

**winget**

```bash
winget install CoreyButler.NVMforWindows
```

**scoop**

```bash
scoop bucket add main
scoop install main/nvm
```

#### Usage

- `nvm install <version>` install nodejs with version.
- `nvm list` show list node version have install.
- `nvm use <version>` switch node version. Need open PowerShell with **Run as administrator**

### FNM

#### Install

\*\*winget

```bash
winget install Schniz.fnm
```

##### scoop

```bash
scoop bucket add main
scoop install main/fnm
```

**After install run**

- In PowerShell run `code $PROFILE` or your not have VSCode run `notepad $PROFILE`
- Insert `fnm env --use-on-cd | Out-String | Invoke-Expression` into file and close
- Reset your shell

#### Usage

**Similar NVM**
