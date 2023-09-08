import Swal from 'sweetalert2';

export async function messageSuccess (message, action = ()=>{}){
    try {
        const result = await Swal.fire({
            title: message,
            icon: 'success',
            confirmButtonText: 'Ok',
        })
        if (result.isConfirmed) {
            action();
        }
    } catch (error) {
        console.error('Error al mostrar la alerta:', error);
    }
}

export async function messageError (message, action = ()=>{}){
    try {
        const result = await Swal.fire({
            title: message,
            icon: 'error',
            confirmButtonText: 'Ok',
        })
        if (result.isConfirmed) {
            action();
        }
    } catch (error) {
        console.error('Error al mostrar la alerta:', error);
    }
}

export async function messageInfo (message, action = ()=>{}){
    try {
        const result = await Swal.fire({
            title: message,
            icon: 'info',
            confirmButtonText: 'Ok',
        })
        if (result.isConfirmed) {
            action();
        }
    } catch (error) {
        console.error('Error al mostrar la alerta:', error);
    }
}