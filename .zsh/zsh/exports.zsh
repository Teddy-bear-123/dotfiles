export LANG="en_US.UTF-8"
export ZSH="${HOME}/.zsh"
export EDITOR=nvim
export VISUAL="$EDITOR"

export LSCOLORS="exfxcxdxbxegedabagacad"
export CLICOLOR=true
export DISPLAY=:0
export HOMEBREW_NO_ANALYTICS=1

export MANPAGER="nvim +Man!"



export PATH=${ZSH}/bin:$PATH
export PATH=$PATH:/home/cv-rishi/.spicetify
export PATH="${PATH}:/usr/local/lib/python3.11/dist-packages"
export PATH="/home/cv-rishi/.local/bin:$PATH"
export PATH=$PATH:/usr/local/go/bin
export PATH="$PATH:/home/cv-rishi/.local/julia-1.8.1/bin"
export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export PATH="/home/cv-rishi/.bun/bin:$PATH"

export DISPLAY=:1.0

export FZF_DEFAULT_COMMAND='rg --files --hidden --smart-case --follow --glob "!.git/*" --ignore-file ~/dotfiles/fzf-ignore'
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS"
 --border
 --reverse 
 --margin=1  
 --preview-window='up,80%,border-bottom' 
 --bind='ctrl-f:preview-down,ctrl-b:preview-up'
 --bind='ctrl-p:toggle-preview'
 --color=fg:#e0def4,hl:#6e6a86
 --color=fg+:#908caa,bg+:#232136,hl+:#908caa
 --color=info:#9ccfd8,prompt:#f6c177,pointer:#c4a7e7
 --color=marker:#ea9a97,spinner:#eb6f92,header:#ea9a97,border:#e0def4"

export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"

export JAVA_HOME=/usr/lib/jvm/java-1.17.0-openjdk-amd64

export MANPATH=/home/cv-rishi/.local/share/man:$MANPATH
