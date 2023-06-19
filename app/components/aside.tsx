export default function Aside() {
    return (
        <ul className="w-64 bg-slate-100">
            <li> <a href="/admin/">Home</a></li>
            <li> <a href="/admin/student/new">Cadastrar Professor</a></li>
            <li><a href="/admin/student">Listar Professores</a> </li>
        </ul>
    )
}