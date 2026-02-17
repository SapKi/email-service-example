# Email Service Example

Standalone email service UI (Settings page with Add Users by Email) extracted from the office add-in. Run this app separately from the Word add-in when you need to develop or test the email service only.

## Features

- **Settings layout** – Sidebar navigation (Home, Invoices, Contracts, Compliance, Legal Agent, Legal Center, Settings), breadcrumbs, and a main Settings content area.
- **Users table** – Lists users with columns: User Name, Email, Status, Added On, Role (Admin / Member / Viewer). You can change role via dropdown and remove users with the delete button. When you delete a user from the table, that email becomes available again and will reappear in the suggestion list.
- **Add users by email** – Type or paste one or more emails (comma-, space-, or newline-separated). Each valid email appears as a chip; remove chips with the × button. Click **Add Users** to add them to the table.
- **Email suggestions** – A dropdown suggests emails from the API; already-added or existing-table emails are excluded. Click a suggestion to add it as a chip. The suggestion list is **reactive**: it updates when you add or remove users from the table (e.g. delete a user and their email shows up in suggestions again when you focus the input).
- **Overflow chips** – If many chips don’t fit in the input row, a “+N” control appears; hover to see the rest in a popover and remove from there.
- **Email validation** – Uses the [validator](https://www.npmjs.com/package/validator) npm package for proper email format validation.
- **Duplicate handling** – Emails already in the users table (or already in the current chip list) are not added again. A message is shown when duplicates are skipped (e.g. “This email is already in the list” or “2 emails are already in the list and were skipped.”).

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
- `src/SettingsPage.tsx` – Full settings layout (sidebar, user table, Add Users area).
- `src/AddUsersByEmail.tsx` – Email chips input, validation, duplicate handling, and “Add Users” button.
- `src/api.ts` – Dummy API for suggested emails and submit; replace with real backend when ready.
- `src/types.ts` – Shared types (e.g. `UserRow`, `EmailChipItem`, `AddUsersByEmailCallbacks`).
- `src/components/` – Sidebar icons, `EmailInputField`, `EmailChip`, `EmailSuggestionDropdown`, `ChipsPopover`.

## Using from the other repo

Run the Word add-in from `office add-in-example` (e.g. `npm run dev-server` + `npm run start:desktop`) and run this app from **email-service-example** when you need the standalone email service UI on port 3002.
