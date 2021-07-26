import axios from 'axios'

const url = 'https://mock-pizza-api.herokuapp.com/pizzas'

export const fetchPizzas = async () => {
    try {
        const {data} = await axios.get(url)

        return data
    } catch (e) {}
}