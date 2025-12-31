# EmailJS Integration Setup Guide

## Overview
The Contact page now includes EmailJS integration for sending user-submitted messages directly to your email inbox without requiring a backend server.

## Requirements Checklist

✅ **Installation**
- `@emailjs/browser` has been installed via npm

✅ **Contact Form Features**
- Full Name field (required)
- Email Address field (required, with validation)
- Subject field (optional)
- Message textarea (required)
- Submit button with loading state
- Success/Error message display
- Form reset after successful submission

✅ **Security & Validation**
- Input sanitization (removes HTML tags, limits to 2000 chars)
- Email format validation
- Environment variables for credentials (never hardcoded)
- Multiple submission prevention (disable button while sending)
- `.env.local` in `.gitignore` for security

✅ **UX/UI Features**
- Dark theme with royal blue and gold accents
- Glassmorphism effect with gradient backgrounds
- Loading spinner during email submission
- Smooth hover and focus effects
- Accessible labels, placeholders, and ARIA attributes
- Responsive design (mobile and desktop)

---

## Setup Instructions

### Step 1: Create EmailJS Account
1. Visit [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Sign up for a free account (or log in if you have one)
3. Click **"Add New Service"**

### Step 2: Connect Email Service
1. Select your email provider (Gmail, Outlook, etc.)
   - For Gmail: you have two primary options:
     1. Use SMTP (recommended for simplicity): configure an SMTP service in EmailJS (requires SMTP credentials, avoids Gmail API scopes).
     2. Use the Gmail API (advanced): if you connect via the Gmail API, you must create a Google Cloud project, enable the Gmail API, and grant the correct OAuth scopes (for sending: `https://www.googleapis.com/auth/gmail.send`). Also configure the OAuth consent screen and ensure EmailJS has the proper authorization. If you see a 412 "Gmail_API: Request had insufficient authentication scopes" error, adjust your Google Cloud OAuth scopes and re-authorize the service.
   - Follow the provider-specific setup instructions
2. Copy your **Service ID** (format: `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. IMPORTANT: Do NOT rely on the user's email as the SMTP From address — many providers will rewrite or reject it. Instead, use a verified sender (the service's default From) and include the user's address as `reply_to` so replies go to the user.

4. Configure the template with these template variables (the contact form sends these exact names):
   ```
   {{from_name}}
   {{reply_to}}
   {{subject}}
   {{message}}
   ```

5. Example template structure (recommended):
   ```
   Hello,

   You have received a new message from {{from_name}}.

   Sender Email (Reply-To): {{reply_to}}

   Subject: {{subject}}

   Message:
   {{message}}

   ---
   Sent from: Infinity Crown Website
   ```

6. In the EmailJS template settings, set the **To Email** to your business inbox (for example: `infinitycrowngroup@gmail.com`). Do NOT set the template's From to the user's email — use the service's verified From and the `reply_to` variable for reply routing.

7. Save the template and copy your **Template ID** (format: `template_xxxxx`)

### Step 4: Get Public Key
1. Go to **"Account"** > **"API Keys"**
2. Copy your **Public Key** (format: `xxxxx_public_key`)

### Step 5: Configure Environment Variables
1. Open or create `.env.local` in the project root
2. Add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxx_public_key
   ```
3. Save the file (it's already in `.gitignore`, so it won't be committed)

### Step 6: Restart Development Server
1. Stop your dev server (Ctrl+C)
2. Run `npm run dev`
3. Vite will now load the environment variables from `.env.local`

---

## Testing the Form

1. Navigate to the Contact section of your website
2. Fill in all required fields:
   - Full Name: Test Name
   - Email Address: your-test@example.com
   - Subject: Test Message
   - Message: This is a test email from the contact form
3. Click **"Send Message"**
4. You should see a loading spinner
5. Upon success, you'll see: **"✓ Message sent successfully! We will reply soon."**
6. Form fields will automatically reset
7. Check your email inbox for the message

---

## Error Handling

The form provides user-friendly error messages for:
- **Missing required fields**: "Please fill in all required fields."
- **Invalid email format**: "Please enter a valid email address."
- **Missing configuration**: "Email service is not configured. Please contact the administrator."
- **Send failure**: "Failed to send message. Please try again later or contact us directly."

Check browser console (F12 → Console) for detailed error logs for debugging.

---

## Code Implementation Details

### Component: `src/components/Contact.jsx`

**Key Features:**
- **useRef**: References the form element for EmailJS
- **Sanitization**: Removes HTML tags and limits input length
- **Email Validation**: Regex pattern ensures valid email format
- **Loading State**: Disables form inputs during submission
- **Error/Success Handling**: Displays messages via aria-live region for accessibility
- **Form Reset**: Clears fields after successful submission

### Email Field Mapping
The form field names are mapped to template variables:
- `from_name` → `{{from_name}}`
- `from_email` → `{{from_email}}`
- `subject` → `{{subject}}`
- `message` → `{{message}}`

Ensure your EmailJS template uses these exact variable names.

---

## Security Best Practices

✓ **Do's:**
- Keep `.env.local` in `.gitignore`
- Validate email format on the client
- Sanitize all user inputs
- Use `import.meta.env` for environment variables
- Check environment variables before sending

✗ **Don'ts:**
- Never hardcode EmailJS credentials in code
- Never commit `.env.local` to version control
- Don't remove input validation
- Don't expose sensitive keys in error messages

---

## Troubleshooting

### Issue: "Email service is not configured"
**Solution:** Ensure `.env.local` has all three variables correctly filled with your EmailJS credentials. Restart the dev server.

### Issue: Emails not received
**Solution:**
1. Check your EmailJS Service and Template are connected
2. Verify template variables match form field names
3. Check email provider spam folder
4. Test with EmailJS dashboard's test feature

### Issue: CORS error in console
**Solution:** This is normal. EmailJS handles CORS on their servers. As long as the form shows a success message, the email was sent.

### Issue: Form not submitting
**Solution:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Check for any JavaScript errors
4. Verify all required fields are filled
5. Check that email format is valid

---

## File Structure

```
d:\InfinityCrown\website\
├── .env.local                          # Environment variables (DO NOT COMMIT)
├── .gitignore                          # Already includes *.local
├── src/
│   └── components/
│       └── Contact.jsx                 # Updated with EmailJS integration
├── package.json                        # @emailjs/browser added
└── [other files]
```

---

## Next Steps

1. ✅ Set up EmailJS account and credentials
2. ✅ Add credentials to `.env.local`
3. ✅ Restart dev server
4. ✅ Test the contact form
5. ✅ Deploy with `.env.local` properly configured on your hosting platform

---

## Hosting & Production Notes

- For Netlify: include the `public/_redirects` file (already added) so SPA routes fallback to `index.html`.
- For Vercel: `vercel.json` has a rewrite to serve the SPA index for all routes.
- Ensure you set the EmailJS environment variables in your hosting provider's dashboard (Netlify/Vercel) — do NOT commit `.env`.
- If deploying to GitHub Pages, set `base` in `vite.config.js` to the repo name and ensure SPA fallback via a 404 redirect rule or using `gh-pages` workaround.

Example Netlify environment variables:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx_public_key
VITE_EMAILJS_TO_NAME=Infinity Crown
VITE_EMAILJS_TO_EMAIL=recipient@example.com
```

---

## Support

For EmailJS-specific help:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS API Reference](https://www.emailjs.com/docs/sdk/send-form/)

For form implementation questions, refer to the comments in `src/components/Contact.jsx`.

---

**Last Updated:** December 29, 2025  
**Status:** Production Ready ✓
