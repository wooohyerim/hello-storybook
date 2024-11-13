type ErrorMessageProp = {
  children: string
}

const ErrorMessage = ({ children }: ErrorMessageProp) => {
  return <p className=" text-error text-[12px]">{children}</p>
}

export default ErrorMessage
