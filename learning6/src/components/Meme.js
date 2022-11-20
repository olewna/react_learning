import React, {useState,useEffect} from "react";
// import memesData from "../memesData"

export default function Meme() {

    // const [memeUrl, setMemeUrl] = useState(memesData.data.memes[4].url)
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState([])

    function getMeme() {
        const memesArray =allMemeImages;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prev => ({
            ...prev,
            randomImage: url
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => setAllMemeImages(res.data.memes))
    },[])

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return(
        <main className="main">
            <div className="main-buttons">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button onClick={getMeme}>Get a new meme image</button>
            <div className="meme">
                <img className="img-meme" src={meme.randomImage} alt="meme template" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}