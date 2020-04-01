import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h1 className="contact__header decoration">Kontakt</h1>
                <p className="contact__paragraph">
                    Jeśli masz dla mnie propozycję współpracy - <strong>zadzwoń</strong> lub napisz do mnie na <strong>LinkedIn</strong>.
                </p>
                <ul className="contact__list">
                    <li className="contact__item">
                        <i class="fas fa-mobile-alt contact__icon"></i>
                        +48 667 693 875
                    </li>
                    <li className="contact__item">
                        <a href="https://www.linkedin.com/in/krzosdominik/">
                            <i class="fab fa-linkedin contact__icon"></i>
                            LinkedIn
                        </a>
                    </li>
                    <li className="contact__item">
                        <a href="https://github.com/krzosdominik">
                            <i class="fab fa-github-square contact__icon"></i>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;