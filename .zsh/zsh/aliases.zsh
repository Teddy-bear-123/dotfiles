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
alias please='sudo'
alias fucking='sudo'
alias say='echo'
alias reload='source ~/.zshrc'
alias update='sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y && sudo apt autoremove -y' 
alias extract='extract_func'

alias config='/usr/bin/git --git-dir=$HOME/Projects/Dotfiles-2 --work-tree=$HOME'

# Neovim
alias vimdiff='nvim -d'
alias v='fd --hidden --exclude=.git | fzf-tmux -p --reverse | xargs nvim'
alias tt="typst_template__"

# misc 
alias oldp="cd ~/OldProjects/"

alias tos="cd ~/OldProjects/TheOverSeer/"
alias me="cd ~/Projects/Literally\ Me/"
alias localp="cd ~/Projects/"

#ani-cli
alias a-c="ani-cli --rofi "

# Weird commans i hope to remember 

alias termqr="qrencode -t UTF8i -l H"

extract_func() {
  command extract "$@" | batcat --plain --language=help
}

typst_template__() {
  local project_name="${1:-}"
  
  local selected_pkg=$(fd --hidden --exclude=.git . "$HOME/.local/share/typst/packages/local" --max-depth 1 \
    | fzf-tmux -p --reverse)
  
  if [[ -z "$selected_pkg" ]]; then
    echo "No package selected"
    return 1
  fi
  
  local pkg=$(basename "$selected_pkg")
  local final_project_name="${project_name:-$pkg}"
  
  typst init "@local/$pkg" "$final_project_name"
}
