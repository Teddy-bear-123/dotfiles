require "mason".setup()
require "mini.pick".setup()
require "mini.bufremove".setup()
require "oil".setup()

vim.lsp.enable({ "lua_ls", "clangd", "ruff", "pyright", "prettypst", "tinymist", "rust_analyzer", "biome", "tsserver", "latexindent", "tectonic", "omnisharp", "jdtls", "postgrestools", "pgformatter", "sqlls", "htmx", "cssls" })


require('nvim-treesitter.configs').setup({
	highlight = { enable = true, },
	ensure_installed = { "lua", "vim", "vimdoc", "python", "javascript", "typescript", "rust", "c", "cpp" },
	auto_install = true,
	sync_install = true,
	modules = {},
	ignore_install = {},
	install_dir = "",
})


vim.cmd.colorscheme("ayu-dark")

local function set_custom_highlights()
	local brighter_guide = "#4B5263" -- changed `LineNr` to be brigher
	vim.api.nvim_set_hl(0, "LineNr", { fg = brighter_guide })
end

set_custom_highlights()

vim.cmd("highlight EndOfBuffer guibg=bg guifg=bg")
