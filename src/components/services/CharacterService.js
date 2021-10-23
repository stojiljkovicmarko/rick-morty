export default class CharacterService {

    static getCharacters() {

        const url = "https://rickandmortyapi.com/api/character";
    
        return fetch(url).then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        }).then(data => {
            console.log(data.results);
            return {
                results: data.results,
                pageCount: data.info.pages
            };
        })
    }

    static getCharactersByPage(pageNumber) {

        const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

        return fetch(url).then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        }).then(data => {
            return data.results;
        })
    }

}