 # My Dotfiles

<h2 align="center"> Riced up my 'Buntu</h2>

## Dependancies 
```
		> OS: Ubuntu
		> WM: i3
		> DE: Regolith
		> bar: polybar
		> launcher: Rofi
		> GTK 3: Ayu-Darker
		> GTK 4: Rose-pine (too lazy to create my own gtk4 theme for ayu dark, will do later)
		> Font: Nunito
		> Terminal: Alacritty
		> TextEdditor: Neovim
		> File Manager: Ranger (terminal), dolphin (gui)
		> Document viewer: Zathura
```

## Screenshots
(need to add images)

## Installation

1. Install Regolith

```shell
sudo apt install regolith-desktop regolith-session-flashback regolith-look-ayu
```
2. Install other applcations
```shell
sudo apt install polybar rofi dolphin
```
3. Install alacrity
```shell
sudo add-apt-repository ppa:aslatter/ppa -y && sudo apt install alacritty
```
Change your default terminal to alacrity if you wish with `sudo update-alternatives --config x-terminal-emulator` and selecting alacritty

4. Changing the default regolith bar
```shell
sudo rm -f /usr/share/regolith/i3/config.d/70_bar
```
Now add `exec --no-startup-id polybar` to your  `.config/regolith/i3/config.d` (check my config in `.config/regolith/i3/config.d/Startup` as an example)

5. Using rofi instead of ilia (regolith default application launcher/desktop exec)

change `/usr/share/regolith/i3/config.d/20_ilia` to incude rofi instead of ilia (check my config for an example)
