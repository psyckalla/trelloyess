import React from 'react';
import Card from './Card';

function List(props) {
    const { header, cardIds, allCards } = props;
    console.log(header, cardIds, allCards);

    const individualCards = cardIds.map(card => {
        return <Card title={allCards[card].title} content={allCards[card].content} />
    })

    console.log(individualCards);

    return (
        <section className="List">
            <header className="List=header">
                <h2>{header}</h2>
            </header>
            <div className="List-cards">
                {individualCards}
            </div>
        </section>
    )
}

export default List;