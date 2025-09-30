export LANG="en_US.UTF-8"
export ZSH="${HOME}/.zsh"
export PATH=${ZSH}/bin:$PATH
export PATH=$PATH:/home/cv-rishi/.spicetify
export PATH="${PATH}:/usr/local/lib/python3.11/dist-packages"
export PATH="/home/cv-rishi/.local/bin:$PATH"
export PATH=$PATH:/usr/local/go/bin
export PATH="$PATH:/home/cv-rishi/.local/julia-1.8.1/bin"
export EDITOR="$HOME/.local/share/bob/nvim-bin/nvim"
export VISUAL="$EDITOR"

if ! command -v "brew" &> /dev/null; then
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
fi

if [ -z "$HOMEBREW_PREFIX" ]; then
  HOMEBREW_PREFIX=$(brew --prefix)
fi

export LSCOLORS="exfxcxdxbxegedabagacad"
export CLICOLOR=true
export DISPLAY=:0
export HOMEBREW_NO_ANALYTICS=1

bindkey -v

# Ctrl+hjkl for movement in insert mode
bindkey '^H' backward-char
bindkey '^J' down-line-or-history  
bindkey '^K' up-line-or-history
bindkey '^L' forward-char

fpath=($ZSH/bin $fpath)


autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

HISTFILE=~/.zsh/zsh_history
HISTSIZE=100000000 # =100,000,000
SAVEHIST=100000000

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
source "${ZSH}/zsh/spotify_autocomplete.sh" 
source "${ZSH}/zsh/aliases.zsh"
source "${ZSH}/zsh/prompt.zsh"
# source "${ZSH}/bin/help"
# source "${ZSH}/bin/extract"
source <(hugo completion zsh)



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
bindkey '^E' autosuggest-accept


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

eval "$(zoxide init --cmd j zsh)"


[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh


nohup xmodmap ~/.config/Xmodmap >/dev/null 2>&1

export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export PATH="$HOME/.local/share/bob/nvim-bin/:$PATH"
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64\${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:\
$HOME/.pyenv/versions/Biriyani-3.10.0/lib/python3.10/site-packages/nvidia/cublas/lib:\
$HOME/.pyenv/versions/Biriyani-3.10.0/lib/python3.10/site-packages/nvidia/cudnn/lib

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools


export ANDROID_NDK_HOME=/opt/android-ndk-r28c
export ANDROID_NDK_ROOT=$ANDROID_NDK_HOME
export PATH=$PATH:$ANDROID_NDK_HOME

export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
export PATH="$HOME/.dotnet:$PATH"

# Following line was automatically added by arttime installer
export MANPATH=/home/cv-rishi/.local/share/man:$MANPATH
export PATH="/home/cv-rishi/.bun/bin:$PATH"
