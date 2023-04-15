import React, { useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import {useThemeHook} from '../GlobalComponents/ThemeProvider';
import { BiSearch} from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
const Home = () =>{
    const [theme] = useThemeHook ();
    const [searchInput, setSearchInput] = useState('');
     const [productData, setProductData] = useState([]);

     async function getResponse(){
        const res = await fetch ('https://albanian-store-api.herokuapp.com/products')
                            .then(res=> res.json());
                            setProductData(await res);
     }
 useEffect(()=>{
        getResponse();
     },[]);

    return (
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col xs={10} md={7} lg={4} className="mb-3 mx-auto text-center">
                <h1 className={theme ? 'text-light my-5' : 'text-black my-5'}>Search products</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text className={theme ? 'bg-black text-danger' : 'bg-light text-danger'}>
                <BiSearch size="2rem"/>
                </InputGroup.Text>
                <FormControl
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                    className={theme ? 'bg-light-black text-danger' : 'bg-light text-danger'}
                    />
            </InputGroup>
            {searchInput}
            </Col>
           <SearchFilter
           value={searchInput}
           data={productData}
           renderResults={results =>(
            <Row className="justify=content=center">
                {results.map((item, i)=>(
                    <ProductCard  data={item} key={i} />
                ))}

            </Row>
           )}
           />


          </Row>
        </Container>
    );
};
export default Home;