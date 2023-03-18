import "./ModKutusu.css";

function ModKutusu(prop){

    return(
        <div className="mod-kutusu">
            <img src={prop.link} alt={prop.alt} />
            <h2>{prop.ad}</h2>
        </div>
    )
};

export default ModKutusu;
