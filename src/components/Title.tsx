interface Props {
  title: String,
  title_inderline?: boolean,
  sub_title: String,
  sub_title_inderline?: boolean,
}

const Title = ({ title, sub_title, title_inderline, sub_title_inderline }: Props) => {
  return (
    <div className="px-5 pt-3">
      <h1 className=" px-2 text-5xl font-extrabold text-stone-800 dark:text-white font-vergil  ">{title}</h1>
      {title_inderline != null && <div className="m-1 border-2 rounded-lg border-gray-700 dark:border-white"></div>}
      <h2 className=" px-2 py-4 text-3xl font-extrabold text-stone-400 dark:text-white font-vergil ">{sub_title}</h2>
      {sub_title_inderline != null && <div className="m-1 border-2 rounded-lg border-stone-400 dark:border-white"></div>}
    </div>
  )
}

export default Title