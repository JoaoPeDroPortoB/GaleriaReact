import styled from 'styled-components'


export const Container = styled.div`
    min-height:100vh;
    background-color:#2F343B;
`

export const Area = styled.div`
    max-width:1280px;
    margin:auto;
    color:white;
    
`
export const Title = styled.h1`
    text-align: center;
    padding-top:20px;
`

export const PhotoListGrid = styled.div`
     
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
`
export const UploadImage = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 0px;
    background-color: #3D4052;
    padding: 30px 10px;
    border-radius: 10px;
    @media (min-width:700px) {
       
        flex-direction: row;
       justify-content: center;
       align-items: center;
    }

`

export const SpanMessage = styled.span`    
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    flex: 1;
    @media (min-width: 700px) {
    
   
    justify-content: flex-start;
    }
     
    `
export const InputFile = styled.input.attrs({
    type: 'file',
})`
    display: none;
  `;
export const InputLabel = styled.label`
  
  margin: 10px 10px;
  padding: 10px 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #666;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const InputSubmit = styled.input`
    margin: 10px 20px;
    padding: 10px 50px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #666;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`

export const Uploading = styled.div`
    padding: 10px 0px;
   
`