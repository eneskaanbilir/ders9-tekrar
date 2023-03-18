import "./Section.css";
import Kutu from "./Kutu.jsx";

function Section(){

    return(

        
        <section className="grid">

            <Kutu link="https://picsum.photos/id/0/150/150" alt="İlk resim" ad="Alejandro Escamilla" />

            <Kutu link="https://picsum.photos/id/1/150/150" alt="İkinci resim" ad="Paul Jarvis" />

            <Kutu link="https://picsum.photos/id/2/150/150" alt="Üçüncü resim" ad="Vadim Sherbakov" />

            <Kutu link="https://picsum.photos/id/3/150/150" alt="Dördüncü resim" ad="Yoni Kaplan-Nadel" />

            <Kutu link="https://picsum.photos/id/4/150/150" alt="Beşinci resim" ad="Jerry Adney" />

            <Kutu link="https://picsum.photos/id/5/150/150" alt="Altıncı resim" ad="Go Wild" />


        </section>
    )
};

export default Section;