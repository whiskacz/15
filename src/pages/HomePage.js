import React from "react";
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint quidem dolores nisi molestiae repudiandae id dolore tenetur iure corporis. Velit quo iure atque ea dolorum debitis minus in mollitia."
    },
    {
        id: 2,
        title: "Czym jest teoria strun?",
        author: "Anna Kwiatkowska",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint quidem dolores nisi molestiae repudiandae id dolore tenetur iure corporis. Velit quo iure atque ea dolorum debitis minus in mollitia."
    },
    {
        id: 3,
        title: "Czym jest teoria strun?",
        author: "Tomasz Kowalski",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint quidem dolores nisi molestiae repudiandae id dolore tenetur iure corporis. Velit quo iure atque ea dolorum debitis minus in mollitia."
    }
]
const artList = articles.map(article =>(<Article key={article.id} {...article}/>))

const HomePage =() => {
 return(
    <div className="home">{artList}</div>
 )   
}

export default HomePage