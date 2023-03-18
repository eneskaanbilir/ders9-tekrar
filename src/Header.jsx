import "./Header.css"

function Header(){
    const uygulamaAdi = "Mod App";

    console.log("Merhaba ben Header!");

return(

    <header className="flex-kutu">
        <h1>{uygulamaAdi}</h1>
        <p>İletişim bilgileri</p>
    </header>
)
};

export default Header;