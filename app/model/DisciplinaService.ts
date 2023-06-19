import { sql } from "@vercel/postgres";

export async function getAllDisciplina(){
    const { rows:disciplinas } = await sql`SELECT * from disciplina;`;
    return disciplinas
}
export async function addDisciplina(name:string, description:string){
    await sql`INSERT INTO disciplina (name, description) VALUES (${name}, ${description})`;
}
export async function deleteDisciplinaById(id: string){
    await sql`DELETE FROM disciplina WHERE id=${id}`;
}
export async function getDisciplinaById(id:string){
   const {rows:disciplinas} = await sql`SELECT * FROM disciplina WHERE id=(${id})`
   return disciplinas[0]
}
export async function updateDisciplinaById(id:string, name:string, description:string){
    await sql`UPDATE disciplina SET name=${name}, email=${description} WHERE id=${id}`
}
