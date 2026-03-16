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
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then((data: Array<propsBuscaCaminho>) => setResultadoBusca(data)) 
        .catch(error => console.error("Erro na requisição:", error));
        console.log(resultadoBusca);
    }

    return(
        <div>
            <input type="text" value={caminhos} onChange={(e) => setCaminhos(e.target.value)}/>
            <input type="button" value="button" onClick={handleBuscaCaminho} />

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

