import * as C from './style'
import { Photo } from '../../types/Photo'
import { deleteDoc } from 'firebase/firestore'
import * as Photos from '../../services/photos'

type Props = {
    item: Photo;
    onClick: (item: string) => void
}

export const PhotoList = ({ item, onClick }: Props) => {

    return (
        <C.Container>
            <img src={item.url} alt={item.name} />
            <span>{item.name}</span>
            <button onClick={() => onClick(item.name)}>Deletar</button>
        </C.Container>
    )
}
