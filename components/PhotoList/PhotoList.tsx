import * as C from './style'
import { Photo } from '../../types/Photo'
import { deleteDoc } from 'firebase/firestore'
import * as Photos from '../../services/photos'

type Props = {
    item: Photo;
    onClickDelete: (item: string) => void;
    onClick: () => void
}

export const PhotoList = ({ item, onClickDelete, onClick }: Props) => {

    return (
        <C.Container>
            <div>
                <img onClick={onClick} src={item.url} alt={item.name} />
            </div>
            <span>{item.name}</span>
            <button onClick={() => onClickDelete(item.name)}>Deletar</button>
        </C.Container>
    )
}
