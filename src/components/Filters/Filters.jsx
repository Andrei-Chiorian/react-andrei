import './Filters.css'

export function Filters({changeFilters, filters}) {  

    const handleChangeMinPrice = (event) => {        
        changeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        changeFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor="price">Precio</label>
                <input 
                    type="range" 
                    id="price"
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice} 
                />
                <span>{filters.minPrice}€</span>
            </div>

            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory} >
                    <option value="all">Todas</option>
                    <option value="men's clothing">Ropa hombre</option>
                    <option value="jewelery">Joyería</option>
                    <option value="electronics">Electrónica</option>
                    <option value="women's clothing">Ropa mujer</option>
                </select>
            </div>
        </section>
    )
}