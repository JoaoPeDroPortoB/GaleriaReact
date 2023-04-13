import * as C from './app.Styles'
import * as Photos from '../services/photos'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { Photo } from '../types/Photo'
import { PhotoList } from '../components/PhotoList/PhotoList'
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import PropTypes from "prop-types";

import LightGalleryComponent from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import type { LightGallery } from 'lightgallery/lightgallery'


const App = () => {

  const [data, setData] = useState<any>({ item: '', index: 0 })
  const [loading, setLoading] = useState(false)
  const [Uploading, setUploading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [sendNameFile, setSendNameFile] = useState('')
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    getPhotos()
  }, [])

  useEffect(() => {
    if (errorMessage !== '') {
      setHasError(true);
      setTimeout(() => setErrorMessage(''), 1000);
    } else {
      setHasError(false);
    }

  }, [errorMessage]);


  const getPhotos = async () => {
    setLoading(true)
    setPhotos(await Photos.getAll())
    setLoading(false)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const file = formData.get('Image') as File

    if (!file || file.size === 0) {
      setHasError(true)
      setErrorMessage("Selecione um arquivo para enviar")
    }

    if (file && file.size > 0) {
      setUploading(true)
      let results = await Photos.SendFiles(file)
      setUploading(false)

      if (results instanceof Error) {
        setHasError(true)
        setErrorMessage(`${results.message}`)
        formRef.current?.reset()
        setSendNameFile('')

      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(results)
        setPhotos(newPhotoList)
        formRef.current?.reset()
        setSendNameFile('')
      }

    }

  }

  const handleDelete = async (item: string) => {
    await Photos.DeleteFile(item)
    getPhotos()
  }



  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    let file = e.target.files?.[0];
    console.log(file)
    if (file) {
      setSendNameFile(file.name)
    }

  };

  // Implementar o ligthgallery no projeto com as funcionalidades de botoes de proximo e anterior , fazer download da imagem e mostrar o index tanto da imagem atual mas também do numero total de itens existentes ali, mostrar as imagens com uma tamanho menor logo abaixo da selecionada  e a imagem selecionada tem que ter o title dela

  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  const lightBox = useRef<LightGallery | null>(null)

  const OpenGallery = (index: number) => {
    lightBox.current?.openGallery(index)
  }

  return (
    <>
      <LightGalleryComponent
        onInit={ref => {
          if (ref) {
            lightBox.current = ref.instance
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={photos.map(image => ({
          src: image.url,
          thumb: image.url,
          subHtml: image.name
        }))}
      >

      </LightGalleryComponent>



      <C.Container>
        <C.Area>

          <C.Title>Galeria de fotos</C.Title>


          <C.UploadImage method='POST' onSubmit={handleFormSubmit} ref={formRef}>
            <C.InputFile onChange={handleFileInputChange} type="file" name='Image' id='file-input' />

            <C.InputLabel htmlFor="file-input">Selecione o arquivo</C.InputLabel>

            {!hasError &&
              <C.SpanMessage>{sendNameFile}</C.SpanMessage>
            }

            {hasError && <ErrorMessage message={errorMessage} />}
            <C.InputSubmit type="submit" value='enviar' />
            {Uploading &&
              <C.Uploading>Enviando...</C.Uploading>
            }
          </C.UploadImage>


          {loading &&
            <div>Carregando...</div>
          }

          {!loading && photos.length > 0 && !data.item &&
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter='20px'>
                {photos.map((item, index) => (
                  <PhotoList item={item} key={index} onClick={() => OpenGallery(index)} onClickDelete={handleDelete} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          }
        </C.Area>
      </C.Container>

    </>
  )
}

export default App


