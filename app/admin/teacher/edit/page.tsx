export default async function EditProfessor(){
    return(
        <>
        <h1>Editar Professores</h1>
        <form action="">
                <input type="text" name="name" placeholder="Digite o nome do Professor" />
                <input type="text" name="email" placeholder="Digite o Email do Professor" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}