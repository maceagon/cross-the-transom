const storySequence = [
  {
    text: "Braneworld is loading.",
    typeSpeed: 120, // Slower for dramatic opening
    pauseAfter: 4000, // 4 second pause after
    fadeOut: true,
  },
  {
    text: "In the beginning, there was nothing.",
    typeSpeed: 90, // Faster for informational text
    pauseAfter: 2000, // Shorter pause
  },
  {
    text: "And the Nevermore liked it that way.",
    typeSpeed: 90,
    pauseAfter: 700,
  },
  {
    text: "It was silent.",
    typeSpeed: 90,
    pauseAfter: 700,
  },
  {
    text: "It was pure.",
    typeSpeed: 90,
    pauseAfter: 700,
  },
  {
    text: "It was without misery or pain.",
    typeSpeed: 90,
    pauseAfter: 700,
  },
  {
    text: "It was without violence.",
    typeSpeed: 90,
    pauseAfter: 100,
    fadeOut: true,
  },
  {
    text: "But then something happened.",
    pauseAfter: 4000,
    displayTime: 2000,
    fadeIn: true,
    fadeOut: true,
  },
  {
    text: "As the ancients say: the cosmic strings were plucked, bowed, and strummed until music of color and heat erupted across the nothingness.",
    pauseAfter: 4000,
    fadeIn: true,
    fadeOut: true,
    displayTime: 4500,
  },
  {
    text: "<span style='letter-spacing: 5px;'>Swiftly, the engines of <em style='letter-spacing: 5px;'>something</em> filled the void, and out of its sonorous sustain – out of that 'original song' – Braneworld was born.</span>",
    pauseAfter: 9000,
    fadeIn: true,
    fadeOut: true,
    displayTime: 4500,
  },
  {
    text: "Braneworld earns its name from string theory.",
    pauseAfter: 3000,
    fadeIn: true,
    fadeOut: true,
    displayTime: 2000,
  },
  {
    text: "A 'brane' is a multidimensional object – like a giant sheet of paper floating in space – where we and everything we know exists.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 3000,
  },
  {
    text: "When a 'brane' meets its mirror image – an 'anti-brane' – a cosmic dance ensues.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 3000,
  },
  {
    text: "Annihilation can occur.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 2000,
  },
  {
    text: "Or, something entirely new may emerge, far greater than the sum of its parts.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 3000,
  },
  {
    text: "Legend says the 'original song' – the music plucked from those cosmic strings – will come to Braneworld again, revealed in the dream of some unsuspecting soul.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 4000,
  },
  {
    text: "Whoever hears the song and plays it, they say, will have the power to remake the world.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 3000,
  },
  {
    text: "And save it from destruction.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 5000,
    displayTime: 3000,
  },
  {
    text: "Will it be you?",
    typeSpeed: 90,
    pauseAfter: 5000,
    fadeOut: true,
  },
  {
    text: "In the end of times, all roads lead to the Meridian...",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 2000,
    displayTime: 3000,
  },
  {
    text: "...that liminal space between branes, where Braneworld touches our reality - where our shadows gain form and make us question who we are.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 4000,
  },
  {
    text: "By gathering here, our shared imagination births entities capable of bridging these realms.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 4000,
  },
  {
    text: "Collectively, we can summon guardians that move between planes - to help us learn the truth.",
    fadeIn: true,
    fadeOut: true,
    pauseAfter: 3000,
    displayTime: 4000,
  },
  {
    text: "The fate of the Braneworld hangs in all of our hands.",
    typeSpeed: 120,
    pauseAfter: 3000,
  },
  {
    text: "Become part of the story, before it’s too late.",
    typeSpeed: 120, // Very slow for final question
    pauseAfter: 1000, // Short pause before button
  },
];

let currentStory = 0;
let isTyping = false;

