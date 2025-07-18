# 🚀 URMS Modern Skin - Installation Guide

## Quick Installation Steps

### For Chrome/Edge Users

1. **Download Extension Files**
   - Ensure you have the `urms-skin` folder with all files:
     - `manifest.json`
     - `content.js`
     - `custom.css`
     - `README.md`

2. **Open Extensions Page**
   - Type `chrome://extensions/` in address bar (Chrome)
   - Type `edge://extensions/` in address bar (Edge)

3. **Enable Developer Mode**
   - Toggle "Developer mode" switch in top-right corner

4. **Load Extension**
   - Click "Load unpacked" button
   - Select the `urms-skin` folder
   - Extension will appear in your extensions list

5. **Verify Installation**
   - Extension should show as "URMS Skin Redesign"
   - Status should be "On"

### For Firefox Users

1. **Open Debug Page**
   - Type `about:debugging` in address bar
   - Click "This Firefox" on left sidebar

2. **Load Temporary Extension**
   - Click "Load Temporary Add-on"
   - Navigate to `urms-skin` folder
   - Select `manifest.json` file

3. **Verify Installation**
   - Extension appears in temporary extensions list

## Testing the Extension

### Step 1: Visit URMS
- Go to: https://urms-online.ulab.edu.bd/
- You should immediately see the modern skin applied

### Step 2: Check for Toggle Button
- Look for a floating 🎨 button in top-right corner
- This allows you to switch between modern and original design

### Step 3: Test Different Pages
- Login page: Modern centered form
- Dashboard: Enhanced navigation and layout
- Course Evaluation: Clean table design
- Schedule: Improved timetable layout

## What You Should See

### Before (Original URMS)
- Basic HTML table layout
- Plain white background
- Simple form elements
- Basic typography

### After (Modern Skin)
- Beautiful gradient backgrounds
- Centered, modern login form
- Enhanced navigation with hover effects
- Clean, readable tables
- Modern typography and spacing
- Responsive design for mobile devices

## Troubleshooting

### Extension Not Loading
- **Check file structure**: Ensure all files are in `urms-skin` folder
- **Verify manifest**: Make sure `manifest.json` is valid
- **Browser compatibility**: Use Chrome 88+, Firefox 89+, or Edge 88+

### Styles Not Applying
- **Clear cache**: Hard refresh the URMS page (Ctrl+F5)
- **Check permissions**: Ensure extension has access to URMS domain
- **Toggle extension**: Disable and re-enable the extension

### Toggle Button Missing
- **Check console**: Open browser dev tools and look for errors
- **Refresh page**: Sometimes requires a page refresh
- **Extension status**: Verify extension is active

## Security Notes

- ✅ Extension only works on URMS domain
- ✅ No data collection or transmission
- ✅ No external network requests
- ✅ Only modifies visual appearance
- ✅ Original functionality preserved

## Browser Permissions

The extension requests minimal permissions:
- `activeTab`: To modify the current URMS page
- `host_permissions`: Limited to urms-online.ulab.edu.bd

## Uninstalling

### Chrome/Edge
1. Go to `chrome://extensions/` or `edge://extensions/`
2. Find "URMS Skin Redesign"
3. Click "Remove"

### Firefox
1. Go to `about:addons`
2. Find the extension in Extensions tab
3. Click "Remove"

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify you're using a supported browser
3. Try disabling other extensions
4. Clear browser cache and cookies

---

**Ready to transform your URMS experience!** 🎨✨
