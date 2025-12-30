# Gemini API Setup Guide

## Steps to Fix the 404 Error

### 1. Create/Update .env file
Create a `.env` file in the **root directory** of your project (same level as `package.json`):

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Important:**
- No quotes around the API key
- No spaces around the `=`
- The file must be named exactly `.env` (not `.env.txt` or anything else)

### 2. Get Your API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and paste it in your `.env` file

### 3. Enable Gemini API
Make sure the Gemini API is enabled in your Google Cloud Console:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Library"
3. Search for "Generative Language API"
4. Make sure it's **enabled** for your project

### 4. Restart Dev Server
**CRITICAL:** After creating/updating the `.env` file, you MUST restart your dev server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

Vite only loads environment variables when the server starts, so changes to `.env` won't take effect until you restart.

### 5. Verify API Key is Loaded
Open your browser's developer console (F12) and check for:
- ✅ "API key loaded: AIza..." (means it's working)
- ❌ "VITE_GEMINI_API_KEY is not set" (means .env file isn't being read)

### 6. Model Name
The code now uses `gemini-1.5-flash` which is the current model name. If you still get 404:
- Try `gemini-1.5-pro` (more capable but slower)
- Make sure your API key has access to Gemini models

### Common Issues:

**404 Error:**
- Model name might be wrong (now fixed to `gemini-1.5-flash`)
- API key might not have access to Gemini API
- Make sure Generative Language API is enabled in Google Cloud Console

**"API key not configured" error:**
- `.env` file is in the wrong location (must be in project root)
- Dev server wasn't restarted after creating `.env`
- Variable name is wrong (must be `VITE_GEMINI_API_KEY`)

**403/401 Errors:**
- API key is invalid or expired
- API key doesn't have proper permissions
- Billing might not be enabled (free tier should work, but billing account might be required)

### Testing
1. Create the `.env` file with your API key
2. Restart the dev server
3. Navigate to the chatbot page
4. Check browser console for any errors
5. Try sending a message

If you still get errors, check the browser console for the specific error message - it will help identify the issue.

