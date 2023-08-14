interface Props{
    str: String
}

const Title = ({str}:Props) => {
  return (
    <div className="p-5">
    <h1 className="flex items-center text-5xl font-extrabold dark:text-white">{str}</h1>
    </div>
  )
}

export default Title