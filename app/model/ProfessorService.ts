import { sql } from "@vercel/postgres";

export async function getAllProfessor(){
    const { rows:Professores } = await sql`SELECT * from professor;`;
    return Professores
}
export async function addProfessor(name:string, email:string){
    await sql`INSERT INTO professor (name, email) VALUES (${name}, ${email})`;
}
export async function deleteProfessorById(id: string){
    await sql`DELETE FROM professor WHERE id=${id}`;
}
export async function getProfessorById(id:string){
   const {rows:Professores} = await sql`SELECT * FROM professor WHERE id=(${id})`
   return Professores[0]
}
export async function updateProfessorById(id:string, name:string, email:string){
    await sql`UPDATE professor SET name=${name}, email=${email} WHERE id=${id}`
}
