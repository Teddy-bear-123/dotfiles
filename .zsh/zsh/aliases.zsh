# System alaises

alias c="clear"
alias ls="exa --icons --sort=modified --all"
alias lss="exa --icons --sort=modified"
alias l="exa --icons --sort=modified --oneline --all"
alias ll="exa --icons -ah --long --sort=modified  --git"
alias tree="exa --icons --tree --all  --sort=modified --ignore-glob '.git|node_modules|.pytest_cache|__pycache__' --level=1"
alias f="find-text"
alias ff="find-file"
alias top="bashtop"
alias r="ranger"
alias lg="lazygit"
alias neofetch="neofetch --jp2a ~/.config/neofetch/One-Piece-Strawhat.png"
alias cat="batcat"
alias brew='env PATH="${PATH//$(pyenv root)\/shims:/}" brew'
#git

alias config='/usr/bin/git --git-dir=$HOME/Projects/Dotfiles-2 --work-tree=$HOME'

# Neovim
alias vimdiff='nvim -d'
alias v='fd --hidden --exclude=.git | fzf-tmux -p --reverse | xargs nvim'


# misc 
alias oldp="cd ~/OldProjects/"
alias tos="cd ~/OldProjects/TheOverSeer/"
alias localp="cd ~/Projects/"

#ani-cli
alias a-c="ani-cli --rofi "
