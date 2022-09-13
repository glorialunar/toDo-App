import React from 'react';

export function useLocalStorage(){
    //Creamos los estados para mantener informado al usuario
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    //Creamos el estado inicial con initialValue
    const [item, setItem] = React.useState([]);
    
    //Nuestro useEffect va a simular que se demora 1s en cargar y cuando pase ese tiempo, llama a la función setItem para actualizar nuestro estado y entregarnos el valor que está guardado en el localStorage
    React.useEffect(() => {
        setTimeout(() => {
            try {
                //Comenzamos a trabajar con el localStorage
                const lsItem = localStorage.getItem('');
                let parsedItem; 
                
                //Si está vacio, le seteamos un initialValue, si tiene algo de info, lo parseamos para mostrarlo en la UI.
                if(!lsItem){
                    localStorage.setItem('', JSON.stringify([]));
                    parsedItem = [];
                } else{
                    parsedItem = JSON.parse(lsItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }  
        }, 1000);
    },[]);


      //Trae los datos del localStorage y actualiza el estado. No está dentro del useEffect porque esta funcion no se ejecuta por defecto.
    const saveItem = (newItem) => {
        try {
            localStorage.setItem('', JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    //Se envia un objeto porque ya tenemos mas de un estado en el custom react hook
    return {
        item,
        saveItem,
        loading,
        error
    };
};
