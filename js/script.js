function animateFace1(face) {
  var tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

  gsap.set(face.querySelector(".mouth-open"), {
    opacity: 0,
    scaleY: 0.1,
    scaleX: 0.6,
    translateY: -18,
    transformOrigin: "center center",
  });

  tl.to(face.querySelector(".mouth-close"), {
    duration: 0.5,
    opacity: 0,
    scaleX: 1.2,
    scaleY: 2,
    translateY: 18,
    transformOrigin: "center center",
    ease: "power1.inOut",
  }).to(
    face.querySelector(".mouth-open"),
    {
      duration: 0.5,
      opacity: 1,
      scaleY: 1,
      scaleX: 1,
      translateY: 0,
      ease: "power1.inOut",
    },
    "-=0.5"
  );

  tl.to(
    [face.querySelector(".right-eye"), face.querySelector(".left-eye")],
    {
      duration: 0.5,
      scaleY: 1.8,
      scaleX: 0.8,
      transformOrigin: "center center",
      ease: "power1.inOut",
    },
    "-=0.5"
  );

  return tl;
}

function animateFace2(face) {
  var tl = gsap.timeline({
    paused: true,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  tl.to(face, { duration: 0.2, rotation: 10, transformOrigin: "50% 50%" }).to(
    face,
    { duration: 0.2, rotation: -10, transformOrigin: "50% 50%" }
  );

  tl.fromTo(
    face.querySelector(".tongue"),
    { rotation: -15, transformOrigin: "top center" },
    { duration: 0.3, rotation: 15, transformOrigin: "top center" }
  );

  return tl;
}

function setupFaceAnimations() {
  document.querySelectorAll(".face").forEach((face) => {
    const faceId = face.getAttribute("data-animation-type");
    var tl;

    if (faceId === "face1") {
      tl = animateFace1(face);
    } else if (faceId === "face2") {
      tl = animateFace2(face);
    }

    face.addEventListener("mouseenter", () => tl.play());
    face.addEventListener("mouseleave", () => tl.pause(0));
  });
}
setupFaceAnimations();
