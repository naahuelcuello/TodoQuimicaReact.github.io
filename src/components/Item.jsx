import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Button, Text, Image,Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import imagen1 from '../assets/imagen1.png'
import imagen2 from '../assets/imagen2.png'
import imagen3 from '../assets/imagen3.png'
import imagen4 from '../assets/imagen4.png'
import imagen5 from '../assets/imagen5.png'
import "./Item.css";

const images = [imagen1, imagen2, imagen3, imagen4, imagen5];
const Item = ({id,titulo,precio}) => {
    const imgSrc = images[id - 1];
    return (
        <div>
            <Flex>
                <Card maxW='sm' m='5'>
                    <CardBody>
                        <Image
                            alt={`imagen ${id}`} src={imgSrc}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{titulo}</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                ${precio}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Link to={`/item/${id}`}>
                                <Button variant='ghost' colorScheme='blue'>
                                    Mas informacion
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Flex>
        </div>
    )
}

export default Item