# Email Service Example

Standalone email service UI (Settings page with Add Users by Email) extracted from the office add-in. Run this app separately from the Word add-in when you need to develop or test the email service only.

## How to start the application

1. **Install dependencies** (first time only):

   ```bash
   npm install
   ```

2. **Start the dev server**:

   ```bash
   npm run start
   ```

3. The app runs at **http://localhost:3002**. Your browser should open it automatically; if not, open that URL manually.

## If port 3002 is already in use

Another process may be using port 3002 (for example a previous dev server that didn’t exit). Free the port as follows.

**Windows (PowerShell or Command Prompt):**

```bash
# Find the process using port 3002 (note the PID in the last column)
netstat -ano | findstr :3002

# Stop that process (replace 12345 with the actual PID)
taskkill /PID 12345 /F
```

**macOS / Linux:**

```bash
# Find the process using port 3002
lsof -i :3002

# Stop that process (replace 12345 with the actual PID)
kill -9 12345
```

Then run `npm run start` again.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve `dist/index.html` with any static file server.

## Structure

- `src/index.tsx` – Entry point; mounts `SettingsPage`.
- `src/SettingsPage.tsx` – Full settings layout (sidebar, Users tab, user table, Add Users area).
- `src/AddUsersByEmail.tsx` – Email chips input + “Add Users” button.
- `src/api.ts` – Dummy API for suggested emails and submit; replace with real backend when ready.
- `src/components/` – Sidebar icons, `EmailInputField`, `EmailChip`, `EmailSuggestionDropdown`, `ChipsPopover`.

## Using from the other repo

Run the Word add-in from `office add-in-example` (e.g. `npm run dev-server` + `npm run start:desktop`) and run this app from **email-service-example** when you need the standalone email service UI on port 3002.
