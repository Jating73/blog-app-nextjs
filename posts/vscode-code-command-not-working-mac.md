---
title: 🛠 Fixing "code ." Not Working in Mac Terminal for VS Code
excerpt: Quick and simple guide to fix the issue when "code ." command doesn't work in the terminal for Visual Studio Code on macOS.
image: vscode-code-command.jpg
isFeatured: true
date: "2025-09-06"
---

## 🚨 The Problem

Many macOS users face this issue: typing

```bash
code .
```

in the terminal doesn’t open Visual Studio Code. Instead, you may get an error like:

```bash
zsh: command not found: code
```

This happens because the ==code== command is not added to your system PATH.

## ✅ The Solution

Follow these steps to fix it:

1. **Open VS Code**  
   Launch Visual Studio Code on your Mac.

2. **Open the Command Palette**  
   Press ==Cmd + Shift + P== to open the command palette.  
   Search for:  
   Shell Command: Install 'code' command in PATH  
   Click on it to install the ==code== command globally.

3. **Restart Your Terminal**  
   Close and reopen your terminal (iTerm, Terminal, or Warp).  
   Now type:

   ```bash
   code .
   ```

   It should open the current folder in VS Code.

## 🔧 If It Still Doesn’t Work

If the above doesn’t solve it, you may need to add the VS Code binary to your PATH manually:

- Make sure you drag the Visual Studio Code application into the Applications folder
  Otherwise, you'll have to go through the above process again after a reboot.
