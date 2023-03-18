import "./Kutu.css"

function Kutu(prop){
    return(
        <div className="kutu">
            <img src={prop.link} alt={prop.alt} />
            <h2>{prop.ad}</h2>
        </div>
    )
};

export default Kutu;
