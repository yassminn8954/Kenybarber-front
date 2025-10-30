import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/usuarios";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({
    nome_usuario: "",
    email: "",
    senha: "",
    telefone: "",
  });

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      const resposta = await axios.get(API_URL);
      setUsuarios(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar usuários:", erro);
    }
  };

  const deletarUsuario = async (id) => {
    if (!window.confirm("Deseja realmente excluir este usuário?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsuarios(usuarios.filter((u) => u.id !== id));
    } catch (erro) {
      console.error("Erro ao deletar:", erro);
    }
  };

  const iniciarEdicao = (usuario) => {
    setEditando(usuario.id);
    setForm({
      nome_usuario: usuario.nome_usuario,
      email: usuario.email,
      senha: "",
      telefone: usuario.telefone,
    });
  };

  const cancelarEdicao = () => {
    setEditando(null);
    setForm({ nome_usuario: "", email: "", senha: "", telefone: "" });
  };

  const salvarEdicao = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`, form);
      await carregarUsuarios();
      cancelarEdicao();
    } catch (erro) {
      console.error("Erro ao atualizar:", erro);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ height: "100vh "}}>
      <div style={estilos.container}>
        <h2 style={estilos.titulo}>Lista de Usuários</h2>
        <table style={estilos.tabela}>
          <thead>
            <tr>
              <th style={estilos.th}>ID</th>
              <th style={estilos.th}>Nome</th>
              <th style={estilos.th}>Email</th>
              <th style={estilos.th}>Telefone</th>
              <th style={estilos.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, index) => (
              <tr
                key={u.id}
                style={{
                  ...estilos.tr,
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                <td style={estilos.td}>{u.id}</td>
                <td style={estilos.td}>
                  {editando === u.id ? (
                    <input
                      name="nome_usuario"
                      value={form.nome_usuario}
                      onChange={handleChange}
                      style={estilos.input}
                    />
                  ) : (
                    u.nome_usuario
                  )}
                </td>
                <td style={estilos.td}>
                  {editando === u.id ? (
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      style={estilos.input}
                    />
                  ) : (
                    u.email
                  )}
                </td>
                <td style={estilos.td}>
                  {editando === u.id ? (
                    <input
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      style={estilos.input}
                    />
                  ) : (
                    u.telefone
                  )}
                </td>
                <td style={estilos.acoes}>
                  {editando === u.id ? (
                    <>
                      <button
                        style={estilos.salvar}
                        onClick={() => salvarEdicao(u.id)}
                      >
                        Salvar
                      </button>
                      <button style={estilos.cancelar} onClick={cancelarEdicao}>
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        style={estilos.editar}
                        onClick={() => iniciarEdicao(u)}
                      >
                        Editar
                      </button>
                      <button
                        style={estilos.excluir}
                        onClick={() => deletarUsuario(u.id)}
                      >
                        Excluir
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const estilos = {
  container: {
    width: "90%",
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  titulo: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#333",
  },
  tabela: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 10px", 
  },
  th: {
    textAlign: "left",
    backgroundColor: "#f0f0f0",
    padding: "12px 15px",
    borderRadius: "8px 8px 0 0",
    color: "#444",
    fontWeight: "bold",
  },
  td: {
    padding: "12px 15px",
    textAlign: "left",
    verticalAlign: "middle",
  },
  input: {
    width: "90%",
    padding: "6px 8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  tr: {
    transition: "all 0.2s ease",
  },
  acoes: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
  },
  editar: {
    backgroundColor: "#2196f3",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  excluir: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  salvar: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cancelar: {
    backgroundColor: "#9e9e9e",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Usuarios;
