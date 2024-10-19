export const FORM_TYPES = {

    users: [
        {   name: "fullname",
            tag: "input", 
            type: "text",
            viewValue: "Nombre completo", 
            controls: {
                                required: true,
                                minLength: 10,
                                maxLength: 30,
                            }  
        },
        {
            name: "email", 
            tag: "input",
            type: "email",
            viewValue: "Correo electrónico",
            controls: {
                pattern: '^[a-z ]$',
                required: true,
                maxLength: 30,
                minLength: 10,
            }
        },
        {
            name: "dateBorn", 
            tag: "input",
            type: "date",
            viewValue: "Fecha nacimiento",
            controls: {
                required: true,
            }
        },
        {
            name: "password", 
            tag: "input",
            type: "password",
            viewValue: "Contraseña",
            controls: {
                required: true,
                minLength: 8,
                maxLength: 20,
            }
        }
    ],
    products: [
        {}
    ]

}
