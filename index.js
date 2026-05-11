function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--bg-color', 'white');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--title-color', 'black');        
    } else if (theme === 'dark') {
        root.style.setProperty('--bg-color', 'black');
        root.style.setProperty('--text-color', 'blue');
        root.style.setProperty('--title-color', 'blue');
    }
}

// 1. Try to change the theme to 'dark'
// 2. Run the code to see that it works
setTheme('dark');
