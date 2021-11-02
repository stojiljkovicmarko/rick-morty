import Card from "./Card";

function CardLayout({ characters }) {

    return (
        <div className="container">
            <div className="row m-3">
                {characters.map(character => {
                    return (
                        <Card character={character} key={character.id} />
                    );
                })}
            </div>
        </div>
    );
}

export default CardLayout;