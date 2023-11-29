function Button(props){
    const { Title , changeCount} = props

    return(
        <button onClick={changeCount} className="mx-10 bg-amber-200 rounded-md text-xl font-semibold">
            {title}
        </button>
    )
}

export default Button