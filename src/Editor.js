
export default function Editor ( { state, setState } ) {
  
  function handleChange (e) {
    setState(e.target.value);
  }
  
  return (
    <textarea id='editor' className='textarea textarea--editor' 
      value={state}
      onChange={handleChange}  
    />
  )
}