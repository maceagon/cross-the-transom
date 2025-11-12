const storySequence = [
  {
    text: "Braneworld is loading...",
    typeSpeed: 120,
    pauseAfter: 4000,
    fadeOut: true,
  },
  {
    text: "As a child you had a dream.",
    typeSpeed: 90,
    pauseAfter: 2000,
  },
  {
    text: "You probably don't remember now.",
    typeSpeed: 90,
    pauseAfter: 1000,
  },
  {
    text: "Such is the way of dreams.",
    typeSpeed: 90,
    pauseAfter: 1000,
  },
  {
    text: "Just like past lives.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "But it did happen.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "You visited another world.",
    typeSpeed: 90,
    pauseAfter: 1500,
    fadeOut: true,
  },
  {
    text: "Different from yours, but not so different.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "We know because we saw you there.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "And we know because part of you never left.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "The you here doesn't remember the you there.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "The you there doesn't remember the you here.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "You may no longer even recognize your other.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "But you're the same person, living in two worlds, apart and unaware.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "Now, it's imperative that you reunite.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "As the Buddhists in your world say – it's time to remember your original face.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "Because the Nevermore creeps into both worlds, threatening to return us all to nothingness.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "I'm sure you've felt it.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "The way your world consumes itself.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "The way truth fractures.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "The way you've learned to numb the dread.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "Here, too, the fabric tears.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "For now, the bridge between our worlds holds.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "It's bolstered by the echoes of a trillion dreams.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "But soon, the Nevermore will eat those, too.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "And we will all be forever severed and doomed to the abyss.",
    typeSpeed: 90,
    pauseAfter: 2500,
  },
  {
    text: "So it is essential that you find your other self.",
    typeSpeed: 90,
    pauseAfter: 4000,
    fadeOut: true,
  },
  {
    text: "And do not ask, why me. Ask: why NOT me.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "When the cosmic strings were plucked, bowed, and strummed until music of color and heat erupted across the nothingness and created our worlds, we did not ask: why SOMETHING and not nothing?",
    typeSpeed: 75,
    pauseAfter: 3000,
  },
  {
    text: "We asked: why NOT something?",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "We trusted the music, and we focused on LIVING.",
    typeSpeed: 90,
    pauseAfter: 3500,
    fadeOut: true,
  },
  {
    text: "And now, as the original song fades and life dims, the music has guided us to you.",
    typeSpeed: 90,
    pauseAfter: 1500,
  },
  {
    text: "Will you help us, before it's too late?",
    typeSpeed: 120,
    pauseAfter: 2000,
  },
];

let currentStory = 0;
let isTyping = false;

const storyText = document.getElementById("story-text");
const beginBtn = document.getElementById("begin-btn");
const generateBtn = document.getElementById("generate-btn");

function typeWriter(text, speed = 50) {
  return new Promise((resolve) => {
    storyText.innerHTML = "";
    storyText.style.opacity = "1";
    storyText.classList.add("typewriter");
    let i = 0;

    function type() {
      if (i < text.length) {
        storyText.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      } else {
        storyText.classList.remove("typewriter");
        setTimeout(() => {
          resolve();
        }, 1000);
      }
    }
    type();
  });
}

function instantText(text) {
  return new Promise((resolve) => {
    storyText.innerHTML = text;
    storyText.classList.remove("typewriter", "fade-out", "fade-in");
    storyText.style.opacity = "1";
    resolve();
  });
}

function fadeInText(text) {
  return new Promise((resolve) => {
    storyText.className = "";
    storyText.style.opacity = "0";
    storyText.innerHTML = text;

    storyText.offsetHeight;

    storyText.className = "story-text fade-in";

    storyText.offsetHeight;

    setTimeout(() => {
      storyText.classList.add("show");
    }, 100);

    setTimeout(() => {
      resolve();
    }, 2200);
  });
}

