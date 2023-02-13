import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Button, TextField, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";



export const Home = () => {

    const [data, setData] = useState([])
    const [addToCart, setAddToCart] = useState([])
    const [copyData, setCopyData] = useState([])



    async function addData() {
        const getData = await axios.get("https://fakestoreapi.com/products")
        console.log(getData.data)
        setCopyData(getData.data)
        setData(getData.data)
    }

    const handleAddtoCart = (item) => {
        const duplicated = addToCart.some((elem) => elem.id == item.id)
        if (!duplicated) {
            setAddToCart([...addToCart, item])
        }
    }

    const hanflFilter = (value) => {
        const searchData = copyData.filter((item) => item.title.toUpperCase().includes(value.toUpperCase()))
        setData(searchData)

    }

    const handleSearchButton = (userCategory) => {

        if("All" == userCategory ){
            setData(copyData)
        }
        else{
        const search = copyData.filter((item) => item.category.includes(userCategory))

        setData(search)}
    }

    useEffect(() => {

        addData()
    }, [])


    return (
        <div>
            <Grid container spacing={4} style={{ marginTop: 1 }}>
                <Grid item xs={2} className="Button-Container"> <Button variant="contained" onClick={() => handleSearchButton("men's clothing")}   >Man</Button></Grid>
                <Grid item xs={2} className="Button-Container"> <Button variant="contained" onClick={() => handleSearchButton("women's clothing")}>Female</Button></Grid>
                <Grid item xs={2} className="Button-Container"> <Button variant="contained" onClick={() => handleSearchButton("electronics")}>Electronic</Button></Grid>
                <Grid item xs={2} className="Button-Container"> <Button variant="contained" onClick={() => handleSearchButton("jewelery")}>Jewelary</Button></Grid>
                <Grid item xs={1} className="Button-Container"> <Button variant="contained" onClick={() => handleSearchButton("All")}>All</Button></Grid>
                <Grid item xs={2} className="Button-Container"> <TextField label="search"
                onChange={(e) => hanflFilter(e.target.value)}
                /></Grid>
                <Grid item xs={1}> <Badge color="secondary" badgeContent={addToCart.length} showZero>
                <ShoppingCartIcon style={{ color: "#1976d2", fontSize: 40, cursor: "pointer" }} />
                </Badge>
                </Grid>

                {data.map((item, index) => {
                    return (
                        <Grid item xs={3} key={index}>

                            <Card sx={{ height: 350 }} >
                                <CardContent>
                                    <img src={item.image} width={200} height={200} style={{ position: "relative", left: 40 }} />

                                    <h3>Title : {item.title.substring(0, 30)} {item.title.length > 30 && "..."} </h3>

                                    <h3> Price : $ {item.price}</h3>

                                    <Button variant="contained" color="error">Detail</Button>
                                    <Button variant="contained" sx={{ position: "relative", left: 70 }}
                                        onClick={() => handleAddtoCart(item)}

                                    >Add to cart</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}