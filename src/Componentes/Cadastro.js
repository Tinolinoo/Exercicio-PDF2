import { useState, useEffect } from 'react';

function Cadastro() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Pagar a conta de luz",
        "Estudar programação",
        "Enviar tarefa"
    ]);
    const [nomeUsuario, setNomeUsuario] = useState('');

    const tarefasStorage = localStorage.getItem('@tarefa');
    const nomeUsuarioStorage = localStorage.getItem('@nomeUsuario');

    useEffect(() => {
        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }

        if (nomeUsuarioStorage) {
            setNomeUsuario(nomeUsuarioStorage);
        } else {
            const nome = prompt("Por favor, insira seu nome:");
            if (nome) {
                setNomeUsuario(nome);
                localStorage.setItem('@nomeUsuario', nome);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);

    function handleRegistro(e) {
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
            <h1>Cadastro de tarefas</h1>
            {nomeUsuario && <h2>Bem-vindo, {nomeUsuario}!</h2>}
            <form onSubmit={handleRegistro}>
                <label>Nome da tarefa: </label><br />
                <input 
                    placeholder='Digite uma tarefa'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />
                <button type='submit'>Registro</button>
            </form>
            <br />
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cadastro;