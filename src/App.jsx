import React from 'react'
import { ProductsGrid } from './components/ProductsGrid'

export const App = () => {
    return (
        <div>
            <header>
                <p>Aqui va el menu</p>
                <p>Buscador</p>
            </header>
            <main>
                <ProductsGrid />
            </main>
            <p>Footer</p>
        </div>
    )
}
