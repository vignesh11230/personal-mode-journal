
const moodButtons = document.querySelectorAll("[data-mood]");
const activityInput = document.getElementById("activity-input");
const logActivityButton = document.getElementById("log-activity");
const journalList = document.getElementById("journal-list");

let currentMood = "";


moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentMood = button.dataset.mood;
    alert(`Mood updated to: ${currentMood.charAt(0).toUpperCase() + currentMood.slice(1)}`);
  });
});


logActivityButton.addEventListener("click", () => {
  const activity = activityInput.value.trim();
  
  if (!currentMood) {
    alert("Please select a mood first!");
    return;
  }
  
  if (activity) {
    const moodEmojis = {
      happy: "😊",
      calm: "😌",
      sad: "😢",
      excited: "🤩",
      stressed: "😟",
    };
    
    const moodIcon = moodEmojis[currentMood] || "❔";
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${moodIcon} ${currentMood.charAt(0).toUpperCase() + currentMood.slice(1)}</strong>: ${activity}
    `;
    
    journalList.appendChild(listItem);
    activityInput.value = "";
  } else {
    alert("Please enter an activity!");
  }
});
