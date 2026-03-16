import React, { useState } from "react";

interface CartaoUsuarioProps {
    nome: string;
    idade?: number;
}

function CartaoUsuario({nome, idade}: CartaoUsuarioProps) {
    const [botao, setBotao] = useState<boolean>(false);


    return (
        <div>
            <h2>{nome}</h2>
            <button onClick={() => setBotao(!botao)}>Clique aqui</button>
            {botao && (
                <p>Idade: {idade ?? "Não informada"}</p>
            )}
            {botao && <p>O botão foi clicado!</p>}
        </div>
    );
}

const teste = <CartaoUsuario nome="João" idade={0} />;

export default function TestePage() {
    return (
        <div>
            <h1>Teste de Componente</h1>
            {teste}
        </div>
    );
}