const storyText = document.getElementById("story-text");
const beginBtn = document.getElementById("begin-btn");
const generateBtn = document.getElementById("generate-btn");
const skipBtn = document.getElementById("skip-btn");
let isSkipped = false;

function typeWriter(text, speed = 50) {
  return new Promise((resolve) => {
    // Reset element for typewriter
    storyText.innerHTML = "";
    storyText.style.opacity = "1"; // Ensure it's visible for typing
    storyText.classList.add("typewriter");
    let i = 0;

    function type() {
      if (isSkipped) {
        storyText.classList.remove("typewriter");
        resolve();
        return;
      }

      if (i < text.length) {
        storyText.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      } else {
        // Remove typewriter class (and cursor) immediately
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
    storyText.classList.remove("typewriter", "fade-out", "fade-in"); // Clear all classes
    storyText.style.opacity = "1"; // Ensure it's visible
    resolve();
  });
}

function fadeInText(text) {
  return new Promise((resolve) => {
    // Completely reset the element
    storyText.className = ""; // Clear all classes
    storyText.style.opacity = "0";
    storyText.innerHTML = text;

    // Force a reflow to ensure all styles are cleared
    storyText.offsetHeight;

    // Add story-text class back and fade-in class
    storyText.className = "story-text fade-in";

    // Force another reflow
    storyText.offsetHeight;

    // Trigger fade-in
    setTimeout(() => {
      storyText.classList.add("show");
    }, 100);

    // Wait for fade-in to complete before resolving
    setTimeout(() => {
      resolve();
    }, 2200); // 2s transition + 200ms buffer
  });
}

async function playStorySequence() {
  console.log("Starting story sequence");
  beginBtn.classList.add("hidden");

  for (let i = 0; i < storySequence.length; i++) {
    if (isSkipped) break;

    currentStory = i;

    // Clear all classes at the start of each story to ensure clean state
    storyText.classList.remove("typewriter", "fade-out", "fade-in", "show");

    // Fade out background image during first story
    if (i === 0) {
      const bgImage = document.querySelector(".image-carousel");
      // Start fading halfway through first text
      setTimeout(() => {
        bgImage.classList.add("fade-out");
      }, 2000);
    }

    // Start visualizer at story 2
    // Start visualizer at story 2 (index 1)
    if (i === 1) {
      console.log("Trying to start visualizer");
      const visualizer = document.getElementById("visualizer");
      if (visualizer) {
        console.log("Visualizer found, showing it");
        visualizer.classList.remove("hidden");
        visualizer.classList.add("show");

        // Unmute and ensure it's playing with audio
        visualizer.muted = false;
        visualizer.play().catch((e) => console.log("Video play failed:", e));
      } else {
        console.log("Visualizer element not found!");
      }

      // Show skip button now that story has started
      skipBtn.classList.remove("hidden");
    }

    // Check if this story should appear instantly, fade in, or use typewriter
    if (storySequence[i].instant) {
      await instantText(storySequence[i].text);
    } else if (storySequence[i].fadeIn) {
      await fadeInText(storySequence[i].text);
    } else {
      await typeWriter(storySequence[i].text, storySequence[i].typeSpeed);
    }

    // Handle fade-out if needed
    if (storySequence[i].fadeOut) {
      // Only use displayTime if explicitly set, otherwise use original timing
      if (storySequence[i].displayTime !== undefined) {
        // New behavior: wait for displayTime before fading out
        await new Promise((resolve) =>
          setTimeout(resolve, storySequence[i].displayTime)
        );

        // Start fade-out
        storyText.classList.remove("fade-in", "show");
        storyText.classList.add("fade-out");

        // Wait for fade-out to complete
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Clean up
        storyText.classList.remove("fade-out", "fade-in", "show", "typewriter");
        storyText.innerHTML = "";
        storyText.style.opacity = "0";

        // Wait for remaining pause time
        const remainingPause =
          storySequence[i].pauseAfter - (storySequence[i].displayTime + 2000);
        if (remainingPause > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingPause));
        }
      } else {
        // Original behavior: 500ms wait then fade-out
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Clear any inline styles that might interfere, then fade out
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
      // Normal pause - DON'T clear text, just wait
      await new Promise((resolve) =>
        setTimeout(resolve, storySequence[i].pauseAfter)
      );
    }
  }

  if (!isSkipped) {
    skipBtn.classList.add("hidden");

    // Show end image and generate button simultaneously
    const endImage = document.getElementById("end-image");

    // Prepare button for fade-in
    generateBtn.classList.remove("hidden");
    generateBtn.classList.add("fade-in");

    if (endImage) {
      endImage.classList.remove("hidden");
      setTimeout(() => {
        endImage.classList.add("show");
        // Fade in generate button at the same time as background image
        generateBtn.classList.add("show");
      }, 500);
    } else {
      // Fallback if no end image
      setTimeout(() => {
        generateBtn.classList.add("show");
      }, 500);
    }

    // Show generate button after a delay (but keep the text visible)
    setTimeout(() => {
      generateBtn.classList.remove("hidden");
    }, 2000);
  }
}

beginBtn.addEventListener("click", () => {
  // Stop carousel when story starts
  stopCarousel();
  const carousel = document.getElementById("image-carousel");
  if (carousel) {
    carousel.classList.add("fade-out");
  }
  playStorySequence();
});

generateBtn.addEventListener("click", () => {
  window.location.href = "generator.html";
});

skipBtn.addEventListener("click", () => {
  isSkipped = true;
  skipBtn.classList.add("hidden");

  // Immediately stop any typing and clear all classes
  storyText.classList.remove("typewriter", "fade-in", "show", "fade-out");
  storyText.style.opacity = "1";

  // Start visualizer if not already playing
  const visualizer = document.getElementById("visualizer");
  if (visualizer) {
    visualizer.classList.remove("hidden");
    visualizer.classList.add("show");
    visualizer.muted = false;
    visualizer.play().catch((e) => console.log("Video play failed:", e));
  }

  // Fade carousel out if still visible
  const carousel = document.getElementById("image-carousel");
  if (carousel) {
    carousel.classList.add("fade-out");
  }

  // Wait a moment, then show everything
  setTimeout(() => {
    // Set up text (simple and direct)
    // Set up text with fade-in
    storyText.innerHTML =
      "<span class='final-text-fade'>Become part of the story, before it's too late.</span>";

    // Set up end image
    const endImage = document.getElementById("end-image");
    if (endImage) {
      endImage.classList.remove("hidden");
      endImage.classList.add("fade-in");
    }

    // Set up button
    generateBtn.classList.remove("hidden");
    generateBtn.classList.add("fade-in");

    // Trigger all three fade-ins simultaneously
    setTimeout(() => {
      const finalTextSpan = storyText.querySelector(".final-text-fade");
      if (finalTextSpan) {
        finalTextSpan.classList.add("show");
      }
      if (endImage) {
        endImage.classList.add("show");
      }
      generateBtn.classList.add("show");
    }, 100);
  }, 1000);
});

// Image carousel functionality
let currentImageIndex = 0;
const carouselImages = document.querySelectorAll(".carousel-image");
let carouselInterval;

function startCarousel() {
  carouselInterval = setInterval(() => {
    // Hide current image
    carouselImages[currentImageIndex].classList.remove("active");

    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

    // Show new image
    carouselImages[currentImageIndex].classList.add("active");
  }, 4000); // Change image every 4 seconds
}

function stopCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

// Start carousel when page loads
document.addEventListener("DOMContentLoaded", startCarousel);

// Update the fade-out trigger in playStorySequence
// Find the section where you fade out background and replace with:
if (i === 0) {
  const carousel = document.getElementById("image-carousel");
  if (carousel) {
    setTimeout(() => {
      carousel.classList.add("fade-out");
      stopCarousel();
    }, 2000);
  }
}
