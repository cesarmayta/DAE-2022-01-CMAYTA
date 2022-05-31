import React from 'react';

import PosHeader from '../components/PosHeader';
import PosBoleta from '../components/PosBoleta';
import PosCategorias from '../components/PosCategorias';
import PosPlatos from '../components/PosPlatos';
import PosMesas from '../components/PosMesas';

const PosPos = () => {
    return (
        <> 
            <PosHeader/>
            <main class="pos-container">
                <PosCategorias/>
                <section class="tabla">
                <PosMesas/>
                <div class="pedido">
                    <PosPlatos/>
                    <PosBoleta/>
                </div>
                </section>
            </main>
        </>
    )
}

export default PosPos;