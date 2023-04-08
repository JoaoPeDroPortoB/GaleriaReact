import * as C from './app.Styles'
import * as Photos from '../services/photos'
import { FormEvent, useEffect, useState } from 'react'
import { Photo } from '../types/Photo'
import { PhotoList } from '../components/PhotoList/PhotoList'
const App = () => {

  const [loading, setLoading] = useState(false)
  const [Uploading, setUploading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos = async () => {
    setLoading(true)
    setPhotos(await Photos.getAll())
    setLoading(false)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const file = formData.get('Image') as File

    if (file && file.size > 0) {
      setUploading(true)
      let results = await Photos.SendFiles(file)
      setUploading(false)

      if (results instanceof Error) {
        alert(`${results.name}`)
      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(results)
        setPhotos(newPhotoList)
      }
    }

  }

  const handleDelete = async (item: string) => {
    await Photos.DeleteFile(item)
    getPhotos()
  }


  return (
    <C.Container>
      <C.Area>
        {/* Area p adicionar os itens */}

        <C.Title>Galeria de fotos</C.Title>

        <C.UploadImage method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name='Image' />
          <input type="submit" value='enviar' />
          {Uploading &&
            <div>Enviando...</div>
          }
        </C.UploadImage>


        {/* Area que os itens serão adicionados */}


        {loading &&
          <div>Carregando...</div>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoListGrid>
            {photos.map((item, index) => (
              <PhotoList item={item} key={index} onClick={handleDelete} />
            ))}
          </C.PhotoListGrid>
        }
      </C.Area>
    </C.Container>
  )
}

export default App
