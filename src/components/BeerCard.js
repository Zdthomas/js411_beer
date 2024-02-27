import React from "react";
import { Button, Card } from 'react-bootstrap';



function BeerCard(props) {

    

    // const { name } = props;

    return(


    <Card style={{ width: '18rem',

        display: 'grid',

        placeItems: 'center',

        position: 'relative',
        

        }}>

      <Card.Img style = {{height: "200px"}} src={props.image_url} />
      
      <Card.Body>

        <Card.Title>{ props.name }</Card.Title>

        <br/>

        <Card.Text>

            { props.tagline }

                <br/>

                <br/>

            { props.description }

                <br/>

                <br/>

            { props.first_brewed}

        </Card.Text>
        <br />
        <Button variant="primary" onClick = {props.onClickHandler} >

          {props.isLiked ? 'Unlike' : 'Like'}

        </Button>
        
        <br/>
      </Card.Body>
    </Card>

        // <li>

        //     {name}

        // </li>
    )
} 


export default BeerCard;