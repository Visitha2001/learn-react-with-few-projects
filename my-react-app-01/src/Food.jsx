function Food(){
    const food1 = "Bananan";
    const food2 = "Orange";
    const food3 = "Mango";

    return(
        <ol>
            <li>Apple</li>
            <li>{food1.toLowerCase()}</li>
            <li>{food2.toLowerCase()}</li>
            <li>{food3.toLowerCase()}</li>
        </ol>
    )
}

export default Food