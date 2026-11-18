# Daily Happiness Score

A simple prank page that asks if you're happy with the day, captures basic browser info on click, then redirects to the classic Rick Roll.

## How it works

1. User lands on the page.
2. Clicks the big red button.
3. Browser sends `userAgent`, screen resolution, referrer, and timestamp to `/api/capture`.
4. Immediately redirects to https://www.youtube.com/watch?v=dQw4w9WgXcQ

The API currently just logs the data to Vercel function logs. You can later plug in a database or storage if you want to keep the records.

## Deploy

Already set up for Vercel. Connect the repo and deploy.