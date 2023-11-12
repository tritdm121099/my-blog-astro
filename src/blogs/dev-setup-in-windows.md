---
title: Dev Environment Setup on Windows 2023
description: My version of setting up a Windows for Web Development in 2023
slug: dev-environment-setup-windows
publishedAt: 2023-08-01
tags: ["Programming"]
---

## 1. Application manage
### 1.1 winget
- It default install or your can install in [microsoft store](https://apps.microsoft.com/detail/app-installer/9NBLGGH4NNS1?hl=en-US&gl=US)
### 1.2 scoop
- fast install app and plugins not need role admin ([link](https://scoop.sh/#/))
```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

## 1. Shell
### 1.1 Power shell

### 1.2 zsh

### zsh-autosuggestion
1. install
```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
2. 
```shell
plugins=( 
    # other plugins...
    zsh-autosuggestions
)
```

### tmux 
https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/tmux/README.md

### The Fuck
```shell
plugins=( 
    # other plugins...
    thefuck
)
```
### pyenv
```shell
curl https://pyenv.run | bash
```
```shell
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```
Uninstall
```shell
rm -fr ~/.pyenv
```


### zsh-syntax-highlighting 
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

zsh-syntax-highlighting 


### nvm
1. install
```bash
PROFILE=/dev/null bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash'

```
2. add plugin
```zsh
plugins=( 
    # other plugins...
    nvm
)
```

### install node
node install
```bash
nvm install @version
```
list node have install
```bash
nvm list
```
use other version
```bash
nvm use @version
```
set default node
```bash
nvm alias default @version
```

# neovim
sudo apt-get install ninja-build gettext cmake unzip curl
git clone https://github.com/neovim/neovim.git
cd neovim
git checkout <brach version>
make CMAKE_BUILD_TYPE=Release
sudo make install

git clone <repo vim config> ~/.config/nvim/init.vim
