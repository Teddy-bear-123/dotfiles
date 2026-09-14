fpath=("${ZSH}/bin" $fpath)

autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

autoload -U compinit
compinit

if [[ ! -f $HOME/.local/share/zinit/zinit.git/zinit.zsh ]]; then
    print -P "%F{33} %F{220}Installing %F{33}ZDHARMA-CONTINUUM%F{220} Initiative Plugin Manager (%F{33}zdharma-continuum/zinit%F{220})…%f"
    command mkdir -p "$HOME/.local/share/zinit" && command chmod g-rwX "$HOME/.local/share/zinit"
    command git clone https://github.com/zdharma-continuum/zinit "$HOME/.local/share/zinit/zinit.git" && \
        print -P "%F{33} %F{34}Installation successful.%f%b" || \
        print -P "%F{160} The clone has failed.%f%b"
fi

source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

zinit light-mode for \
    zdharma-continuum/zinit-annex-as-monitor \
    zdharma-continuum/zinit-annex-bin-gem-node \
    zdharma-continuum/zinit-annex-patch-dl \
    zdharma-continuum/zinit-annex-rust

zinit ice lucid wait'0'
zinit light joshskidmore/zsh-fzf-history-search

zinit ice depth=1
zinit light Aloxaf/fzf-tab

zinit load zsh-users/zsh-autosuggestions

zinit ice depth=1
zinit light jeffreytse/zsh-vi-mode

zinit light zsh-users/zsh-syntax-highlighting
