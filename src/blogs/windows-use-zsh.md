---
title: Setup zsh in Windows
description: My setup when use zsh shell in Windows 
slug: setup-zsh-in-windows
publishedAt: 2023-11-12
tags: ["Programming"]
isComplete: false
---

> I used <https://dev.to/stephanlamoureux/the-complete-windows-developer-setup-guide-fie/> as my reference

## wsl

```shell
wsl --install
```

after install update wsl

```shell
wsl
```

```bash
sudo apt update && sudo apt upgrade
```

## zsh

install

```bash
sudo apt install zsh
```

### OhMyZsh

1. install require cURL

```bash
sudo apt install curl
```

2. Install OhMyZsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### zsh theme

for Oh My Zsh

1. clone the repo:

```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`

## text editor

### neovim

requires

```bash
sudo apt-get install ninja-build gettext cmake unzip curl
```

git clone <https://github.com/neovim/neovim.git>
cd neovim
git checkout <brach version>
make CMAKE_BUILD_TYPE=Release
sudo make install

### zsh-syntax-highlighting

git clone <https://github.com/zsh-users/zsh-syntax-highlighting.git> ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

zsh-syntax-highlighting

### zsh-autosuggestion

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

```shell
plugins=( 
  # other plugins...
  zsh-autosuggestions
)
```

## nvm

1. install

```zsh
PROFILE=/dev/null bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash'

```

2. add plugin into zsh

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
