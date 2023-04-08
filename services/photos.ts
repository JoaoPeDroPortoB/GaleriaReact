import { Photo } from '../types/Photo'
import { storage } from '../libs/fireBase'
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'
export const getAll = async () => {
    let list: Photo[] = []


    // meio que entramos no storage (1 parametro) e no 2 parametro selecionamos a pasta
    const imagesFolder = ref(storage, "Images");


    // Lista tudo que tiver dentro do parametro
    const photoList = await listAll(imagesFolder)
    console.log(photoList)


    for (let i in photoList.items) {

        let photoURL = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoURL
        })

    }
    console.log(list)
    return list
}

export const SendFiles = async (file: File) => {
    console.log(file, 'files')
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        let randomId = v4()
        let newFile = ref(storage, `Images/${randomId}`)

        let upload = await uploadBytes(newFile, file)
        let photoURL = await getDownloadURL(upload.ref)

        return { name: upload.ref.name, url: photoURL } as Photo

    } else {
        return new Error('Tipo de arquivo não suportado')
    }
}

export const DeleteFile = async (item: string) => {
    const deleteRef = ref(storage, `Images/${item}`)
    await deleteObject(deleteRef)
}