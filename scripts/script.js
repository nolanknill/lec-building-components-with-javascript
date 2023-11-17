const rootEl = document.getElementById("root");
rootEl.innerHTML = HomePage();


function HomePage() {
    const aboutText = [
        "Mug java, cortado and cup aromatic, saucer blue mountain kopi-luwak doppio filter. Coffee dark wings mug aromatic cinnamon filter and aftertaste. Froth trifecta.",
        "Sweet macchiato robusta, plunger pot decaffeinated extraction medium shop. Brewed cream doppio ristretto latte arabica french press instant. Black sugar, robusta percolator arabica bar.",
        "Instant to go, java that french press dripper medium. Con panna crema galão barista americano cinnamon aromatic. Viennese galão to go mocha whipped crema americano.",
    ]

    return `
        ${ Hero("./assets/images/dog-banner.jpg", "Welcome to the Puppy Palace") }
        
        <main>
            ${ About(aboutText) }
        </main>
        
        ${ UserAccess() }
    `;
}

function Hero(image, title) {
    return `
        <header class="hero">
            <img class="hero__image" src="${image}">
            <h1 class="hero__page-title">${title}</h1>
        </header>
    `;
}

/**
 * 
 * @param {Array[String]} paragraphs
 * @returns 
 */
function About(paragraphs) {
    let paragraphElements = "";
    paragraphs.forEach((paragraph) => {
        paragraphElements += `<p class="about__copy">${paragraph}</p>`;
    });

    return `
        <section class="about">    
            ${paragraphElements}
        </section>
    `;
}


function UserAccess() {
    return `
        <div class="user-access">
            ${Button("Sign Up 😎", "/signup", true)}
            ${Button("Log in", "/login")}
        </div>
    `;
}

function Button(text, href, spotlight = false) {
    let classNames = "button";
    if (spotlight === true) {
        classNames += " button--spotlight"
    }

    return `
        <a class="${classNames}" href="${href}">
            ${text}
        </a>
    `;
}