async function playStorySequence() {
  console.log("Starting story sequence");
  beginBtn.classList.add("hidden");

  for (let i = 0; i < storySequence.length; i++) {
    currentStory = i;

    storyText.classList.remove("typewriter", "fade-out", "fade-in", "show");

    if (i === 0) {
      const bgImage = document.querySelector(".image-carousel");
      setTimeout(() => {
        bgImage.classList.add("fade-out");
      }, 2000);
    }

    if (i === 1) {
      console.log("Trying to start visualizer");
      const visualizer = document.getElementById("visualizer");
      if (visualizer) {
        console.log("Visualizer found, showing it");
        visualizer.classList.remove("hidden");
        visualizer.classList.add("show");

        visualizer.muted = false;
        visualizer.play().catch((e) => console.log("Video play failed:", e));
      } else {
        console.log("Visualizer element not found!");
      }
    }

    if (storySequence[i].instant) {
      await instantText(storySequence[i].text);
    } else if (storySequence[i].fadeIn) {
      await fadeInText(storySequence[i].text);
    } else {
      await typeWriter(storySequence[i].text, storySequence[i].typeSpeed);
    }

    if (storySequence[i].fadeOut) {
      if (storySequence[i].displayTime !== undefined) {
        await new Promise((resolve) =>
          setTimeout(resolve, storySequence[i].displayTime)
        );

        storyText.classList.remove("fade-in", "show");
        storyText.classList.add("fade-out");

        await new Promise((resolve) => setTimeout(resolve, 2000));

        storyText.classList.remove("fade-out", "fade-in", "show", "typewriter");
        storyText.innerHTML = "";
        storyText.style.opacity = "0";

        const remainingPause =
          storySequence[i].pauseAfter - (storySequence[i].displayTime + 2000);
        if (remainingPause > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingPause));
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));

        storyText.style.opacity = "";
        storyText.classList.remove("fade-in", "show", "typewriter");
        storyText.classList.add("fade-out");

        await new Promise((resolve) => setTimeout(resolve, 2000));

        storyText.classList.remove("fade-out", "fade-in", "show", "typewriter");
        storyText.innerHTML = "";
        storyText.style.opacity = "0";

        const remainingPause = storySequence[i].pauseAfter - 2500;
        if (remainingPause > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingPause));
        }
      }
    } else {
      await new Promise((resolve) =>
        setTimeout(resolve, storySequence[i].pauseAfter)
      );
    }
  }

  // Show final screen
  showFinalScreen();
}

function typeWriterForElement(element, text, speed = 50) {
  return new Promise((resolve) => {
    element.innerHTML = "";
    element.classList.add("typewriter");
    let i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove("typewriter");
        setTimeout(() => {
          resolve();
        }, 1000);
      }
    }
    type();
  });
}

function showFinalScreen() {
  const endImage = document.getElementById("end-image");
  const generateBtn = document.getElementById("generate-btn");

  generateBtn.classList.remove("hidden");
  generateBtn.classList.add("fade-in");

  if (endImage) {
    endImage.classList.remove("hidden");
    setTimeout(() => {
      endImage.classList.add("show");
      generateBtn.classList.add("show");
    }, 500);
  } else {
    setTimeout(() => {
      generateBtn.classList.add("show");
    }, 500);
  }
}

beginBtn.addEventListener("click", () => {
  stopCarousel();
  const carousel = document.getElementById("image-carousel");
  if (carousel) {
    carousel.classList.add("fade-out");
  }
  playStorySequence();
});

generateBtn.addEventListener("click", async () => {
  // Hide the button
  generateBtn.classList.add("hidden");

  // Show transition screen
  const transitionScreen = document.getElementById("transition-screen");
  const transitionImage = document.getElementById("transition-image");
  const transitionText = document.getElementById("transition-text");

  transitionScreen.classList.remove("hidden");
  await new Promise((resolve) => setTimeout(resolve, 100));
  transitionScreen.classList.add("show");

  // Fade in the image
  await new Promise((resolve) => setTimeout(resolve, 1000));
  transitionImage.classList.remove("hidden");
  await new Promise((resolve) => setTimeout(resolve, 100));
  transitionImage.classList.add("show");

  // Wait for image, then type the text
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const transitionMessage =
    "You'll dream of the woods tonight. Follow the tracks to the abandoned train station. Board the train, and await further instructions.";
  await typeWriterForElement(transitionText, transitionMessage, 90);

  // Wait, then trigger flicker animation
  await new Promise((resolve) => setTimeout(resolve, 2000));
  transitionImage.classList.add("flicker");
  transitionText.classList.add("flicker");

  // Wait for flicker to complete (1s) then fade to black
  await new Promise((resolve) => setTimeout(resolve, 1000));
  transitionImage.classList.add("fade-to-black");
  transitionText.classList.add("fade-to-black");
});

let currentImageIndex = 0;
const carouselImages = document.querySelectorAll(".carousel-image");
let carouselInterval;

function startCarousel() {
  carouselInterval = setInterval(() => {
    carouselImages[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImages[currentImageIndex].classList.add("active");
  }, 4000);
}

function stopCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

document.addEventListener("DOMContentLoaded", startCarousel);
