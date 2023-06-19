import { NextResponse } from "next/server"
import { deleteDisciplinaById, getDisciplinaById, updateDisciplinaById } from "@/app/model/DisciplinaService"


export async function DELETE(request: Request, { params }: any) {
    deleteDisciplinaById(params.id)
    return NextResponse.json({ sucess: "ok" })

}
export async function GET(request: Request, { params }: any) {
    const disciplina = await getDisciplinaById(params.id)
    return NextResponse.json( disciplina);
}
export async function PUT(request: Request, { params }: any) {
    try {
        const  disciplina = await request.json()
        await updateDisciplinaById(params.id, disciplina.name,  disciplina.description)
        return NextResponse.json(await getDisciplinaById(params.id));
    } catch (error) {
        console.log("PUT" + error)
    }
    //return await GET(request, params.id as any) 
}