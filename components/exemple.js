export const Exemple = () => {
    const token = localStorage.getItem('token-agence')
    return <div>{JSON.stringify(token)}</div> 
}
