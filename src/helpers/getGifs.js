

export const getGifs = async( category ) =>{

    //api.giphy.com/v1/gifs/search	
    //J7XxXL6TP9JYEKJYRaV55MMW7cpw1DcH
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=J7XxXL6TP9JYEKJYRaV55MMW7cpw1DcH`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}