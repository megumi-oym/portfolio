/* ローディング */

var stroke;
stroke = new Vivus('mask', {
    start: 'manual',
    type: 'scenario-sync',
    duration: 10,
    forceRender: false,
    animTimingFunction: Vivus.EASE,
  },
  function () {
    $("#mask").attr("class", "done");
  });

$(window).on('load', function () {
  $("#splash").delay(3000).fadeOut('slow');
  $("#splash_logo").delay(3000).fadeOut('slow');
  stroke.play();
})

/* */

$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});

/* モーダル */

document.addEventListener("DOMContentLoaded", () => {
  const dlg = document.getElementById("viewer");
  const ttl = document.getElementById("v-title");
  const main = document.getElementById("v-main");
  const sub1 = document.getElementById("v-sub1")
  const sub2 = document.getElementById("v-sub2")
  const desc = document.getElementById("v-desc");
  const closeBtn = dlg.querySelector(".close");

  document.querySelectorAll(".thumb").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const timg = btn.querySelector("img");

      ttl.textContent = btn.dataset.title || "";
      main.src = btn.dataset.main || timg.src;
      main.alt = timg.alt || "";

      if (btn.dataset.sub1) {
        sub1.src = btn.dataset.sub1;
        sub1.alt = (timg.alt || "") + " - sub1";
        sub1.style.display = "";
      } else {
        sub1.style.display = "none";
      }

      if (btn.dataset.sub2) {
        sub2.src = btn.dataset.sub2;
        sub2.alt = (timg.alt || "") + " - sub2";
        sub2.style.display = "";
      } else {
        sub2.style.display = "none";
      }

      desc.innerHTML = btn.dataset.desc || "";

      dlg.showModal();
    });
  });

  closeBtn.addEventListener("click", () => dlg.close());
});

/* スクロールトリガー */

gsap.registerPlugin(ScrollTrigger);

function initSectionAnim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".logo",
      start: "top 80%",
      once: true
    }
  });

  tl.to(".logo",  {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out" 
  });

	tl.to(".hero", {
		y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out" 
	});
	
	tl.to(".btn_logo", {
		y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out" 
	});
  }

function initSectionAnim2() {
	const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#lg-1",
      start: "top 80%",
      once: true
    }
  });
	
	tl.to("#lg-1", {
		 x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power4.out"
	});
	
	tl.to("#sb-1", {
		 x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power4.out"
	});
	
	tl.to(".creates_wrapper", {
		y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out" 
	});
}

function initSectionAnim3() {
	const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#lg-2",
      start: "top 80%",
      once: true
    }
  });
	
	tl.to("#lg-2", {
		 x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power4.out"
	});
	
	tl.to("#sb-2", {
		 x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power4.out"
	});
	
	tl.to(".gallery_wrapper", {
		y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out" 
	});
}

function initSectionAnim4() {
	const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#lg-3",
      start: "top 80%",
      once: true
    }
  });
	
	tl.to("#lg-3", {
		 x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power4.out"
	});
	
	tl.to("#sb-3", {
		 x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power4.out"
	});
	
	tl.to(".about_wrapper", {
		y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out" 
	});
}



  $(window).on('load', function () {
    $('#splash').delay(100).fadeOut('slow', function () {
	  initSectionAnim();
    });
	  
	 $('#splash').delay(1600).fadeOut('slow', function () {
		initSectionAnim2();
		initSectionAnim3();
		initSectionAnim4();
    });
    $("#splash_logo").delay(100).fadeOut('slow');
    stroke.play();
  });

document.querySelector('.about_wrapper').style.gridTemplateColumns = '1fr'
