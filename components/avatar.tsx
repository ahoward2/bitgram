type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-10 h-10 rounded-full border-2 border-dark mr-2" alt={name} />
      <div className="text-sm font-bold text-dark font-mono">{name}</div>
    </div>
  )
}

export default Avatar
