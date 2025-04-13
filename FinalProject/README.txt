# Daily Mood Tracker

This project is a simple but expressive daily mood tracker built with HTML, JavaScript (DOM & localStorage), 
and CSS. It allows users to log their daily mood and a note, then review their mood entries in a calendar-style display.

## How it works

- Users go to 'index.html' to submit a mood entry with:
  - A date
  - An emoji (from a dropdown)
  - An optional note
- All entries are saved in 'localStorage'
- In 'calendar.html', a calendar displays:
  - Emoji per day
  - Note as a tooltip on hover
  - Navigation between months
  - A "Clear All Data" button to reset history

---

## Favorite Line of Code

const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

I like this line because it combines string manipulation, date logic, and clean formatting into one statement. 
It also ensures all dates are stored in a consistent format, which helped prevent bugs when retrieving mood data across months. 
It’s a small trick that solved some major confusion when I was testing calendar rendering.