import React, { useState } from "react";

interface propsBuscaCaminho{
    id: number;
    email: string;
    setor: string;
}

function BuscaCaminho(){
    const [caminhos, setCaminhos] = useState<string>("");
    const [resultadoBusca, setResultadoBusca] = useState<propsBuscaCaminho[]>([]);
    
    function handleBuscaCaminho(){
        const request = fetch("http://localhost:8080/consignacao/posicao-produto/relatorio-posicao-produto?data=2024-06-01&produto=123456789")
        .then(response => response.json())
        .then((data: Array<propsBuscaCaminho>) => setResultadoBusca(data)) 
        .catch(error => console.error("Erro na requisição:", error));
    }

    const dadosFalsos: propsBuscaCaminho[] = [
    { id: 1, email: "joao@email.com", setor: "TI" },
    { id: 2, email: "maria@email.com", setor: "RH" },

];

    return(
        <div>
            <input type="text" value={caminhos} onChange={(e) => setCaminhos(e.target.value)}/>
            <input type="button" value="button" onClick={() => setResultadoBusca(dadosFalsos.filter(dado => dado.setor.includes(caminhos)))} />

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Setor</th>
                    </tr>
                </thead>
                <tbody>
                    {resultadoBusca.map((dado) =>(
                        <tr key={dado.id}>
                            <td>{dado.id}</td>
                            <td>{dado.email}</td>
                            <td>{dado.setor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BuscaCaminho;

