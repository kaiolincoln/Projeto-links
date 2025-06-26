import { Link } from 'react-router-dom'

export function ErrorPage(){
    return(
        <div className='flex w-full min-h-screen justify-center items-center flex-col text-white'>
            <h1 className='font-bold text-6X1 mb-2'>404</h1>
            <h1 className='font-bold text-4X1 mb-4'>Pagina não encontrada</h1>
            <p className='italic text-1x1 mb-4'> Voce caiu em uma pagina que nao existe! </p>

            <Link classname="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
               voltar para home
            </Link>
        </div>
    )
}