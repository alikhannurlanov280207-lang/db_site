// tsParticles инициализация
tsParticles.load("tsparticles", {
  background: {
    color: "#0f0f0f",
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: ["circle", "text"],
      character: [
        {
          value: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
          font: "Verdana",
          style: "",
          weight: "bold",
        },
      ],
    },
    opacity: {
      value: 0.7,
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
    links: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.3,
      width: 1,
    },
  },
  detectRetina: true,
});

const statuses = ["not-started", "in-progress", "completed"];

function getNextStatus(current) {
  const index = statuses.indexOf(current);
  return statuses[(index + 1) % statuses.length];
}

function loadProgress() {
  document.querySelectorAll(".topic-card").forEach(card => {
    const topic = card.dataset.topic;
    const savedStatus = localStorage.getItem(`progress-${topic}`) || "not-started";
    card.classList.add(savedStatus);
  });
}

function setupClickHandlers() {
  document.querySelectorAll(".topic-card").forEach(card => {
    card.addEventListener("click", () => {
      const topic = card.dataset.topic;
      const currentStatus = statuses.find(s => card.classList.contains(s)) || "not-started";

      card.classList.remove(...statuses);

      const nextStatus = getNextStatus(currentStatus);
      card.classList.add(nextStatus);

      localStorage.setItem(`progress-${topic}`, nextStatus);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  setupClickHandlers();
});

const topicVideos = {
  'sql-basics': 'https://www.youtube.com/embed/HXV3zeQKqGY',
  'joins': 'https://www.youtube.com/embed/9yeOJ0ZMUYw',
  'indexes': 'https://www.youtube.com/embed/gx5c9UqbKcY',
  'normalization': 'https://www.youtube.com/embed/qzF3gG3B3vA',
  'procedures': 'https://www.youtube.com/embed/OJzwdl3cYr8',
  'transactions': 'https://www.youtube.com/embed/kHyNqSn1PVs',
  'nosql': 'https://www.youtube.com/embed/wbFhVxZlLHw',
  'mongodb': 'https://www.youtube.com/embed/-56x56UppqQ',
  'redis': 'https://www.youtube.com/embed/8VqLVV3FAU8'
};

const modal = document.getElementById('videoModal');
const iframe = document.getElementById('youtubePlayer');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.topic-card').forEach(card => {
  card.addEventListener('click', () => {
    const topic = card.dataset.topic;
    if (topicVideos[topic]) {
      iframe.src = topicVideos[topic];
      modal.style.display = 'block';
    }
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  iframe.src = ''; // остановить видео
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    iframe.src = '';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const teacherImg = document.querySelector('.teacher-photo img');

  teacherImg.addEventListener('mouseenter', () => {
    teacherImg.classList.add('float');
  });

  teacherImg.addEventListener('mouseleave', () => {
    teacherImg.classList.remove('float');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
      status.textContent = "Барлық өрістерді толтырыңыз!";
      status.className = "form-status error";
      status.style.display = "block";
    } else {
      status.textContent = "✔ Жіберілді!";
      status.className = "form-status success";
      status.style.display = "block";
      document.getElementById("contactForm").reset();
    }
  });
});

