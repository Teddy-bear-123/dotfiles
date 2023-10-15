export LANG="en_US.UTF-8"
export ZSH="${HOME}/.dotfiles"
export PATH=$PATH:/home/cv-rishi/.spicetify
export PATH="${PATH}:/usr/local/lib/python3.11/dist-packages"
export PATH="/home/cv-rishi/.local/bin:$PATH"
export PATH=$PATH:/usr/local/go/bin


#exec export DISPLAY=:1.0
export EDITOR=nvim
export VISUAL="$EDITOR"

if ! command -v "brew" &> /dev/null; then
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
fi

if [ -z "$HOMEBREW_PREFIX" ]; then
  HOMEBREW_PREFIX=$(brew --prefix)
fi

export GOROOT="${HOMEBREW_PREFIX}/opt/go/libexec"
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin:$ZSH/bin
export LSCOLORS="exfxcxdxbxegedabagacad"
export CLICOLOR=true
export DISPLAY=:0
export HOMEBREW_NO_ANALYTICS=1



fpath=($ZSH/bin $fpath)




HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000

setopt NO_BG_NICE # don't nice background tasks
setopt NO_HUP
setopt NO_LIST_BEEP
setopt LOCAL_OPTIONS # allow functions to have local options
setopt LOCAL_TRAPS # allow functions to have local traps
setopt HIST_VERIFY
setopt HIST_SAVE_NO_DUPS 
setopt HIST_REDUCE_BLANKS
setopt HIST_IGNORE_ALL_DUPS  # don' record dupes in history
setopt APPEND_HISTORY # adds history
setopt SHARE_HISTORY # share history between all terminals
setopt EXTENDED_HISTORY # add timestamps to history
setopt PROMPT_SUBST
setopt CORRECT
setopt COMPLETE_IN_WORD
setopt AUTOCD # navigate through folders without cd

stty stop undef		# Disable ctrl-s to freeze terminal.

# Source zsh files

source "${ZSH}/zsh/aliases.zsh"
source "${ZSH}/zsh/prompt.zsh"



# initialize autocomplete here, otherwise functions won't be loaded
autoload -U compinit
compinit


source "${HOMEBREW_PREFIX}/opt/zinit/zinit.zsh"


# Get some good history search shit in
zinit ice lucid wait'0'
zinit light joshskidmore/zsh-fzf-history-search
# A better and friendly vi(vim) mode plugin for ZSH.
zinit ice depth=1




# Replace zsh's default completion selection menu with fzf!
zinit light Aloxaf/fzf-tab

# Fish-like fast/unobtrusive autosuggestions for zsh.
zinit load zsh-users/zsh-autosuggestions

export DISPLAY=:1.0
# fzf global setup
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



[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh


