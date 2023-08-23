const Select = ({options, onChange}) => {
  return (
    <div className={'content-container__sort-select'}>
      <select onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
        <path d="M9 8.09753L0.339745 0.45119L17.6603 0.451192L9 8.09753Z" fill="black"/>
      </svg>
    </div>
  )
}

export default Select
