import marked from "marked";

marked.setOptions({
  breaks: true
});

export default function Preview ( { state } ) {
  
  const cleanState = marked(state);
  
  return (
    <div id='preview' className='textarea textarea--preview'
      dangerouslySetInnerHTML={{__html: cleanState}}
    />
  )
}