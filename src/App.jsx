import { useState } from 'react'
import "@picocss/pico"


function App() {
  
  const pictureIDs = [200, 201, 202, 203, 204]

  const [imageId, setImageId] = useState(pictureIDs[0])
  

  const getLoremPicsumImg = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}` 


  function handleClick(id) {
    setImageId(id)
  }


  return (
    <>
      <main className='container'>
        <hgroup>
        <h2>Images App</h2>
        <h3>Image:</h3>
        </hgroup>
        <img src={getLoremPicsumImg(imageId)} alt="" style={{width:"80%"}} />
        <div className="grid">
          {
            pictureIDs.map((item, index) => <div style={{marginTop:"30px"}} key={index}>
              {
                <img 
                  onClick={() => handleClick(item)}
                  src={getLoremPicsumImg(item, 100, 100)}
                  alt="" /> 
              }
            </div>)
          }
        </div>
      </main>
    </>
  )
}

export default App
