# 4-Week Timetable Website

Static GitHub Pages website for the ИВТ-13М four-week timetable.

## Deploy on GitHub Pages

1. Create a new GitHub repository, e.g. `timetable`.
2. Upload `index.html`, `style.css`, and `app.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will give you a public URL for the timetable.

No Node.js, build step, or server is required.

## Change the timetable

Edit the `weeks` array in `app.js`. Each lesson is:

`[time, subject, room, type]`

The site includes week tabs, search, responsive mobile layout, and dark mode.
