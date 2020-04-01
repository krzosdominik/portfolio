import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h1 className="about__header decoration">O mnie</h1>
                <div className="row about__container">
                    <div className="col-sm-12 col-lg-4">
                        <figure className="about__photo">
                            <img src="../img/krzos_dominik.jpg" alt="Krzos Dominik" />
                        </figure>
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <article className="about__text">
                            <p className="about__paragraph">
                                Jestem absolwentem Katolickiego Uniwersytetu Lubelskiego, kierunek informatyka.
                                Przez rok byłem związany z 2. Lubelską Brygadą Obrony Terytorialnej.
                                Tworzeniem stron internetowych zainteresowałem się jeszcze w podstawówce,
                                jednak na poważnie zająłem się tym dopiero na studiach.
                        </p>
                            <p className="about__paragraph">
                                Od kilku lat mam styczność z <strong>HTML5</strong>, <strong>CSS3</strong> oraz <strong>JavaScript</strong>.
                                W poprzednim roku do mojego stostu technologicznego dołączył m.in. preprocesor <strong>Sass</strong>, a także biblioteki <strong>React</strong> oraz <strong>jQuery</strong>.
                                W miarę możliwości staram się poszerzać moją wiedzę.
                                Jedną z ostatnio nauczonych się przeze mnie rzeczy jest <strong>TypeScript</strong>.
                        </p>
                            <p className="about__paragraph">
                                Poza programowaniem w JavaScript moją pasją jest gotowanie i wypeki.
                                Zawsze kiedy mam taką możliwość staram się testować nowe przepisy.
                                Dodatkowo gram amatorsko na pianinie i akordeonie oraz jestem fanem filmów Sci-Fi.
                        </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;