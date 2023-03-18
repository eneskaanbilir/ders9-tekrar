import "./Section.css";
import ModKutusu from "./ModKutusu.jsx";

function Section(){
    console.log("Merhaba ben Section!");

    return(
        <section id="mod-liste">

            <ModKutusu link="https://lipsum.app/id/15/150x150" alt="Orman Görseli" ad="Orman"/>

            <ModKutusu link="https://lipsum.app/id/25/150x150" alt="Kamp Görseli" ad="Kamp Ateşi"/>

            <ModKutusu link="https://lipsum.app/id/35/150x150" alt="Yağmur Görseli" ad="Yağmur"/>

            <ModKutusu link="https://lipsum.app/id/45/150x150" alt="Cırcır Böceği" ad="Cırcır Böceği"/>

            <ModKutusu link="https://lipsum.app/id/55/150x150" alt="Kuş görseli" ad="Kuş"/>

            <ModKutusu link="https://lipsum.app/id/65/150x150" alt="Kafe Görseli" ad="Kafe"/>

        </section>
    )
};

export default Section;