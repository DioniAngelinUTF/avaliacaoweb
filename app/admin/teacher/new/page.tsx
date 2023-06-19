import { getAllProfessor } from "@/app/model/ProfessorService";

export default async function ProfessorPage(){
     const Professores = await getAllProfessor();
    return (
        <>
         <h1> Lista de Professores</h1>
         <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {Professores.map(professor => (  

                <tr key={professor.id}> <td>{professor.name}</td> <td>{professor.email}</td> <td><a href="/admin/professor/edit">Editar</a></td> </tr>

                ))}
            </tbody>
         </table>
        </>
       
    )
}