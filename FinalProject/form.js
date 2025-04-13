function saveMood() {
  const date = document.getElementById("date").value;
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value;

  if (!date || !mood) {
    alert("Please select both date and mood.");
    return;
  }

  let moods = JSON.parse(localStorage.getItem("moods")) || {};
  moods[date] = { mood, note };
  localStorage.setItem("moods", JSON.stringify(moods));
  alert("Mood saved!");
}
