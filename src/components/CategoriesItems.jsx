import styled from 'styled-components'

const Container = styled.div`
   flex: 1;
   margin: 4px;
   height: 30vh;
   position: relative;
`;



const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`;

const Titel = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 15px;
    border-radius: 10px;
    cursor:pointer;
    background-color: white;
    color: gray;
    font-size: 15px;
`;

const CategoriesItems = ({item}) => {


  return (
    <Container>
        <Image src={item.img}/>
        <InfoContainer>
            <Titel>{item.title}</Titel>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Container>
  )
}

export default CategoriesItems