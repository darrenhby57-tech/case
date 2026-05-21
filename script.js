const competitorTrack = document.querySelector("#competitorTrack");
const rankBadge = document.querySelector("#rankBadge");

const names = [
  "Pixel Mate",
  "Portrait Lab",
  "Snap Studio",
  "Magic Retouch",
  "Color Pop",
  "Frame AI",
  "Lens Boost",
  "PhotoDesk",
  "Pic Revive",
  "Creator Cam",
  "EditFlow",
  "ImageCraft",
  "Light Mixer",
  "Studio Max",
  "PhotoSpark",
  "Vision Crop",
  "Clarity Pro",
  "Retouchly",
  "Filter Nest",
  "Artify AI",
  "Pic Pilot",
  "ShotForge",
  "Smart Mask",
  "PhotoLift",
  "BrightSnap",
  "Neon Frame",
  "SharpLab",
  "Crop Hero",
  "SceneFix",
  "CoverGlow"
];

const ranks = [
  "#249",
  "#247",
  "#242",
  "#236",
  "#231",
  "#225",
  "#219",
  "#210",
  "#204",
  "#198",
  "#186",
  "#174",
  "#161",
  "#149",
  "#132",
  "#118",
  "#104",
  "#92",
  "#81",
  "#67",
  "#52",
  "#41",
  "#31",
  "#22",
  "#16",
  "#12",
  "#8",
  "#6",
  "#5",
  "#4"
];

const palette = [
  ["#39465a", "#202938"],
  ["#46505c", "#232a34"],
  ["#3d4754", "#1a222e"],
  ["#4b525f", "#252b35"]
];

function createCompetitor(index) {
  const card = document.createElement("article");
  card.className = "app-card competitor-card";
  const colors = palette[index % palette.length];
  card.innerHTML = `
    <div class="rank-badge">${ranks[index]}</div>
    <div class="app-icon" style="background: linear-gradient(135deg, ${colors[0]}, ${colors[1]})"></div>
    <div class="app-copy">
      <strong>${names[index]}</strong>
      <small>Photo tools and filters</small>
      <div class="meter"><b style="width: ${42 + (index % 5) * 9}%"></b></div>
    </div>
    <button type="button">GET</button>
  `;
  return card;
}

names.forEach((_, index) => {
  competitorTrack.appendChild(createCompetitor(index));
});

const rankFrames = [
  { at: 0, value: "#250+" },
  { at: 1550, value: "#250+" },
  { at: 2200, value: "#250+" },
  { at: 2700, value: "#180" },
  { at: 3150, value: "#75" },
  { at: 3600, value: "#24" },
  { at: 4100, value: "#8" },
  { at: 4750, value: "#Top 3" },
  { at: 6050, value: "#Top 3" }
];

const loopMs = 6400;
let start = performance.now();

function updateRank(now) {
  const t = (now - start) % loopMs;
  let current = rankFrames[0].value;

  for (const frame of rankFrames) {
    if (t >= frame.at) {
      current = frame.value;
    } else {
      break;
    }
  }

  if (rankBadge.textContent !== current) {
    rankBadge.textContent = current;
  }

  requestAnimationFrame(updateRank);
}

requestAnimationFrame(updateRank);
