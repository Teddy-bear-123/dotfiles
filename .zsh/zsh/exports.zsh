export LANG="en_US.UTF-8"

export EDITOR="${HOME}/.local/share/bob/nvim-bin/nvim"
export VISUAL="$EDITOR"

export LSCOLORS="exfxcxdxbxegedabagacad"
export CLICOLOR=true
export DISPLAY=:0
export HOMEBREW_NO_ANALYTICS=1

export HISTFILE="${ZSH}/zsh_history"
export HISTSIZE=100000000  # =100,000,000
export SAVEHIST=100000000

export FZF_DEFAULT_COMMAND='rg --files --hidden --smart-case --follow --glob "!.git/*" --ignore-file '"${HOME}/dotfiles/fzf-ignore"
export FZF_DEFAULT_OPTS="${FZF_DEFAULT_OPTS}
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


