# URMS Modern Skin Extension

A browser extension that applies a modern, clean design overlay to the ULAB URMS (University Resource Management System) website. This extension transforms the outdated interface into a contemporary, user-friendly experience without affecting the underlying functionality.

## 🌟 Features

- **Modern Login Interface**: Clean, centered login form with modern styling
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark Mode Support**: Beautiful gradient backgrounds and modern color schemes
- **Enhanced Navigation**: Improved navigation bar with hover effects and better typography
- **Modern Tables**: Clean, readable tables with proper spacing and hover effects
- **Toggle Functionality**: Easy-to-use toggle button to switch between original and modern skin
- **Non-Invasive**: Doesn't interfere with website functionality, only enhances appearance
- **Accessibility**: Improved focus states and keyboard navigation

## 📦 Installation

### Method 1: Load Unpacked Extension (Recommended for Development)

1. **Download the Extension**
   - Clone or download this repository
   - Extract the files to a folder named `urms-skin`

2. **Open Browser Extensions Page**
   - **Chrome/Edge**: Go to `chrome://extensions/` or `edge://extensions/`
   - **Firefox**: Go to `about:debugging#/runtime/this-firefox`

3. **Enable Developer Mode**
   - Toggle "Developer mode" in the top right corner (Chrome/Edge)
   - Click "This Firefox" then "Load Temporary Add-on" (Firefox)

4. **Load the Extension**
   - Click "Load unpacked" and select the `urms-skin` folder
   - The extension should now appear in your extensions list

5. **Verify Installation**
   - Navigate to [https://urms-online.ulab.edu.bd/](https://urms-online.ulab.edu.bd/)
   - You should see the modern skin applied automatically
   - Look for the toggle button (🎨) in the top-right corner

### Method 2: Pack and Install (For Distribution)

1. Pack the extension using browser developer tools
2. Install the generated `.crx` or `.xpi` file
3. Follow browser-specific installation prompts

## 🎨 Usage

### Automatic Application
- The skin applies automatically when you visit any URMS page
- No manual activation required

### Toggle Feature
- Click the floating toggle button (🎨) in the top-right corner
- Button shows 🎨 when skin is enabled
- Button shows 📄 when showing original design
- Toggle persists during your browsing session

### Supported Pages
- **Login Page**: Enhanced form design with modern inputs
- **Dashboard**: Improved layout and navigation
- **Course Evaluation**: Clean table design and better readability
- **Schedule**: Modern timetable with improved typography
- **All Other Pages**: Generic improvements applied automatically

## 🛠️ Technical Details

### File Structure
```
urms-skin/
├── manifest.json       # Extension configuration
├── content.js          # JavaScript for DOM manipulation
├── custom.css          # Modern styling rules
└── README.md          # This documentation
```

### Key Technologies
- **Manifest V3**: Latest extension standard
- **Content Scripts**: For DOM manipulation and enhancement
- **CSS Injection**: For styling overrides
- **MutationObserver**: For handling dynamic content

### Browser Compatibility
- ✅ Chrome 88+
- ✅ Microsoft Edge 88+
- ✅ Firefox 89+
- ✅ Opera 74+

## 🎯 Design Philosophy

### Visual Improvements
- **Modern Color Palette**: Blue gradients (#007BFF to #0056b3)
- **Clean Typography**: System fonts for better readability
- **Proper Spacing**: Generous padding and margins
- **Subtle Shadows**: Depth without overwhelming the interface
- **Smooth Animations**: Gentle transitions for better UX

### User Experience
- **Non-Destructive**: Original functionality remains intact
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Improved focus states and keyboard navigation
- **Fast**: Lightweight with minimal performance impact

## 🔧 Customization

### Modifying Colors
Edit `custom.css` and change the CSS custom properties:
```css
/* Primary colors */
background: linear-gradient(135deg, #007BFF, #0056b3)

/* You can replace with your preferred colors */
background: linear-gradient(135deg, #your-color-1, #your-color-2)
```

### Adding New Page Support
1. Edit `content.js`
2. Add detection logic in `detectPageType()`
3. Create enhancement function
4. Add corresponding CSS rules

### Adjusting Responsive Breakpoints
Modify the media queries in `custom.css`:
```css
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

## 🐛 Troubleshooting

### Extension Not Working
1. **Check Extension Status**: Ensure it's enabled in browser extensions
2. **Verify Permissions**: Confirm host permissions are granted
3. **Clear Cache**: Refresh the URMS page (Ctrl+F5)
4. **Check Console**: Look for errors in browser developer tools

### Styling Issues
1. **Toggle Off/On**: Use the toggle button to refresh styles
2. **Browser Compatibility**: Ensure you're using a supported browser
3. **Conflicting Extensions**: Disable other extensions that might interfere

### Performance Issues
1. **Disable Other Extensions**: Test with only URMS skin enabled
2. **Clear Browser Data**: Clear cache and cookies
3. **Update Browser**: Ensure you're using the latest version

## 📝 Development

### Local Development
1. Make changes to the files
2. Go to browser extensions page
3. Click "Reload" on the URMS Skin extension
4. Refresh the URMS website to see changes

### Adding Features
1. **New Styling**: Add CSS rules to `custom.css`
2. **New Functionality**: Add JavaScript to `content.js`
3. **New Permissions**: Update `manifest.json` if needed

### Testing
- Test on all supported URMS pages
- Verify responsive design on different screen sizes
- Check toggle functionality
- Ensure no JavaScript errors in console

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is provided as-is for educational and personal use. Please respect the original URMS system and use responsibly.

## ⚠️ Disclaimer

This extension is an unofficial modification and is not affiliated with ULAB or the official URMS system. Use at your own discretion and ensure compliance with your institution's policies.

## 🆘 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Ensure you're using a compatible browser version
4. Try disabling and re-enabling the extension

---

**Version**: 1.0  
**Last Updated**: 2024  
**Compatibility**: Chrome 88+, Firefox 89+, Edge 88+, Opera 74+
