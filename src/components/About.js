export default function About() {
    return (
        <div>
            <p className="text-black about">Klient <a href="http://api.nbp.pl/">REST API Narodowego Banku Polskiego</a> napisany jako ćwiczenie w ramach nauki React'a. Projekt napisany od zera, bez używania gotowych szablonów.</p>
            <br/>
            <div>
                <p className="about">Wykorzystane biblioteki:</p>
                <ul>
                    <li><a href="https://reactjs.org/">React</a></li>
                    <li><a href="https://reactrouter.com/">React Router</a></li>
                    <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a></li>
                    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
                    <li><a href="https://www.npmjs.com/package/react-router-bootstrap/">React Router Boostrap</a></li>
                    <li><a href="https://fontawesome.com/">Font Awsome</a></li>
                    <li><a href="https://animate.style/">Animate.css</a></li>
                </ul>
            </div>
        </div>
    );
}