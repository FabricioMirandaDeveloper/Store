class UserStorage {
    constructor(storageKey = "registeredUsers") {
        this.storageKey = storageKey
    }
    getUsers() {
        const users = localStorage.getItem(this.storageKey);
        return users ? JSON.parse(users) : [];
    }
    saveUsers(users) {
        localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
    isEmailRegistered(email) {
        const users = this.getUsers();
        return users.some(user => user.email === email);
    }
    registerUser(user) {
        if (!this.isEmailRegistered(user.email)) {
            const users = this.getUsers();
            users.push(user);
            this.saveUsers(users);
            return true; // Registro exitoso
        }
        return false; // El correo ya está registrado
    }
}



function registerUser(event) {
    event.preventDefault();  // Evita el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;
    // Crear una instancia de UserStorage
    const userStorage = new UserStorage();
    // Crear un objeto de usuario
    const newUser = {
        email: email,
        password: password // Nota: Asegúrate de manejar las contraseñas de manera segura en un entorno real.
    };
    // Intentar registrar el usuario
    if (userStorage.registerUser(newUser)) {
        console.log('Usuario registrado con éxito.');
        // Opcional: puedes mostrar un mensaje en la interfaz de usuario
    } else {
        console.log('El correo electrónico ya está registrado.');
        // Opcional: puedes mostrar un mensaje de error en la interfaz de usuario
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Agregar un event listener al botón de registro
    document.getElementById('registerButton').addEventListener('click', registerUser);
});
