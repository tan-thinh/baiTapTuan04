import { useEffect, useState } from "react";
import "../App.css"; // Import file CSS

function Center() {
    const [arr, setArr] = useState([]);
    const url = "https://67c83c090acf98d07085862a.mockapi.io/thinhkhung";

    useEffect(() => {
        fetch(url)
            .then((data) => data.json())
            .then((data) => setArr(data));
    }, []);

    return (
        <div className="container">
            <h2>Saved Recipes</h2>
            <div className="grid">
                {arr.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.img} alt={item.name} className="card-img" />
                        <div className="card-content">
                            <h3>{item.name}</h3>
                            <p className="time">⏱  {item.time} minutes</p>
                        </div>
                        <button className="save-btn">♡</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Center;
