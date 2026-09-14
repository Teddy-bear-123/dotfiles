# eval "$(pyenv init -)"
eval "$(zoxide init --cmd j zsh)"

# source <(hugo completion zsh)

[ -f "${HOME}/.fzf.zsh" ] && source "${HOME}/.fzf.zsh"

# nohup xmodmap "${HOME}/.config/Xmodmap" >/dev/null 2>&1
