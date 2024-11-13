type LabelProps = {
  htmlFor: string
  children: string
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label className="font-bold text-[14px] text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label
