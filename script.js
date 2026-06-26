```js
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }
    else{

        navbar.classList.remove("scrolled");

    }

});

const counters = document.querySelectorAll(".counter");

const startCounters = ()=>{

    counters.forEach(counter=>{

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const updateCounter = ()=>{

            if(count < target){

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }
            else{

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll",()=>{

    const heroStats =
        document.querySelector(".hero-stats");

    if(!heroStats) return;

    const top =
        heroStats.getBoundingClientRect().top;

    if(top < window.innerHeight && !counterStarted){

        startCounters();

        counterStarted = true;

    }

});

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.2
}

);

document.querySelectorAll(
`
.about,
.mission-card,
.value-card,
.portfolio-card,
.cert-card,
.private-card,
.feature-box,
.stat-card,
.iqf-step
`
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

const hero =
document.querySelector(".hero");

window.addEventListener(
"scroll",
()=>{

    if(hero){

        hero.style.backgroundPositionY =
        `${window.scrollY * 0.5}px`;

    }

}
);

document.querySelectorAll(
`
.portfolio-card,
.value-card,
.cert-card,
.private-card,
.product-card
`
).forEach(card=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${-(y - rect.height/2)/20}deg)
        rotateY(${(x - rect.width/2)/20}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.transform =
        "translateY(0px)";

    });

});

document.querySelectorAll(
".coverage-points span"
).forEach(region=>{

    region.addEventListener(
    "mouseenter",
    ()=>{

        region.style.transform =
        "scale(1.1)";

    });

    region.addEventListener(
    "mouseleave",
    ()=>{

        region.style.transform =
        "scale(1)";

    });

});

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    }
    );

});

window.addEventListener(
"load",
()=>{

    const loader =
    document.querySelector(
    ".loader"
    );

    if(loader){

        loader.classList.add(
        "loader-hidden"
        );

        setTimeout(()=>{

            loader.remove();

        },500);

    }

});
```
