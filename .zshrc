# zmodload zsh/zprof
export ZSH="${HOME}/.zsh"

source "${ZSH}/zsh/opts.zsh"
source "${ZSH}/zsh/plugins.zsh"
source "${ZSH}/zsh/exports.zsh"
source "${ZSH}/zsh/path.zsh"
source "${ZSH}/zsh/evals.zsh"
source "${ZSH}/zsh/bindkeys.zsh"
source "${ZSH}/zsh/aliases.zsh"
source "${ZSH}/zsh/prompt.zsh"

if [ -d "${ZSH}/completions" ]; then
  for f in "${ZSH}"/completions/*.zsh(N); do
    source "$f"
  done
fi

# zprof

